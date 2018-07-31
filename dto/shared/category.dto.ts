import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

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
  @Type(() => Date)
  created: Date;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  updated: Date;

  @Exclude() deleted: Date;
}
