import { ApiModelProperty } from '@nestjs/swagger';

export class UserGeoDto {
  @ApiModelProperty({ type: Number, isArray: true })
  range: Array<number>;

  @ApiModelProperty({ type: String })
  country: string;

  @ApiModelProperty({ type: String })
  region: string;

  @ApiModelProperty({ type: String })
  city: string;

  @ApiModelProperty({ type: Number, isArray: true })
  ll: Array<number>;
}
