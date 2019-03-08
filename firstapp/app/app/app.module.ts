import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations:[AppComponent], //what all components you are going to run
  imports:[BrowserModule], //what all modules are you dependent on
  bootstrap:[AppComponent] //which component you want to run first
})
export class AppModule {}