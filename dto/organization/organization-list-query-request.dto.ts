import { ApiModelProperty } from '@nestjs/swagger';

import { ListQueryRequestDto } from '../shared/list-query-request.dto';
import { Transform } from 'class-transformer';

export class OrganizationListQueryRequestDto extends ListQueryRequestDto {
  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(services => {
    if (!services) {
      return [];
    }
    return typeof services === 'string' ? [services] : services;
  })
  services: number[];
}
