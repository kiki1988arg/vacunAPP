import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {
  years;
  transform(value: number, ...args: unknown[]): unknown {
    if (value == 0 && value < 12)
      return value / 12;
    else
      this.years = Math.floor(value / 12);
    return (value - this.years * 12)
  }

}
