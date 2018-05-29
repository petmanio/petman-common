import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { StateDto } from './state.dto';
import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';
import { Point } from '../../interface';

export class AddressDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  line1: string;

  @ApiModelProperty({ type: String })
  line2: string;

  @ApiModelProperty({ type: String })
  line3: string;

  @ApiModelProperty({ type: Object })
  point: Point;

  @ApiModelProperty({ type: CityDto })
  @Type(dtoGetter(CityDto))
  city: CityDto;

  @ApiModelProperty({ type: StateDto })
  @Type(dtoGetter(StateDto))
  state: StateDto;

  @ApiModelProperty({ type: CountryDto })
  @Type(dtoGetter(CountryDto))
  country: CountryDto;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
