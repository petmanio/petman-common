import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AdoptRequestDto {
  @ApiModelProperty({ type: String })
  @IsString()
  description: string;

  @ApiModelProperty({ type: Object, isArray: true })
  // TODO: validate
  @IsOptional()
  images: any[];
}
