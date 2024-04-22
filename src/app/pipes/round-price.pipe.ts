import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPrice',
  standalone: true,
})
export class RoundPricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (typeof value !== 'number' || isNaN(value)) {
      return '';
    }
    const rounded = value.toFixed(2);

    return `${rounded}`;
  }

}
