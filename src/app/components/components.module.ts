import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { ComponentsComponent } from './components.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContentComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    HttpClientModule
  ],
  declarations: [
    ComponentsComponent,
    NgbdModalComponent,
    NgbdModalContentComponent,
  ],
  entryComponents: [NgbdModalContentComponent],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
