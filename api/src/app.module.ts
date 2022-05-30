import { Module } from '@nestjs/common';
import { LawsuitsController } from './controllers/lawsuits.controller';
import { DefendantsService } from './services/defendants.service';
import { LawsuitsService } from './services/lawsuits.service';

@Module({
	imports: [],
	controllers: [LawsuitsController],
	providers: [LawsuitsService, DefendantsService]
})
export class AppModule {}
