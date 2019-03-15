import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'prefix'
})
export class PrefixPipe implements PipeTransform{
transform(value:string,arg?:string):string{
  if(!arg){
    return "NO:" + value;
  }
  else{
    return arg+":"+value;
  }
}
}
