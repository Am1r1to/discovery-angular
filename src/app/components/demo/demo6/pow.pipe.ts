import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    console.log(args)
    let res = Math.pow(value,2)
    return res;
  }

}
