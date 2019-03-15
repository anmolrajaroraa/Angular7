import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  private msg:string[];
  private subject:Subject<string[]>;
  constructor(private service:CommonService) {
    console.log(" I  am Child2");
   }

  ngOnInit() {
    this.subject = this.service.getSubject();
    this.subject.subscribe(data=>{
      this.msg = data;
    })
  }

}
