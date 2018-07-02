import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { UserDto } from '../user';
import { ServiceDto } from '../service';
import { AddressDto } from '../shared';
import { BranchDto } from './branch.dto';

export class OrganizationDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  title: string;

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

  @ApiModelProperty({ type: ServiceDto, isArray: true })
  @Type(dtoGetter(ServiceDto))
  services: ServiceDto[];

  @ApiModelProperty({ type: BranchDto, isArray: true })
  @Type(dtoGetter(BranchDto))
  branches: BranchDto[];

  @ApiModelProperty({ type: Boolean })
  isOwner: boolean;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
