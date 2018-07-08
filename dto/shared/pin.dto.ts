import { ApiModelProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { map } from 'lodash';

import { dtoGetter } from '../../lib';
import { AddressDto } from './address.dto';
import { CategoryDto } from './index';

export class PinDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: String })
  @Transform(icon => '/upload' + icon, { groups: ['petman-api'] })
  icon: string;

  @ApiModelProperty({ type: AddressDto })
  @Type(dtoGetter(AddressDto))
  address: AddressDto;

  @ApiModelProperty({ type: CategoryDto })
  @Type(dtoGetter(CategoryDto))
  primaryCategory: CategoryDto;
}
