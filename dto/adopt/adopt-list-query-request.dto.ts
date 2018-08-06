import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { convertQueryItemToList } from '../../lib';
import { ListQueryRequestDto } from '../shared';

export class AdoptListQueryRequestDto extends ListQueryRequestDto {
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
