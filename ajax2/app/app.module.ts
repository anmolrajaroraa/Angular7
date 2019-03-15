import { PrefixPipe } from './prefix.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {HttpClientModule} from '@angular/common/http';
import {Module2Module} from './module2/module2.module';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    PrefixPipe

  ],
  imports: [
    BrowserModule, HttpClientModule,Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log("I am App Module");
}

}
