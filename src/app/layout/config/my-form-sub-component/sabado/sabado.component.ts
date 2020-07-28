import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sabado',
  templateUrl: './sabado.component.html',
  styleUrls: ['./sabado.component.css']
})
export class SabadoComponent implements OnInit {


  @Input () myFormSabado: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
