import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { map } from 'lodash';

export class CategoryDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  label: string;

  @ApiModelProperty({ type: String })
  name: string;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;
}
