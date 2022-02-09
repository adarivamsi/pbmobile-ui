import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClickDirective} from "./click";

@NgModule({
  imports: [CommonModule],
  exports: [
    ClickDirective
  ],
  declarations: [
    ClickDirective
  ],
  providers: []
})
export class SharedDirectivesModule { }
