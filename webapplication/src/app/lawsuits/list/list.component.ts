import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lawsuits } from 'src/app/shared/interfaces/lawsuits.interface';
import { LawsuitsService } from 'src/app/shared/services/lawsuits.service';
import { ModalsSubjectService } from 'src/app/shared/services/modals-subject.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	stringLimit: number = 55;
	lawsuits: Array<Lawsuits>;
	lawsuitSelected: Lawsuits;

	constructor(
		private lawsuitsService: LawsuitsService,
		private router: Router,
		public modalsSubjectService: ModalsSubjectService
	) {}

	ngOnInit() {
		this.loadLawsuits();
	}

	loadLawsuits() {
		this.lawsuitsService.list()
			.subscribe((response) => {
				this.lawsuits = response;
			});
	}

	edit(lawsuit: Lawsuits) {
		this.router.navigateByUrl(`lawsuits/edit/${lawsuit.id}`);
	}

	showDeleteConfirmation(lawsuit: Lawsuits) {
		this.setLawsuitSelected(lawsuit);
		this.modalsSubjectService.showDeleteConfirmation(true);
	}

	addDefendant(lawsuit: Lawsuits) {
		this.setLawsuitSelected(lawsuit);
		this.modalsSubjectService.showDefendantModal(true);
	}

	private setLawsuitSelected(lawsuit: Lawsuits) {
		this.lawsuitSelected = lawsuit;
	}
}
