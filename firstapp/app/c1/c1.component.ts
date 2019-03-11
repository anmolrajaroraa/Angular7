import { Message } from './Message';
import { Component, OnInit , OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit, OnDestroy {
  message:string;
  message2:string;
  message3:string;
  messages:Message;
  constructor() {
    this.message = "Hello child. I am your parent."
    this.message2 = "message2";
    this.message3 = "message3";
    this.messages = {msg_1:"Hello child. I am your parent.",msg_2:"message2",msg_3:"message3"}
  }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

}
