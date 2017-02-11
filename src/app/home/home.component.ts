import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { HomeDataService } from '../home-data.service';
import { InstructionsDialogComponent } from '../instructions-dialog/instructions-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openDialog() {
    this.dialog.open(InstructionsDialogComponent)
  }
  constructor(public homeData: HomeDataService, public dialog: MdDialog) { }

  ngOnInit() {
  }

}
