import { Component, EventEmitter, Output } from '@angular/core';


import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private fb: UntypedFormBuilder) {}

  @Output() onSubscribeMeClick = new EventEmitter();

  focus = false;
  focus1 = false;
  focus2 = false;

  subscribeMeForm = this.fb.group({
    name: [''],
    mobileNumber: ['', Validators.required],
    message: ['']
  });

  subscribeMe() {
    this.onSubscribeMeClick.emit(this.subscribeMeForm.value);
  }
}
