import { AfterContentInit, Directive, HostListener } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Directive({
	selector: '[checkInputDefendant]'
})
export class CheckInputDefendantDirective implements AfterContentInit {

	constructor(private ngControl: NgControl) {}

	ngAfterContentInit(): void {
		this.checkField(this.ngControl.value || '');
	}

	@HostListener('input', ['$event.target.value']) onInput(value: string) {
		this.checkField(value);
	}

	checkField(value: string) {
		value ?
			this.ngControl.control.setValidators([Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(3)])]) :
			this.ngControl.control.clearValidators();
		this.ngControl.control.updateValueAndValidity();
	}
}
