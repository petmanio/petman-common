import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { StateDto } from './state.dto';
import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';
import { PointDto } from './point.dto';

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
  point: PointDto;

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
  @Type(() => Date)
  created: Date;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  updated: Date;

  @Exclude() deleted: Date;

  fullAddress?(): string {
    return `
      ${this.country ? this.country.name + ' ' : ''}
      ${this.city ? this.city.name + ' ' : ''}
      ${this.line1 ? this.line1 + ' ' : ''}
      ${this.line2 ? this.line2 + ' ' : ''}
      ${this.line3 ? this.line3 + ' ' : ''}
    `;
  }
}
