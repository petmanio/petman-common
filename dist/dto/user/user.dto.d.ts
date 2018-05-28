import { UserDataDto } from './user-data.dto';
export declare class UserDto {
    id: number;
    email: string;
    password: string;
    userData: UserDataDto;
    authProviders: any;
    businessUsers: UserDto[];
    created: Date;
    updated: Date;
    deleted: Date;
}
