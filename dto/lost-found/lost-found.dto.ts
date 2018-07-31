import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { UserDto } from '../user/user.dto';
import { LostFoundType } from '../../enum/index';

export class LostFoundDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: LostFoundType })
  type: LostFoundType;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Transform(images => map(images, image => '/upload' + image), {
    groups: ['petman-api']
  })
  images: string[];

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

  @Exclude() deleted: Date;
}
