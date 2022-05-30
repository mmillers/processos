import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Notifications } from '../interfaces/notifications.interface';

@Injectable({ providedIn: 'root' })
export class ModalsSubjectService {

	private readonly successClass = 'is-success';
	private readonly errorClass = 'is-danger';

	private _showNotification: Subject<boolean> = new BehaviorSubject(false);
	showNotification$ = this._showNotification.asObservable();

	private _notification: Subject<Notifications> = new BehaviorSubject({ message: null, class: null });
	notification$ = this._notification.asObservable();

	private _showDefendantModal: Subject<boolean> = new BehaviorSubject(false);
	showDefendantModal$ = this._showDefendantModal.asObservable();

	private _showDeleteConfirmation: Subject<boolean> = new BehaviorSubject(false);
	showDeleteConfirmation$ = this._showDeleteConfirmation.asObservable();

	emitNotification(value: boolean) {
		this._showNotification.next(value);
	}

	showNotificationSuccess(message: string) {
		this._notification.next({ message, class: this.successClass });
	}

	showNotificationError(message: string) {
		this._notification.next({ message, class: this.errorClass });
	}

	showDefendantModal(value: boolean) {
		this._showDefendantModal.next(value);
	}

	showDeleteConfirmation(value: boolean) {
		this._showDeleteConfirmation.next(value);
	}
}