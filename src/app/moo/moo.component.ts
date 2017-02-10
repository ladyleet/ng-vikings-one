import { Component, OnInit } from '@angular/core';
import { MooDataService } from '../moo-data.service';

@Component({
  selector: 'app-moo',
  templateUrl: './moo.component.html',
  styleUrls: ['./moo.component.css']
})
export class MooComponent implements OnInit {

  constructor(public mooData: MooDataService) { }

  ngOnInit() {
  }

}
