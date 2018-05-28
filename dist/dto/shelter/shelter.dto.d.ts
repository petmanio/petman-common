import { UserDto } from '../user/user.dto';
export declare class ShelterDto {
    id: number;
    text: string;
    price: number;
    images: string[];
    user: UserDto;
    isOwner: boolean;
    created: Date;
    updated: Date;
    deleted: Date;
}
