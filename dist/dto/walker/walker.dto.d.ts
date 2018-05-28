import { UserDto } from '../user/user.dto';
export declare class WalkerDto {
    id: number;
    text: string;
    price: number;
    user: UserDto;
    isOwner: boolean;
    created: Date;
    updated: Date;
    deleted: Date;
}
