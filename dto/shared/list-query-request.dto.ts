import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class ListQueryRequestDto {
  @ApiModelProperty({ type: Number })
  @IsNumberString()
  offset;

  @ApiModelProperty({ type: Number })
  @IsNumberString()
  limit;
}
