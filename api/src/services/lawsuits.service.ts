import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateLawsuitsDto } from '../dtos/create-lawsuits.dto';
import { UpdateLawsuitsDto } from '../dtos/update-lawsuits.dto';
import { Lawsuits } from '../interfaces/lawsuits.interface';
import lawsuits from '../mocks/lawsuits-mock';
import { DefendantsService } from './defendants.service';

@Injectable()
export class LawsuitsService {
    private lawsuits: Array<Lawsuits> = lawsuits;

    constructor(private readonly defendantService: DefendantsService) {}

    getAll() {
        return { data: this.lawsuits };
    }

    getById(id: number) {
        const data = this.lawsuits.filter(l => l.id === id)[0];
        if (!data) {
            throw new NotFoundException('Processo não encontrado');
        }
        return { data }
    }

    private getByNumber(lawsuitNumber: number) {
        return this.lawsuits.filter(l => l.lawsuitNumber === lawsuitNumber)[0];
    }

    create(createLawsuitsDto: CreateLawsuitsDto) {
        if (this.getByNumber(createLawsuitsDto.lawsuitNumber)) {
            throw new UnprocessableEntityException('Já existe um processo com esse número cadastrado');
        }
        const item: Lawsuits = { id: this.nextId(), lawsuitNumber: createLawsuitsDto.lawsuitNumber };
        this.checkDefendantToCreate(createLawsuitsDto.defendant);
        item.defendant = this.defendantService.getByName(createLawsuitsDto.defendant);
        this.lawsuits.push(item);
        return { message: 'Processo adicionado com sucesso' };
    }

    update(id: number, updateLawsuitsDto: UpdateLawsuitsDto) {
        const item = this.getById(id).data;
        this.checkDefendantToCreate(updateLawsuitsDto.defendant);
        item.defendant = this.defendantService.getByName(updateLawsuitsDto.defendant);
        return { message: 'Processo atualizado com sucesso' };
    }

    delete(id: number) {
        const index = this.lawsuits.findIndex(l => l.id === id);
        if (index >= 0) {
            this.lawsuits.splice(index, 1);
            return { message: 'Processo removido com sucesso' };
        }
        throw new NotFoundException('Processo não encontrado');
    }

    private nextId() {
        const ids = this.lawsuits.map(item => {
            return item.id;
        });
        const max = Math.max(...ids) + 1;
        return max;
    }

    private checkDefendantToCreate(defendantName: string) {
        if (defendantName)
            this.defendantService.create(defendantName);
    }
}
