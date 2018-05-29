import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';

export class StateDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: CityDto, isArray: true })
  @Type(dtoGetter(CityDto))
  cities: CityDto[];

  @ApiModelProperty({ type: CountryDto })
  @Type(dtoGetter(CountryDto))
  country: CountryDto;
}
