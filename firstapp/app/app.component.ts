import { Component } from '@angular/core';

@Component({
  selector:'app-root', //by which name your component will be known/by which tag your component will be utilized
  //template:'<h1>I am inline HTML coming from AppComponent</h1>',
  templateUrl:'app.component.html',
  styleUrls:["app.component.css"]
})
export class AppComponent {
  str:string;
  myCssClass:string;
  constructor(){
    this.str = "I am a string";
    this.myCssClass = "yellow";
  }
}