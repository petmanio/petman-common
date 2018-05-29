import { ApiModelProperty } from '@nestjs/swagger';

import { AddressDto } from './address.dto';

export class PinDto {
  @ApiModelProperty({ type: String })
  title: string;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: AddressDto })
  address: AddressDto;
}
