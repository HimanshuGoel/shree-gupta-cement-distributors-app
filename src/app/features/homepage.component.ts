import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent {
  constructor(private httpClient: HttpClient, private toast: HotToastService) {}

  subscribeMe(formData: ISubscribeMeData) {
    const postData = {
      formType: 'Subscribe Me',
      customerData: formData
    };

    this.httpClient.post('https://formspree.io/f/xknkbnzp', postData).pipe(
      this.toast.observe({
        loading: 'Please wait. Sending your details...',
        success: 'You details has been send successfully. We will get back to you soon.',
        error: 'There is some error has been occurred. Please try again after sometime.'
      })
    );
  }
}

interface ISubscribeMeData {
  name: string;
  mobileNumber: string;
  message: string | null;
}
