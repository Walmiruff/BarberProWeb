import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {

  @Input () myFormSegunda: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}
