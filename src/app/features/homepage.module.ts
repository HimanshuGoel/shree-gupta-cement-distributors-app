import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HotToastModule } from '@ngneat/hot-toast';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage.component';
import { KeyProductsComponent } from './key-products/key-products.component';
import { LandingComponent } from './landing/landing.component';
import { LowestPriceComponent } from './lowest-price/lowest-price.component';
import { ModalContentComponent } from './lowest-price/modal-content/modal-content.component';

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
    LowestPriceComponent,
    ModalContentComponent,
    ContactUsComponent,
    KeyProductsComponent,
    AboutUsComponent,
    LandingComponent
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
