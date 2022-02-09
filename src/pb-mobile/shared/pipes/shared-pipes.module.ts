import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CapitalizePipe} from "./capitalize";
import {LocalTimePipe} from "./local-time";
import {DataUsagePipe} from "./data-usage";
import {MoneyPipe} from "./money";
import {TimestampPipe} from "./timestamp";
import {ZipcodePipe} from "./zipcode";
import {PhonePipe} from "./phone";
import {CreditCardPipe} from "./credit-card";
import {SsnPipe} from "./ssn";

@NgModule({
  imports: [CommonModule],
  exports: [
    CapitalizePipe,
    CreditCardPipe,
    DataUsagePipe,
    LocalTimePipe,
    MoneyPipe,
    PhonePipe,
    SsnPipe,
    TimestampPipe,
    ZipcodePipe
  ],
  declarations: [
    CapitalizePipe,
    CreditCardPipe,
    DataUsagePipe,
    LocalTimePipe,
    MoneyPipe,
    PhonePipe,
    SsnPipe,
    TimestampPipe,
    ZipcodePipe
  ],
  providers: []
})
export class SharedPipesModule { }
