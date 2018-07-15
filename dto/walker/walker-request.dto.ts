import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class WalkerRequestDto {
  @ApiModelProperty({ type: String })
  @IsNumberString()
  price: number;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;
}
