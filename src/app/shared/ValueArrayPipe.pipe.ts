import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueArray'
})
export class ValueArrayPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.values(value) 
    
  }

}
