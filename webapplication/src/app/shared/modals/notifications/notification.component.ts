import { Component, OnInit } from '@angular/core';
import { ModalsSubjectService } from '../../services/modals-subject.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

	constructor(public modalsSubjectService: ModalsSubjectService) {}

	ngOnInit(): void {
		setTimeout(() => { this.close(); }, 3000);
	}

	close() {
		this.modalsSubjectService.emitNotification(false);
	}
}
