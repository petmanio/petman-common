import { ApiModelProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Gender, LostFoundType, PetAge, PetSize, PetType } from '../../enum';

export class LostFoundRequestDto {
  @ApiModelProperty({
    enum: [LostFoundType.LOST, LostFoundType.FOUND]
  })
  @IsEnum(LostFoundType)
  applicationType: LostFoundType;

  @ApiModelProperty({ type: String })
  @IsString()
  description: string;

  @ApiModelProperty({ type: Object, isArray: true })
  // TODO: validate
  @IsOptional()
  images: any[];

  @ApiModelProperty({
    enum: [PetType.DOG, PetType.CAT, PetType.OTHER],
    required: false
  })
  @IsOptional()
  @IsEnum(PetType)
  type: PetType;

  @ApiModelProperty({ enum: [Gender.MALE, Gender.FEMALE], required: false })
  @IsOptional()
  @IsEnum(Gender)
  gender: Gender;

  @ApiModelProperty({
    enum: [PetSize.XL, PetSize.LARGE, PetSize.MEDIUM, PetSize.SMALL],
    required: false
  })
  @IsOptional()
  @IsEnum(PetSize)
  size: PetSize;

  @ApiModelProperty({
    enum: [PetAge.SENIOR, PetAge.ADULT, PetAge.YOUNG, PetAge.BABY],
    required: false
  })
  @IsOptional()
  @IsEnum(PetAge)
  age: PetAge;
}
