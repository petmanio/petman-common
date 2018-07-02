import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { UserDto } from '../user';

export class AdoptDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: Number })
  price: number;

  @ApiModelProperty({ type: String, isArray: true })
  @Transform(images => map(images, image => '/upload' + image), { groups: ['petman-api'] })
  images: string[];

  @ApiModelProperty({ type: UserDto })
  @Type(dtoGetter(UserDto))
  user: UserDto;

  @ApiModelProperty({ type: Boolean })
  isOwner: boolean;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
