import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        password: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
}
