import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Lawsuits } from 'src/app/shared/interfaces/lawSuits.interface';
import { LawsuitsService } from 'src/app/shared/services/lawsuits.service';
import { ModalsSubjectService } from 'src/app/shared/services/modals-subject.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	form: FormGroup;

	constructor(
		private lawsuitsService: LawsuitsService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		public modalsSubjectService: ModalsSubjectService
	) {}

	ngOnInit(): void {
		this.getParams();
		this.formBuild();
	}

	getParams() {
		this.activatedRoute.paramMap
			.subscribe((params: ParamMap) => {
				if (params.has('id'))
					this.loadLawsuit(Number.parseInt(params.get('id')));
			});
	}

	formBuild() {
		this.form = new FormGroup({
			id: new FormControl(),
			lawsuitNumber: new FormControl(1, [Validators.compose([Validators.required, Validators.min(1), Validators.max(9999)])]),
			defendant: new FormControl()
		});
	}

	loadLawsuit(id: number) {
		this.lawsuitsService.getById(id)
			.subscribe(lawsuit => this.fillForm(lawsuit));
	}

	fillForm(lawsuit: Lawsuits) {
		this.form.patchValue(lawsuit);
		this.form.controls.defendant.setValue(lawsuit.defendant.name);
	}

	save() {
		if (!this.form.valid) {
			return this.form.controls.lawsuitNumber.markAsDirty();
		}
		this.form.controls.id.value ?
			this.edit() :
			this.add();
	}

	add() {
		this.lawsuitsService.add(this.form.getRawValue())
			.subscribe(message => this.finally(message));
	}

	edit() {
		this.lawsuitsService.edit(this.form.getRawValue())
			.subscribe(message => this.finally(message));
	}

	finally(message: string) {
		this.form.reset();
		this.form.controls.lawsuitNumber.markAsUntouched();
		this.form.controls.defendant.clearValidators();
		this.form.controls.defendant.updateValueAndValidity();
		this.modalsSubjectService.showNotificationSuccess(message);
		this.modalsSubjectService.emitNotification(true);
	}

	cancel() {
		this.router.navigateByUrl('/');
	}
}
