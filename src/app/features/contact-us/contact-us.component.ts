import { Component, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor() {}
  @Output() onSubscribeMeClick = new EventEmitter();

  isNameFocused = false;
  isMobileNumberFocused = false;

  subscribeMeForm = new FormGroup<ISubscribeMeForm>({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    mobileNumber: new FormControl('', { nonNullable: true, validators: Validators.required }),
    message: new FormControl('', { nonNullable: false })
  });

  subscribeMe() {
    this.onSubscribeMeClick.emit(this.subscribeMeForm.getRawValue());
    this.subscribeMeForm.reset();
  }
}

interface ISubscribeMeForm {
  name: FormControl<string>;
  mobileNumber: FormControl<string>;
  message?: FormControl<string | null>;
}
