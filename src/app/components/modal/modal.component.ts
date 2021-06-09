import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
      <p>Please enter below details - </p>
      <form class="lowest-price-form">
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
          class="btn btn-danger btn-link"
          (click)="activeModal.close('Close click')"
        >
          Send
        </button>
      </div>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name;

  focus;
  focus1;
  focus2;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
