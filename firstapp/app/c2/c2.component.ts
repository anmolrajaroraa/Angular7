import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  @Input() //data coming from parent
  data:string;

  @Output() //accessing data of parent or sending data to parent
  dataout:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  callParentFnUsingEmit(event){
    this.dataout.emit("Hello Parent, I am child");
  }

}
