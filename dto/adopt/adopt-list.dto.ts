import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { AdoptDto } from './adopt.dto';

export class AdoptListDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: AdoptDto, isArray: true })
  @Type(dtoGetter(AdoptDto))
  list: AdoptDto[];
}
