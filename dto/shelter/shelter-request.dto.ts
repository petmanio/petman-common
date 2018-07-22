import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class ShelterRequestDto {
  @ApiModelProperty({ type: Number })
  @IsNumberString()
  price: number;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;

  @ApiModelProperty({ type: Object, isArray: true })
  // TODO: validate
  @IsOptional()
  images: any[];
}
