import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService implements ErrorHandler {
	handleError(error: Error | HttpErrorResponse) {
		if (error instanceof HttpErrorResponse) {
			if (error.status === 0) {
				const message = `Status: ${error.status} - Sem conexão com a API`;
				alert(message);
			}
		}
	}
}
