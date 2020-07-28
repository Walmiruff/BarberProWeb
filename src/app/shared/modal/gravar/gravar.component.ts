import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-gravar',
  templateUrl: './gravar.component.html',
  styleUrls: ['./gravar.component.css']
})
export class GravarComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


public fecharModal(): void {
  this.activeModal.close({result: 'ok'});
}

}
