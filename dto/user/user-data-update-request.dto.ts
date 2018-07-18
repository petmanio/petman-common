import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsUrl, Matches, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

import { facebookUrlValidator, phoneNumberValidatorRegex } from '../../lib';

export class UserDataUpdateRequestDto {
  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  firstName: string;

  @ApiModelProperty({ type: String })
  @IsNotEmpty()
  lastName: string;

  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @Matches(facebookUrlValidator)
  facebookUrl?: string;

  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @IsUrl()
  messengerUrl?: string;

  @ApiModelProperty({ type: String, required: false })
  @IsOptional()
  @Matches(phoneNumberValidatorRegex)
  @Transform(phoneNumber => {
    return phoneNumber ? phoneNumber.replace(/[^+\d]+/g, '') : phoneNumber;
  })
  phoneNumber?: string;
}
