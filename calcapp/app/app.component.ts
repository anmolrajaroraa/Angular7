import { calcOperations } from './models/calcOperations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calcapp';
  firstNum:number;
  secondNum:number;
  total:number;
  getFirstInput(firstNum){
    this.firstNum = firstNum;
    console.log(firstNum);
  }
  getSecondInput(secondNum){
    this.secondNum = secondNum;
    console.log(secondNum);
  }
  getOperationName(operatorName){
    console.log("opertor is " + operatorName);
    /*if(operatorName == "add"){
      this.total = calcOperations.add(this.firstNum, this.secondNum);
    }*/
    //this.total = calcOperations['add'](this.firstNum, this.secondNum);
    this.total = calcOperations[operatorName](this.firstNum, this.secondNum);
  }
}
