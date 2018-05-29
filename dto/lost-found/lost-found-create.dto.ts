import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { LostFoundType } from '../../enum/index';

export class LostFoundCreateDto {
  @ApiModelProperty({ type: LostFoundType })
  @IsString()
  type: LostFoundType;

  @IsString()
  @ApiModelProperty({ type: String })
  description: string;

  // TODO: validate
  // @IsNotEmpty()
  @ApiModelProperty({ type: Object, isArray: true })
  images: any[];
}
