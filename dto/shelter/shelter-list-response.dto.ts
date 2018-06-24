import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { ShelterDto } from './shelter.dto';

export class ShelterListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: ShelterDto, isArray: true })
  @Type(dtoGetter(ShelterDto))
  list: ShelterDto[];
}
