import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Subject, Observable } from 'rxjs';
import {Item} from '../Item';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  items:Item[];
  constructor(private service:CommonService) { }
  subject:Subject<string[]>;
  ngOnInit() {
    this.subject = this.service.getSubject();
    this.callAjax();
  }
  callAjax(){
    var obs:Observable<Item[]> = this.service.doAjaxCall();
    obs.subscribe(data=>{
      console.log("AJAx Data is ",data['mobiles']);
    this.items = data['mobiles'];
    console.log("Now Items are ",this.items);
    },err=>{
      console.log('Error is ',err);
    },()=>{
      console.log("Complete ");
    })
  }
  sendIt(data){
    // console.log("Data is ",data);
    // var arr = this.subject.values;
    // arr.push(data);
    // console.log("Array is ",this.subject.values);
    // this.subject.next(arr);
  }

}
