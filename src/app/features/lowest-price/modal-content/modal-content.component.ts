import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html'
})
export class ModalContentComponent {
  @Input() name = '';

  isNameFocused = false;
  isMobileNumberFocused = false;
  isMinimumQuantityFocused = false;

  constructor(
    public activeModal: NgbActiveModal,
    private httpClient: HttpClient,
    private toast: HotToastService,
  ) {}

  getLowestPriceForm = new FormGroup<ILowestPriceForm>({
    name: new FormControl('', { nonNullable: true, validators: Validators.required }),
    mobileNumber: new FormControl('', { nonNullable: true, validators: Validators.required }),
    minimumQuantity: new FormControl('', { nonNullable: false })
  });

  getLowestPrice() {
    const postData = {
      formType: 'Get Lowest Price',
      customerData: this.getLowestPriceForm.getRawValue()
    };

    this.httpClient
      .post('https://formspree.io/f/xknkbnzp', postData)
      .pipe(
        this.toast.observe({
          loading: 'Please wait. Sending your details...',
          success: 'You details has been send successfully. We will get back to you soon.',
          error: 'There is some error has been occurred. Please try again after sometime.'
        })
      )
      .subscribe(() => {
        this.getLowestPriceForm.reset();
        this.activeModal.close('Close click');
      });
  }
}

interface ILowestPriceForm {
  name: FormControl<string>;
  mobileNumber: FormControl<string>;
  minimumQuantity?: FormControl<string | null>;
}
