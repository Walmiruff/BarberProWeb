import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quarta',
  templateUrl: './quarta.component.html',
  styleUrls: ['./quarta.component.css']
})
export class QuartaComponent implements OnInit {


  @Input() myFormQuarta: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
