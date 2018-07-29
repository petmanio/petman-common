import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { SitterDto } from './sitter.dto';

export class SitterListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: SitterDto, isArray: true })
  @Type(dtoGetter(SitterDto))
  list: SitterDto[];
}
