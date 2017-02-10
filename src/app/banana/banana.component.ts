import { Component, OnInit } from '@angular/core';
import { BananaDataService } from '../banana-data.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

  constructor(public bananaData: BananaDataService) { }

  ngOnInit() {
  }

}
