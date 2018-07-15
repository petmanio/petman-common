import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { LostFoundType } from '../../enum';

export class LostFoundRequestDto {
  @ApiModelProperty({ type: LostFoundType })
  @IsString()
  type: LostFoundType;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;

  @ApiModelProperty({ type: Object, isArray: true })
  // TODO: validate
  @IsOptional()
  images: any[];
}
