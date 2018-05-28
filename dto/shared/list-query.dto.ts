import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class ListQueryDto {
  @ApiModelProperty({ type: Number })
  @IsNumberString()
  offset;

  @ApiModelProperty({ type: Number })
  @IsNumberString()
  limit;
}
