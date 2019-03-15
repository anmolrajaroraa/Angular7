import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ModifyPipe } from './modify.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ModifyPipe,

  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log("I am App Module");
}

}
