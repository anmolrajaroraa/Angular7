import { Child1Component } from './child1/child1.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child2/child5/child5.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations:[AppComponent,Child1Component, Child2Component, Child3Component, Child4Component, Child5Component, C1Component, C2Component], //what all components you are going to run
  imports:[BrowserModule], //what all modules are you dependent on
  bootstrap:[AppComponent] //which component you want to run first
})
export class AppModule {}