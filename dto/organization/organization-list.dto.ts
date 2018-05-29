import { ApiModelProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { OrganizationDto } from './organization.dto';

export class OrganizationListDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: OrganizationDto, isArray: true })
  @Type(dtoGetter(OrganizationDto))
  list: OrganizationDto[];

  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(services => {
    if (!services) {
      return [];
    }
    return typeof services === 'string' ? [services] : services;
  })
  services: number[];
}
