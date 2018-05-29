import { ApiModelProperty } from '@nestjs/swagger';

import { Point } from '../../interface/index';

export class PinAddressDto {
  @ApiModelProperty({ type: String })
  line1: string;

  @ApiModelProperty({ type: String })
  line2: string;

  @ApiModelProperty({ type: String })
  line3: string;

  @ApiModelProperty({ type: Object })
  point: Point;
}
