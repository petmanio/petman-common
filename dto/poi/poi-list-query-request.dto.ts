import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { ListQueryRequestDto } from '../shared';

export class PoiListQueryRequestDto extends ListQueryRequestDto {
  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(primaryCategoryId => {
    if (!primaryCategoryId) {
      return [];
    }
    return typeof primaryCategoryId === 'string' ? [primaryCategoryId] : primaryCategoryId;
  })
  primaryCategories: number[];
}
