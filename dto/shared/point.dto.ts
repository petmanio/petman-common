import { ApiModelProperty } from '@nestjs/swagger';
import { map } from 'lodash';

export class PointDto {
  @ApiModelProperty({ type: Number })
  x: number;

  @ApiModelProperty({ type: Number })
  y: number;
}
