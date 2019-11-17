import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterTest',
  pure: false
})
export class FilterTestsPipe implements PipeTransform {
  // static testMethods = { TestMethod: [], component: [] };
  transform(collection: any[], attr: string, value: {}) {
    const testMethods = {TestMethod: [], component: []};
    if (!collection || !attr || !value) {
      // this.constructor["testMethods"] = { TestMethod: [], component: [] };
      return collection;
    }

    // Remove the duplicate elements
    // let uniqueOnwnerIds = [];
    let uniqueArray = collection.filter((test, index, array) => {
      if (attr === 'component') {
        return value['preferredTests'].find(preferredTest => {
          if (
            test['test']['checked'] &&
            preferredTest['TestMethod'] === test['test']['TestMethod']
          ) {
            return preferredTest['Components'].find(
              component => component.component === test['component'][attr]
            );
          }
        });
        //  this.constructor["testMethods"] = { TestMethod: [], component: [] };
      } else if (attr === 'TestMethod') {
        return value['preferredTests'].find(preferredTest => {
          return preferredTest['TestMethod'] === test['TestMethod'];
        });
      }
      // check if the testmethod exist in testMethod array
      if (testMethods[attr].indexOf(test[attr]) === -1) {
        // now check if this method exist in preferredTests array
        const midasTest = value['preferredTests'].find(preferredTest => {
          if (attr === 'TestMethod') {
            return preferredTest[attr] === test[attr];
          } else if (
            attr === 'component' &&
            value['test']['checked'] &&
            preferredTest['TestMethod'] === value['test']['TestMethod']
          ) {
            return preferredTest['Components'].find(
              component => component.component === test[attr]
            );
          }
        });
        if (midasTest) {
          testMethods['testMethods'][attr].push(test[attr]);
          return true;
        }
      }

      return false;
    });

    return uniqueArray;
  }
}
