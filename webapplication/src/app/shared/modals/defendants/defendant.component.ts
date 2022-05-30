import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lawsuits } from '../../interfaces/lawSuits.interface';
import { LawsuitsService } from '../../services/lawsuits.service';
import { ModalsSubjectService } from '../../services/modals-subject.service';

@Component({
	selector: 'app-defendant',
	templateUrl: './defendant.component.html',
	styleUrls: ['./defendant.component.scss']
})
export class DefendantComponent implements OnInit {

	form: FormGroup;
	@Input() lawsuitSelected: Lawsuits;
	@Output() loadLawsuits = new EventEmitter();

	constructor(
		private lawsuitsService: LawsuitsService,
		public modalsSubjectService: ModalsSubjectService
	) {}

	ngOnInit(): void {
		this.form = new FormGroup({
			defendant: new FormControl(null, [Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])])
		});
	}

	save() {
		if (!this.form.valid) {
			return this.form.controls.defendant.markAsDirty();
		}

		this.lawsuitSelected.defendant = this.form.controls.defendant.value;
		this.lawsuitsService.edit(this.lawsuitSelected)
			.subscribe(message => {
				this.loadLawsuits.emit();
				this.modalsSubjectService.showNotificationSuccess(message);
				this.modalsSubjectService.emitNotification(true);
				this.close();
			});
	}

	close() {
		this.modalsSubjectService.showDefendantModal(false);
	}
}
