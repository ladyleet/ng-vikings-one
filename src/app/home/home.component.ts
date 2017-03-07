import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { MdDialog } from '@angular/material';
import { InstructionsDialogComponent } from '../instructions-dialog/instructions-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public homeData: HomeDataService, public dialog: MdDialog) { }

  openDialog() {
    this.dialog.open(InstructionsDialogComponent)
  }

  ngOnInit() {
  }

}
