import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modify'
})
export class ModifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
