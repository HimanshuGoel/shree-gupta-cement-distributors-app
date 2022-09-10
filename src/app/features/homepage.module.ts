import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { HotToastModule } from '@ngneat/hot-toast';

import { HomepageComponent } from './homepage.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContentComponent } from './modal/modal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { KeyProductsComponent } from './key-products/key-products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    HttpClientModule,
    HotToastModule.forRoot()
  ],
  declarations: [
    HomepageComponent,
    NgbdModalComponent,
    NgbdModalContentComponent,
    ContactUsComponent,
    KeyProductsComponent,
    AboutUsComponent,
    LandingComponent
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
