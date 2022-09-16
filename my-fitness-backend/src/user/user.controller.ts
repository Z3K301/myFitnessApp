import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UserCrud } from './user.crud';
import { UserService } from './user.service';
@Crud(UserCrud)
@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Get('/:id')
  async getUserData(@Param('id') id: number) {
    return await this.userService.getField(
      { id },
      'id, login, fullName, phone, email, status, roleId',
    );
  }

  @Post()
  async insert(@Body() body) {
    const { login, fullName, phone, email, password, status, roleId } = body;
    return await this.userService.insert(
      login,
      fullName,
      phone,
      email,
      password,
      status,
      roleId,
    );
  }

  @Put('/:id')
  async update(@Body() body, @Param('id') id: number) {
    const { login, fullName, phone, email, password, status, roleId } = body;
    return await this.userService.update(
      id,
      login,
      fullName,
      phone,
      email,
      password,
      status,
      roleId,
    );
  }

  @Get('/tipo/:tipo')
  async getTipo(@Param('tipo') tipo: number) {
    return this.userService.getUsersByRoleType(tipo);
  }

  @Post('/checkEmail')
  async checkEmail(@Body() body: any) {
    return await this.userService.checkEmail(body.email);
  }

  @Post('/field')
  async getField(@Body() body) {
    const { where, field } = body;
    return await this.userService.getField(where, field);
  }

  @Post('/checkToken')
  async checkToken(@Body() body) {
    const { email, token } = body;
    return await this.userService.checkToken(email, token);
  }

  @Post('/resetPassword')
  async resetPassword(@Body() body) {
    const { email, password } = body;
    return await this.userService.resetPassword(email, password);
  }
}
