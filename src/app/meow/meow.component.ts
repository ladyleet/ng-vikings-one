import { Component, OnInit } from '@angular/core';
import { MeowDataService } from '../meow-data.service';

@Component({
  selector: 'app-meow',
  templateUrl: './meow.component.html',
  styleUrls: ['./meow.component.css']
})
export class MeowComponent implements OnInit {

  constructor(public meowData: MeowDataService) { }

  ngOnInit() {
  }

}
