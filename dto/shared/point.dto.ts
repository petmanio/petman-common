import { ApiModelProperty } from '@nestjs/swagger';

export class PointDto {
  @ApiModelProperty({ type: Number })
  x: number;

  @ApiModelProperty({ type: Number })
  y: number;
}
