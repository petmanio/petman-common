import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
// FIXME: import { UserDto } from '../user'; not working
import { UserDto } from '../user/user.dto';
import { Gender, LostFoundType, PetAge, PetSize, PetType } from '../../enum';

export class LostFoundDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Transform(images => map(images, image => '/upload' + image), {
    groups: ['petman-api']
  })
  images: string[];

  @ApiModelProperty({
    enum: [LostFoundType.FOUND, LostFoundType.LOST]
  })
  applicationType: LostFoundType;

  @ApiModelProperty({
    enum: [PetType.DOG, PetType.CAT, PetType.OTHER],
    required: false
  })
  type: PetType;

  @ApiModelProperty({ enum: [Gender.MALE, Gender.FEMALE], required: false })
  gender: Gender;

  @ApiModelProperty({
    enum: [PetSize.XL, PetSize.LARGE, PetSize.MEDIUM, PetSize.SMALL],
    required: false
  })
  size: PetSize;

  @ApiModelProperty({
    enum: [PetAge.SENIOR, PetAge.ADULT, PetAge.YOUNG, PetAge.BABY],
    required: false
  })
  age: PetAge;

  @ApiModelProperty({ type: UserDto })
  @Type(dtoGetter(UserDto))
  user: UserDto;

  @ApiModelProperty({ type: Boolean })
  isOwner: boolean;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  created: Date;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  updated: Date;

  @Exclude()
  deleted: Date;
}
