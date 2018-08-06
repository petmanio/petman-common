import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { convertQueryItemToList } from '../../lib';
import { ListQueryRequestDto } from '../shared';

export class PoiListQueryRequestDto extends ListQueryRequestDto {
  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(convertQueryItemToList)
  primaryCategories: number[];
}
