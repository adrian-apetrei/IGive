import { Document } from 'mongoose';

export interface User extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly email: string;
    readonly avatar: string;
    readonly bio: string;
    readonly firstLogin: boolean;
}
