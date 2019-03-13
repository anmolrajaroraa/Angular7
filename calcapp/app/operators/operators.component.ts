import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @Output()
  operator:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  getOperation(event){
    this.operator.emit(event.target.value);
  }

}
