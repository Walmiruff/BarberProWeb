import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-terca',
  templateUrl: './terca.component.html',
  styleUrls: ['./terca.component.css']
})
export class TercaComponent implements OnInit {


  @Input () myFormTerca: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
