import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { MooDataService } from '../moo-data.service';

@Component({
  selector: 'app-moo',
  templateUrl: './moo.component.html',
  styleUrls: ['./moo.component.css']
})
export class MooComponent implements OnInit {

  constructor(public mooData: MooDataService, public snackbar: MdSnackBar) { }

  openSnackbar() {
    this.snackbar.open("haha, we thought it was funny too", "close", { duration: 2000, })
  }
  ngOnInit() {
  }

}
