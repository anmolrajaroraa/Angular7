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
  isHide:boolean;
  counter:number;
  result:number;
  names:string[];
  currentDate:object;
  obj:{id:number, name:string};
  fakeJson;
  salary:number;
  
  constructor(){
    this.str = "I am a string";
    this.myCssClass = "yellow";
    this.isHide = false;
    this.counter = 0;
    this.result = 0;
    this.names = ["John", "Mike", "Emily", "Bob"];
    this.currentDate = new Date();
    this.obj = {id:101, name:"John"};
    this.fakeJson = {"id":"101","name":"John","contact":[{"contact1":"123"},{"contact2":"789"}]}
    this.salary = 100000000.9877;
  }

  toggleShowHide():void{
    this.isHide = !this.isHide;
  }

  takeInput(event):void{
    this.str = event.target.value;
  }

  incrementCounter():void{
    (this.counter)++;
  }

  doAdd(x:string, y:string):void{
    this.result =  parseInt(x) + parseInt(y);
  }
}