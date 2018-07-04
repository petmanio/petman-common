import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { PoiDto } from './poi.dto';

export class PoiListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: PoiDto, isArray: true })
  @Type(dtoGetter(PoiDto))
  list: PoiDto[];
}
