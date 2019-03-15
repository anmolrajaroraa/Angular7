import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3Component } from '../child3/child3.component';
@NgModule({
  imports: [

  CommonModule
  ],
  declarations: [Child3Component],
  exports:[Child3Component]
})
export class Module2Module {
  constructor(){
    console.log(" I am Module2 ");
  }
 }
