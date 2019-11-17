import {Pipe, PipeTransform} from '@angular/core';

export function isString(value: any): value is string {
  return typeof value === 'string';
}

@Pipe({
  name: 'split',
})
export class SplitPipe implements PipeTransform {
  transform(input: any, arg1, separator: string = '-', limit?: number): any {
    if (!isString(input)) {
      return input;
    }
    if (arg1 === 'unit') {
      return input.split(separator, limit)[0];
    } else {
      return input.split(separator, limit)[3];
    }

  }
}
