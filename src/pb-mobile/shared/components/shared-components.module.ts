import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  BadGatewayComponent,
  ForbiddenComponent,
  GatewayTimeoutComponent,
  InternalServerErrorComponent,
  PageNotFoundComponent, ServiceUnavailableComponent, UnauthorizedComponent
} from "./error-pages";
import {LoaderComponent} from "./loader";
import {LoginComponent} from "./login";
import {MaintenanceModeComponent} from "./maintenance-mode";
import {
  CheckboxComponent, DatepickerComponent, DialogComponent, DropdownComponent,
  ErrorIconComponent, InfoIconComponent,
  InputComponent,
  MoleComponent,
  MultiSelectComponent, RadioComponent, TableComponent
} from "./html-options";

@NgModule({
  imports: [CommonModule],
  exports: [
    BadGatewayComponent,
    ForbiddenComponent,
    GatewayTimeoutComponent,
    InternalServerErrorComponent,
    PageNotFoundComponent,
    ServiceUnavailableComponent,
    UnauthorizedComponent,
    LoaderComponent,
    LoginComponent,
    MaintenanceModeComponent,
    CheckboxComponent,
    RadioComponent,
    DatepickerComponent,
    DialogComponent,
    InfoIconComponent,
    ErrorIconComponent,
    InputComponent,
    MoleComponent,
    DropdownComponent,
    MultiSelectComponent,
    TableComponent
  ],
  declarations: [
    BadGatewayComponent,
    ForbiddenComponent,
    GatewayTimeoutComponent,
    InternalServerErrorComponent,
    PageNotFoundComponent,
    ServiceUnavailableComponent,
    UnauthorizedComponent,
    LoaderComponent,
    LoginComponent,
    MaintenanceModeComponent,
    CheckboxComponent,
    RadioComponent,
    DatepickerComponent,
    DialogComponent,
    InfoIconComponent,
    ErrorIconComponent,
    InputComponent,
    MoleComponent,
    DropdownComponent,
    MultiSelectComponent,
    TableComponent
  ],
  providers: []
})
export class SharedComponentsModule { }
