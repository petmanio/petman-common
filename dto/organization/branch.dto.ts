import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { ServiceDto } from '../service';
import { AddressDto } from '../shared';
// import { OrganizationDto } from './organization.dto';

export class BranchDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  title: string;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: String, isArray: true })
  @Transform(images => map(images, image => '/upload' + image), { groups: ['petman-api'] })
  images: string[];

  @ApiModelProperty({ type: Boolean, default: false })
  main: boolean;

  @ApiModelProperty({ type: AddressDto })
  @Type(dtoGetter(AddressDto))
  address: AddressDto;

  @ApiModelProperty({ type: ServiceDto, isArray: true })
  @Type(dtoGetter(ServiceDto))
  services: ServiceDto[];

  // FIXME: plainToClass not works on circular dependencies
  // @ApiModelProperty({ type: OrganizationDto })
  // @Type(dtoGetter(OrganizationDto))
  // organization: OrganizationDto;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
