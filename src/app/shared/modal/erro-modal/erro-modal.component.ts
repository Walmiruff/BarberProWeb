import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-erro-modal',
  templateUrl: './erro-modal.component.html',
  styleUrls: ['./erro-modal.component.css']
})
export class ErroModalComponent implements OnInit {

  constructor( private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


  public fecharModal(): void {
    this.activeModal.close({result: 'ok'});
  }

}
