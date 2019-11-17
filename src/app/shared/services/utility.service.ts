import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() {
  }

  filterByPreferredTests(testMethod, preferredTests) {
    return preferredTests.find(
      (preferredTest) => preferredTest.TestMethod === testMethod
    );
  }

  filterByPreferredComponents(test, preferredTests) {
    return test.Components.filter((component) => {
      const preferredTest = preferredTests.find(
        (preferredTest) => preferredTest.TestMethod === test.TestMethod
      );
      return preferredTest.Components.find(
        (preferredComponent) =>
          preferredComponent.component === component.component
      );
    });
  }
}
