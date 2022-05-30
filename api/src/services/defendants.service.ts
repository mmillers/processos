import { Injectable } from '@nestjs/common';
import defendants from 'src/mocks/defendants.mock';

@Injectable()
export class DefendantsService {
    private defendants = defendants;

    getByName(name: string) {
        return this.defendants.filter(l => l.name === name)[0];
    }

    create(name: string) {
        let defendant = this.getByName(name);
        if (!defendant) {
            defendant = { id: this.defendants.length + 1, name };
            this.defendants.push(defendant);
        }
    }
}
