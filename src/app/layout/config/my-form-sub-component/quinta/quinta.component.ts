import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.component.html',
  styleUrls: ['./quinta.component.css']
})
export class QuintaComponent implements OnInit {

  @Input () myFormQuinta: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
