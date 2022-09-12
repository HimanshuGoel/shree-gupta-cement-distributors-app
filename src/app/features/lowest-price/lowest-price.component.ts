import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-lowest-price-component',
  templateUrl: './lowest-price.component.html'
})
export class LowestPriceComponent {
  @Input() name = '';

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = this.name;
  }
}
