import { ApiModelProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEnum } from 'class-validator';

import { PetType, Gender, PetSize, PetAge } from '../../enum';

export class AdoptRequestDto {
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

  // @ApiModelProperty({ type: AddressRequestDto })
  // @Type(dtoGetter(AddressRequestDto))
  // @ValidateNested()
  // address: AddressRequestDto;
}
