import { Child1Component } from './child1/child1.component';
import { Component, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';

  /*@ViewChild(Child1Component)
  child:Child1Component;

  takeInput(event){
    this.child.message = event.target.value;
  }

  resetChildMessage(event){
    this.child.resetMessage(this);
  }*/

  @ViewChildren(Child1Component)
  children:QueryList<Child1Component>;

  getAllChildren(event){
    console.log(this.children);
    this.children.forEach(currentChild=>{
      currentChild.message = event.target.value;
    })
  }

  callParent(){
    //this.child.message = "Child has called parent";
  }
}
