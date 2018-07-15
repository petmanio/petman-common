import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { dtoGetter } from '../../lib';
import { UserDataUpdateRequestDto } from './user-data-update-request.dto';

export class UserUpdateRequestDto {
  @ApiModelProperty({ type: UserDataUpdateRequestDto })
  @Type(dtoGetter(UserDataUpdateRequestDto))
  @ValidateNested()
  userData: UserDataUpdateRequestDto;
}
