import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { StateDto } from './state.dto';

export class CityDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: StateDto })
  @Type(dtoGetter(StateDto))
  state: StateDto;
}
