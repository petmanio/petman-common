import { ApiModelProperty } from '@nestjs/swagger';
import { Exclude, Transform, Type } from 'class-transformer';

import { Gender } from '../../enum';

export class UserDataDto {
  @ApiModelProperty({ type: String })
  id: number;

  @ApiModelProperty({ type: Gender })
  gender: Gender;

  @ApiModelProperty({ type: String })
  @Transform(avatar => (avatar ? '/upload' + avatar : null), {
    groups: ['petman-api']
  })
  avatar: string;

  @ApiModelProperty({ type: String })
  @Transform(() => undefined, { groups: ['petman-unauthorised'] })
  facebookUrl: string;

  @ApiModelProperty({ type: String })
  @Transform(() => undefined, { groups: ['petman-unauthorised'] })
  messengerUrl: string;

  @ApiModelProperty({ type: String })
  @Transform(() => undefined, { groups: ['petman-unauthorised'] })
  phoneNumber: string;

  @ApiModelProperty({ type: String })
  firstName: string;

  @ApiModelProperty({ type: String })
  lastName: string;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  created: Date;

  @ApiModelProperty({ type: Date })
  @Type(() => Date)
  updated: Date;

  @Exclude() deleted: Date;

  get name(): string {
    return `${this.firstName || ''} ${this.lastName || ''}`;
  }
}
