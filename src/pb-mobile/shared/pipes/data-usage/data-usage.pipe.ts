import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataUsage'
})
export class DataUsagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
