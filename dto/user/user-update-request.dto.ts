import { ApiModelProperty } from '@nestjs/swagger';
import { find } from 'lodash';
import { Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { UserDataDto } from './user-data.dto';

export class UserUpdateRequestDto {
  @ApiModelProperty({ type: UserDataDto })
  @Type(dtoGetter(UserUpdateRequestDto))
  userData: UserUpdateRequestDto;
}
