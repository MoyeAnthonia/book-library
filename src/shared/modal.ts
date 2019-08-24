import {Component,Input, ViewChild} from '@angular/core';
//import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

//import { BsModalService } from 'ngx-bootstrap/modal';
//import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'common-modal',
  template: `
  <div class="modal-header">
  <h4 class="modal-title pull-left"> {{ title }} </h4>
  <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  This is a modal.
</div>
  `,
})
export class CommonModalComponent {
  
  constructor(public modalRef: BsModalRef) {
  }
  
}