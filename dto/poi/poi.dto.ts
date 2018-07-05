import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { UserDto } from '../user';
import { AddressDto, CategoryDto } from '../shared';

export class PoiDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Transform(images => map(images, image => '/upload' + image), { groups: ['petman-api'] })
  images: string[];

  @ApiModelProperty({ type: AddressDto })
  @Type(dtoGetter(AddressDto))
  address: AddressDto;

  @ApiModelProperty({ type: UserDto })
  @Type(dtoGetter(UserDto))
  user: UserDto;

  @ApiModelProperty({ type: CategoryDto })
  @Type(dtoGetter(CategoryDto))
  primaryCategory: CategoryDto;

  // TODO: add type
  @Type(dtoGetter(PoiDto))
  main: PoiDto[];

  // TODO: add type
  // @ApiModelProperty({ type: PoiDto, isArray: true })
  @Type(dtoGetter(PoiDto))
  branches: PoiDto[];

  @ApiModelProperty({ type: Boolean })
  isOwner: boolean;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
