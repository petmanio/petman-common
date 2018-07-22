import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class WalkerRequestDto {
  @ApiModelProperty({ type: Number })
  @IsNumber()
  price: number;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;
}
