import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  @Input()
  data:string;
  
  constructor() { }

  ngOnInit() {
  }

}
