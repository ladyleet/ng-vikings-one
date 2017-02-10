import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { routing } from './app.routing';

import { MeowDataService } from './meow-data.service';
import { MooDataService } from './moo-data.service';
import { BananaDataService } from './banana-data.service';
import { HomeDataService } from './home-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BananaComponent } from './banana/banana.component';
import { QuackComponent } from './quack/quack.component';
import { MooComponent } from './moo/moo.component';
import { MeowComponent } from './meow/meow.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { InstructionsDialogComponent } from './instructions-dialog/instructions-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BananaComponent,
    QuackComponent,
    MooComponent,
    MeowComponent,
    BreadcrumbComponent,
    InstructionsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [MeowDataService, MooDataService, BananaDataService, HomeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
