import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthToYear'
})
export class MonthToYearPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return Math.floor(value / 12);
  }

}
