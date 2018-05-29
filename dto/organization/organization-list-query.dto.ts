import { ApiModelProperty } from '@nestjs/swagger';

import { ListQueryDto } from '../shared/list-query.dto';
import { Transform } from 'class-transformer';

export class OrganizationListQueryDto extends ListQueryDto {
  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(services => {
    if (!services) {
      return [];
    }
    return typeof services === 'string' ? [services] : services;
  })
  services: number[];
}
