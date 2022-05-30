import { HttpException, HttpStatus } from '@nestjs/common';

export class IdentifierException extends HttpException {
    constructor() {
        super('Identificador fora do padrão esperado', HttpStatus.BAD_REQUEST);
    }
}
