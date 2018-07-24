import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform } from 'class-transformer';

import { Gender } from '../../enum';

export class UserDataDto {
  @ApiModelProperty({ type: String })
  id: number;

  @ApiModelProperty({ type: Gender })
  gender: Gender;

  @ApiModelProperty({ type: String })
  @Transform(avatar => avatar ? '/upload' + avatar : null, { groups: ['petman-api'] })
  avatar: string;


  @ApiModelProperty({ type: String })
  facebookUrl: string;

  @ApiModelProperty({ type: String })
  messengerUrl: string;

  @ApiModelProperty({ type: String })
  phoneNumber: string;

  @ApiModelProperty({ type: String })
  firstName: string;

  @ApiModelProperty({ type: String })
  lastName: string;

  @ApiModelProperty({ type: Date })
  created: Date;

  @ApiModelProperty({ type: Date })
  updated: Date;

  @Exclude()
  deleted: Date;

  get name(): string {
    return `${this.firstName || ''} ${this.lastName || ''}`;
  }
}
