import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterUnique',
  pure: false
})
export class UniqueRecordPipe implements PipeTransform {

  transform(value: any, attr: any): any {

    // Remove the duplicate elements
    let uniqueOnwnerIds = [];
    let uniqueArray = value.filter(function(el, index, array) {
      if (uniqueOnwnerIds.indexOf(el[attr].id) === -1) {
        uniqueOnwnerIds.push(el[attr].id);
        return true;
      }
      return false;
    });

    return uniqueArray;
  }
}
