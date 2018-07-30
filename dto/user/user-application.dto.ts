import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { UserApplicationType } from '../../enum';
import { SitterDto } from '../sitter';
import { WalkerDto } from '../walker';
import { LostFoundDto } from '../lost-found';
import { AdoptDto } from '../adopt';

const typeClassMap = {
  [UserApplicationType.SITTERS]: SitterDto,
  [UserApplicationType.WALKER]: WalkerDto,
  [UserApplicationType.ADOPTION]: AdoptDto,
  [UserApplicationType.LOST_FOUND]: LostFoundDto
};

export type UserApplication = SitterDto | WalkerDto | AdoptDto | LostFoundDto;

export class UserApplicationDto {
  @ApiModelProperty({ type: UserApplicationType })
  type: UserApplicationType;

  @ApiModelProperty({ type: UserApplicationType })
  @Type(target => typeClassMap[target.object['type']])
  data: UserApplication;
}
