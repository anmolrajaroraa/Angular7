import { MyService } from './../services/MyService';
import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
  ,providers:[MyService]
})
export class Child1Component implements OnInit {

  public message:string;
  private confidentialInfo:string;
  constructor(private myService:MyService) { 
    this.message = "Default message";
  }

  ngOnInit() {
  }

  resetMessage(parentObject: AppComponent){
    this.message = "Message has been reset";
    console.log("Parent object is ",parentObject);
    parentObject.callParent();
  }

  getData(){
    this.message = this.myService.getMessage();
  }
}
