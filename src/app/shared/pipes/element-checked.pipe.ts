import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'elementChecked',
  pure: false
})
export class ElementCheckedPipe implements PipeTransform {
  transform(value: any, attr: any): any {
    // Remove the duplicate elements

    let uniqueArray = value.filter(function(el, index, array) {
      if (attr === 'test') {
        return el.checked;
      } else if (attr === 'owner') {
        return el.Owner.checked;
      } else if (attr === "checked") {
        return el.checked === true;
      }
    });

    return uniqueArray;
  }
}
