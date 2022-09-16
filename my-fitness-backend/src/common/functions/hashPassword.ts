import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string) {
  const salt = 10;

  const hash = await bcrypt.hash(password, salt);
  const isMatch = await bcrypt.compare(password, hash);

  return { hash, isMatch };
}
