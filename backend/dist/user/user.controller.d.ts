import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
}
