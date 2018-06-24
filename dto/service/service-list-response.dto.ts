import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { ServiceDto } from './service.dto';

export class ServiceListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: ServiceDto, isArray: true })
  @Type(dtoGetter(ServiceDto))
  list: ServiceDto[];
}
