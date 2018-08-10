import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { convertQueryItemToList } from '../../lib';
import { ListQueryRequestDto } from '../shared';

export class LostFoundListQueryRequestDto extends ListQueryRequestDto {
  @ApiModelProperty({ type: String, required: false })
  applicationType?: string;

  @ApiModelProperty({ type: String, isArray: true, required: false })
  @Transform(convertQueryItemToList)
  type?: string[];

  @ApiModelProperty({ type: String, isArray: true, required: false })
  @Transform(convertQueryItemToList)
  gender?: string[];

  @ApiModelProperty({ type: String, isArray: true, required: false })
  @Transform(convertQueryItemToList)
  age?: string[];

  @ApiModelProperty({ type: String, isArray: true, required: false })
  @Transform(convertQueryItemToList)
  size?: string[];
}
