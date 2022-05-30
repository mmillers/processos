import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLawsuitsDto } from '../dtos/create-lawsuits.dto';
import { UpdateLawsuitsDto } from '../dtos/update-lawsuits.dto';
import { ParseIntIdPipe } from '../pipes/parse-int-id.pipe';
import { LawsuitsService } from '../services/lawsuits.service';

@Controller('lawsuits')
export class LawsuitsController {

    constructor(private readonly lawsuitsService: LawsuitsService) {}

    @Get()
    async getAll() {
        return this.lawsuitsService.getAll();
    }

    @Get(':id')
    async getById(@Param('id', new ParseIntIdPipe()) id: number) {
        return this.lawsuitsService.getById(id);
    }

    @Post()
    create(
        @Body() createLawsuitsDto: CreateLawsuitsDto
    ) {
        return this.lawsuitsService.create(createLawsuitsDto);
    }


    @Put(':id')
    async update(
        @Param('id', new ParseIntIdPipe()) id: number,
        @Body() updateLawsuitsDto: UpdateLawsuitsDto
    ) {
        return this.lawsuitsService.update(id, updateLawsuitsDto);
    }

    @Delete(':id')
    async delete(
        @Param('id', new ParseIntIdPipe()) id: number
    ) {
        return this.lawsuitsService.delete(id);
    }
}
