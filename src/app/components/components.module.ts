import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertErrorComponent } from './alert-error/alert-error.component';



@NgModule({
  declarations: [AlertSuccessComponent, AlertErrorComponent],
  exports: [
    AlertErrorComponent,
    AlertSuccessComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
