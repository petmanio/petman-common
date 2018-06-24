import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { WalkerDto } from './walker.dto';

export class WalkerListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: WalkerDto, isArray: true })
  @Type(dtoGetter(WalkerDto))
  list: WalkerDto[];
}
