import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { dtoGetter } from '../../lib';
import { UserDto } from '../user/user.dto';

export class WalkerDto {
  @ApiModelProperty({ type: Number })
  id: number;

  @ApiModelProperty({ type: String })
  description: string;

  @ApiModelProperty({ type: Number })
  price: number;

  @ApiModelProperty({ type: UserDto })
  @Type(dtoGetter(UserDto))
  user: UserDto;

  @ApiModelProperty({ type: Boolean })
  isOwner: boolean;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  created: Date;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  updated: Date;

  @Exclude() deleted: Date;
}
