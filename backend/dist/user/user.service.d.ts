import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
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
    findOne(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    update(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        createdAt: Date;
    }>;
}
