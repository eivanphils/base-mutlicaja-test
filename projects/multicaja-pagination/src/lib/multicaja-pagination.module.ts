import { FormComponent } from './payments/components/form/form.component';
import { ButtonPayComponent } from './payments/components/button-pay/button-pay.component';
import { PaymentsModule } from './payments/components/payments.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MulticajaPaginationComponent } from './multicaja-pagination.component';
import { FloatListComponent } from './float-list/float-list.component';
import { MulticajaCardComponent } from './multicaja-card/multicaja-card.component';



@NgModule({
  declarations: [
    MulticajaPaginationComponent,
    FloatListComponent,
    MulticajaCardComponent,
    ButtonPayComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MulticajaPaginationComponent,
    FloatListComponent,
    MulticajaCardComponent,
    ButtonPayComponent,
    FormComponent
  ]
})
export class MulticajaPaginationModule { }
