import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl, Matches } from 'class-validator';

import { facebookUrlValidator, phoneNumberValidatorRegex } from '../../lib';
import { Transform } from 'class-transformer';

export class UserDataUpdateRequestDto {
  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @Matches(facebookUrlValidator)
  facebookUrl: string;

  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @IsUrl()
  messengerUrl: string;

  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @Matches(phoneNumberValidatorRegex)
  @Transform(phoneNumber => phoneNumber.replace(/[^+\d]+/g, ""))
  phoneNumber: string;
}
