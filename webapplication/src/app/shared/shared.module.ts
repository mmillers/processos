import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckInputDefendantDirective } from './directives/check-input-defendant.directive';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { DefendantComponent } from './modals/defendants/defendant.component';
import { DeleteComponent } from './modals/exclusions/delete.component';
import { NotificationComponent } from './modals/notifications/notification.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { LawsuitsService } from './services/lawsuits.service';
import { ModalsSubjectService } from './services/modals-subject.service';

@NgModule({
	declarations: [
		NotificationComponent,
		DeleteComponent,
		DefendantComponent,
		CheckInputDefendantDirective,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	providers: [
		LawsuitsService,
		ModalsSubjectService,
		HttpErrorInterceptor,
		ErrorHandlerService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true,
		},
		{
			provide: ErrorHandler,
			useClass: ErrorHandlerService
		},

	],
	exports: [
		DeleteComponent,
		NotificationComponent,
		DefendantComponent,
		CheckInputDefendantDirective
	]
})

export class SharedModule {}
