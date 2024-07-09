import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class UserService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
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
    findOne(id: number): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    update(id: number, updateUserDto: Prisma.UserUpdateInput): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        email: string;
        password: string;
    }>;
}
