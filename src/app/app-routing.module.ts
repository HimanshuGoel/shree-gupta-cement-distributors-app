import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './features/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: []
})
export class AppRoutingModule {}
