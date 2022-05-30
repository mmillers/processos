import { IsInt, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateLawsuitsDto {
    @IsNotEmpty({
        message: 'O número do processo deve ser informado'
    })
    @IsInt({
        message: 'O número deve ser inteiro'
    })
    lawsuitNumber: number;

    @MinLength(3, {
        message: 'O nome do réu deve conter no mínimo 3 dígitos'
    })
    @MaxLength(100, {
        message: 'O nome do réu deve conter no máximo 100 dígitos'
    })
    @IsOptional()
    defendant: string;
}
