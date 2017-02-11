import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { MooDataService } from '../moo-data.service';

@Component({
  selector: 'app-moo',
  templateUrl: './moo.component.html',
  styleUrls: ['./moo.component.css']
})
export class MooComponent implements OnInit {
  openSnackbar() {
    this.snackbar.open("Haha we thought it was funny too!", "Go to the next", {duration: 2000, })
  }
  constructor(public mooData: MooDataService, public snackbar: MdSnackBar) { }

  ngOnInit() {
  }

}
