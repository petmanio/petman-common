import { ApiModelProperty } from '@nestjs/swagger';

export class FbUserDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  email?: string;

  @ApiModelProperty({ type: String })
  gender: string;

  @ApiModelProperty({ type: String })
  first_name: string;

  @ApiModelProperty({ type: String })
  last_name: string;
}
