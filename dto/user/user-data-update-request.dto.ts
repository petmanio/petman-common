import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, IsUrl, Matches } from 'class-validator';

import { Gender } from '../../enum';
import { phoneValidatorRegex } from '../../lib';

export class UserDataUpdateRequestDto {
  @ApiModelProperty({ type: Gender })
  @IsOptional()
  @IsEnum(Gender)
  gender: Gender;

  @ApiModelProperty({ type: String })
  @IsOptional()
  @IsString()
  avatar: string;

  @IsOptional()
  @IsUrl()
  @ApiModelProperty({ type: String })
  facebook: string;

  @IsOptional()
  @Matches(phoneValidatorRegex)
  @ApiModelProperty({ type: String })
  phone: string;

  @IsOptional()
  @IsUrl()
  @ApiModelProperty({ type: String })
  messenger: string;

  @ApiModelProperty({ type: String })
  @IsString()
  firstName: string;

  @ApiModelProperty({ type: String })
  @IsString()
  lastName: string;
}
