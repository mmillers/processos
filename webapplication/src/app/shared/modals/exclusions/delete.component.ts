import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lawsuits } from '../../interfaces/lawSuits.interface';
import { LawsuitsService } from '../../services/lawsuits.service';
import { ModalsSubjectService } from '../../services/modals-subject.service';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

	@Input() lawsuitSelected: Lawsuits;
	@Output() loadLawsuits = new EventEmitter();

	constructor(
		private lawSuitsService: LawsuitsService,
		private modalsSubjectService: ModalsSubjectService
	) {}

	close() {
		this.modalsSubjectService.showDeleteConfirmation(false);
	}

	confirmar() {
		this.lawSuitsService.delete(this.lawsuitSelected.id)
			.subscribe(message => {
				this.close();
				this.modalsSubjectService.showNotificationSuccess(message);
				this.modalsSubjectService.emitNotification(true);
				this.loadLawsuits.emit();
			});
	}
}
