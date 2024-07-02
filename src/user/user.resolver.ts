import { Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';

@Resolver()
export class UserResolver {
    @Query(() => User)
    async getUser(): Promise<User> {
        const user: User = {
            id: 1,
            name: 'mathieu',
            email: 'matma5976@gmail.com',
            password: 'password',
            token: '',
        };
        return user;
    }
    
}