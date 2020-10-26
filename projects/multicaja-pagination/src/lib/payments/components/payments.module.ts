import { ButtonPayComponent } from './button-pay/button-pay.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    ButtonPayComponent,
    FormComponent
  ],
  exports: [
    ButtonPayComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentsModule { }
