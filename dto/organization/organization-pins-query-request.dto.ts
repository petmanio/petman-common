import { ApiModelProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { ListQueryRequestDto } from '../shared';

export class OrganizationPinsQueryRequestDto extends ListQueryRequestDto {
  @ApiModelProperty({ type: Number, isArray: true, required: false })
  @Transform(services => {
    if (!services) {
      return [];
    }
    return typeof services === 'string' ? [services] : services;
  })
  services: number[];
}
