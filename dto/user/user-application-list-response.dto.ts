import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { UserApplicationDto } from './user-application.dto';

export class UserApplicationListResponseDto {
  @ApiModelProperty({ type: Number })
  total;

  @ApiModelProperty({ type: UserApplicationDto, isArray: true })
  @Type(() => UserApplicationDto)
  list: UserApplicationDto[];
}
