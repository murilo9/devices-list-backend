import bcrypt from 'bcrypt';

export default async function getPasswordHash(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}