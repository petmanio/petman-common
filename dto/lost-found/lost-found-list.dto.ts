import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { LostFoundDto } from './lost-found.dto';

export class LostFoundListDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: LostFoundDto, isArray: true })
  @Type(dtoGetter(LostFoundDto))
  list: LostFoundDto[];
}
