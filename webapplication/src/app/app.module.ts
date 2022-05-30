import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LawsuitsModule } from './lawsuits/lawsuits.module';
import { ModalsSubjectService } from './shared/services/modals-subject.service';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		SharedModule,
		LawsuitsModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'pt-BR' },
		ModalsSubjectService
	],
	bootstrap: [AppComponent]
})

export class AppModule {}
