import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'matma5976@gmail.com',
      password: 'password',
    },
    {
      userId: 2,
      email: 'estelle@gmail.com',
      password: 'password',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async register(email: string, password: string): Promise<User | undefined> {
    const newUser = {
      userId: this.users.length + 1,
      email: email,
      password: password,
    };
    this.users.push(newUser);
    return newUser;
  }
}