import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModalsSubjectService } from '../services/modals-subject.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private modalsSubjectService: ModalsSubjectService) {}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request)
			.pipe(
				catchError((error: HttpErrorResponse) => {
					if (!(error.error instanceof ErrorEvent)) {
						this.modalsSubjectService.showNotificationError(error.error.message);
						this.modalsSubjectService.emitNotification(true);
					}
					return throwError(error);
				})
			);
	}
}
