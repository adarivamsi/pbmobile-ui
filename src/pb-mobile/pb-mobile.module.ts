import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PbMobileComponent } from './pb-mobile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './shared/components';
import {AuthenticationService} from "./shared/services";
import { CareComponent } from './care/care.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [PbMobileComponent, CareComponent, SalesComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, SharedComponentsModule],
  providers: [AuthenticationService],
  bootstrap: [PbMobileComponent],
})
export class PbMobileModule {}
