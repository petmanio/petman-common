import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { CategoryDto } from './category.dto';

export class CategoryListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: CategoryDto, isArray: true })
  @Type(dtoGetter(CategoryDto))
  list: CategoryDto[];
}
