import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { StateDto } from './state.dto';

export class CountryDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: String })
  sortname: string;

  @ApiModelProperty({ type: Number })
  phonecode: string;

  @ApiModelProperty({ type: StateDto, isArray: true })
  @Type(dtoGetter(StateDto))
  states: StateDto[];
}
