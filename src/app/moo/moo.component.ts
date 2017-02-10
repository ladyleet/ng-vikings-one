import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { MooDataService } from '../moo-data.service';

@Component({
  selector: 'app-moo',
  templateUrl: './moo.component.html',
  styleUrls: ['./moo.component.css']
})

export class MooComponent implements OnInit {

  openSnackBar() {
    this.snackBar.open("hahhaha", "next", { duration: 2000, )} 
  }
  
  constructor(public mooData: MooDataService, public snackBar: MdSnackBar) { 

  }

  ngOnInit() {
  }

}
