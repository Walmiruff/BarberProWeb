import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-domingo',
  templateUrl: './domingo.component.html',
  styleUrls: ['./domingo.component.css']
})
export class DomingoComponent implements OnInit {

  @Input () myFormDomingo: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
