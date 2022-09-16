import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { hashPassword } from 'src/common/functions/hashPassword';

import { User } from './entities/user.entity';
const jwt = require('jsonwebtoken');

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) public repository) {
    super(repository);
  }

  async insert(
    login: string,
    fullName: string,
    phone: string,
    email: string,
    password: string,
    status: number,
    roleId: number,
  ) {
    const { hash } = await hashPassword(password);
    return await this.repository.insert({
      login,
      fullName,
      phone,
      email,
      password: hash,
      status,
      roleId,
    });
  }

  async update(
    id: number,
    login: string,
    fullName: string,
    phone: string,
    email: string,
    password: string,
    status: number,
    roleId: number,
  ) {
    if (password) {
      const { hash } = await hashPassword(password);
      return await this.repository.update(
        { id },
        { login, fullName, phone, email, password: hash, status, roleId },
      );
    } else {
      return await this.repository.update(
        { id },
        { login, fullName, phone, email, status, roleId },
      );
    }
  }

  async findLogin(login: string): Promise<User | undefined> {
    return this.repository.find(
      (user: { login: string }) => user.login === login,
    );
  }

  async getUsersByRoleType(tipo: number): Promise<User[]> {
    return this.repository
      .createQueryBuilder('u')
      .select('u.*')
      .innerJoin('role', 'r', 'r.id = u.roleId')
      .where(`r.tipo = :tipo`, { tipo })
      .getRawMany();
  }

  async getField(where: object, fields: string): Promise<any> {
    return await this.repository
      .createQueryBuilder()
      .select(fields)
      .where({ ...where })
      .getRawOne();
  }

  async checkEmail(email: string): Promise<any> {
    const user = await this.repository
      .createQueryBuilder('u')
      .select('u.email')
      .where(`u.email = :email`, { email })
      .getRawOne();
    return user ? true : false;
  }

  async checkToken(email: string, token: string): Promise<any> {
    const { password } = await this.getField({ email }, 'password');
    try {
      return jwt.verify(token, password) ? true : false;
    } catch (err) {
      return false;
    }
  }

  async resetPassword(email: string, password: string): Promise<any> {
    const { hash } = await hashPassword(password);
    return await this.repository.update({ email }, { hash });
  }
}
