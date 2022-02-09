import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssn'
})
export class SsnPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
