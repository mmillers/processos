import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LawsuitsRoutingModule } from './lawsuits-routing.module';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
	declarations: [
		RegisterComponent,
		ListComponent
	],
	imports: [
		CommonModule,
		LawsuitsRoutingModule,
		SharedModule,
		ReactiveFormsModule
	],
	exports: [ListComponent],
})

export class LawsuitsModule {}
