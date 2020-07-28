import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.component.html',
  styleUrls: ['./sexta.component.css']
})
export class SextaComponent implements OnInit {


  @Input () myFormSexta: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
