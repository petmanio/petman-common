import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { OrganizationDto } from './organization.dto';

export class OrganizationListDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: OrganizationDto, isArray: true })
  @Type(dtoGetter(OrganizationDto))
  list: OrganizationDto[];
}
