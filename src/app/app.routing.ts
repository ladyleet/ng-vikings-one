import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BananaComponent } from './banana/banana.component';
import { QuackComponent } from './quack/quack.component';
import { MooComponent } from './moo/moo.component';
import { MeowComponent } from './meow/meow.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'banana', component: BananaComponent },
    { path: 'quack', component: QuackComponent },
    { path: 'moo', component: MooComponent },
    { path: 'meow', component: MeowComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes) ;