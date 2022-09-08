import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  focus = false;
  focus1 = false;
  focus2 = false;

  subscribeMeForm = this.fb.group({
    name: [''],
    mobileNumber: ['', Validators.required],
    message: [''],
  });

  constructor(
    private httpClient: HttpClient,
    private toast: HotToastService,
    private fb: UntypedFormBuilder
  ) {}

  subscribeMe() {
    const subscribeMeData = {
      formType: 'Subscribe Me',
      customerData: this.subscribeMeForm.value,
    };

    this.httpClient
      .post('https://formspree.io/f/xknkbnzp', subscribeMeData)
      .pipe(
        this.toast.observe({
          loading: 'Please wait. Sending your details...',
          success:
            'You details has been send successfully. We will get back to you soon.',
          error:
            'There is some error has been occurred. Please try again after sometime.',
        })
      )
      .subscribe(() => {
        this.subscribeMeForm.reset();
      });
  }
}
