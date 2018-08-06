import { ApiModelProperty } from '@nestjs/swagger';

import { PointDto } from './point.dto';
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber
} from 'class-validator';

export class AddressRequestDto {
  @ApiModelProperty({ type: String })
  @IsString()
  line1: string;

  @ApiModelProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  line2?: string;

  @ApiModelProperty({ type: String, required: false })
  @IsString()
  @IsOptional()
  line3?: string;

  @ApiModelProperty({ type: Object, required: false })
  @ValidateNested()
  @IsOptional()
  point?: PointDto;

  // @ApiModelProperty({ type: String, required: false })
  // @IsString()
  // @IsOptional()
  // zipCode?: string;

  @ApiModelProperty({ type: Number })
  @IsNumber()
  cityId: number;

  @ApiModelProperty({ type: Number })
  stateId: number;

  @ApiModelProperty({ type: Number })
  countryId: number;
}
