import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h5 class="modal-title text-center">Get Lowest Price</h5>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>We need below details to send you back the lowest price -</p>
      <form class="lowest-price-form" [formGroup]="getLowestPriceForm">
        <div class="row">
          <div class="col-md-12">
            <label>Name</label>
            <div
              class="input-group"
              [ngClass]="{ 'input-group-focus': focus === true }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="nc-icon nc-single-02"></i
                ></span>
              </div>
              <input
                type="text"
                name="name"
                formControlName="name"
                class="form-control"
                placeholder="Name"
                (focus)="focus = true"
                (blur)="focus = false"
              />
            </div>
          </div>
          <div class="col-md-12">
            <label>Mobile Number</label>
            <div
              class="input-group"
              [ngClass]="{ 'input-group-focus': focus1 === true }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="nc-icon nc-mobile"></i
                ></span>
              </div>
              <input
                formControlName="mobileNumber"
                name="mobileNumber"
                type="number"
                class="form-control"
                placeholder="Mobile Number"
                (focus)="focus1 = true"
                (blur)="focus1 = false"
              />
            </div>
          </div>
          <div class="col-md-12">
            <label>Minimum Quantity</label>
            <div
              class="input-group"
              [ngClass]="{ 'input-group-focus': focus2 === true }"
            >
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="nc-icon nc-cart-simple"></i
                ></span>
              </div>
              <input
                formControlName="minimumQuantity"
                name="minimumQuantity"
                type="number"
                class="form-control"
                placeholder="Minimum Quantity"
                (focus)="focus2 = true"
                (blur)="focus2 = false"
              />
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="modal-footer">
      <div class="left-side">
        <button
          type="button"
          class="btn btn-default btn-link"
          (click)="activeModal.close('Close click')"
        >
          Cancel
        </button>
      </div>
      <div class="divider"></div>
      <div class="right-side">
        <button
          type="button"
          [disabled]="!getLowestPriceForm.valid"
          class="btn btn-danger btn-link"
          (click)="getLowestPrice()"
        >
          Send
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContentComponent {
  @Input() name = '';

  focus = false;
  focus1 = false;
  focus2 = false;

  getLowestPriceForm = this.fb.group({
    name: [''],
    minimumQuantity: [''],
    mobileNumber: ['', Validators.required],
  });

  getLowestPrice() {
    const getLowestPriceData = {
      formType: 'Get Lowest Price',
      customerData: this.getLowestPriceForm.value,
    };

    this.httpClient
      .post('https://formspree.io/f/xknkbnzp', getLowestPriceData)
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
        this.getLowestPriceForm.reset();
        this.activeModal.close('Close click');
      });
  }

  constructor(
    public activeModal: NgbActiveModal,
    private httpClient: HttpClient,
    private toast: HotToastService,
    private fb: FormBuilder
  ) {}
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
})
export class NgbdModalComponent {
  @Input() name = '';
  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = this.name;
  }
}
