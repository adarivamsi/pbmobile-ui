import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zipcode'
})
export class ZipcodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
