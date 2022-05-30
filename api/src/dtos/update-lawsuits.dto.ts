import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateLawsuitsDto } from './create-lawsuits.dto';

export class UpdateLawsuitsDto extends PartialType(CreateLawsuitsDto) {
    @IsNotEmpty({
        message: 'Identificador deve ser informado',
    })
    @IsInt({
        message: 'Identificador deve ser inteiro',
    })
    id: number;
}
