import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class WalkerCreateRequestDto {
  @ApiModelProperty({ type: String })
  @IsNumberString()
  price: number;

  @IsString()
  @ApiModelProperty({ type: String })
  description: string;
}
