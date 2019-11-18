import {Component, OnInit} from '@angular/core';
import {MaterialModel} from '../../shared/models/material-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ExportAsConfig, ExportAsService} from 'ngx-export-as';

import {UtilityService} from '../../shared/services/utility.service';
import {preferredTestsJson} from "../../shared/data/preferredTests";

const exportAsConfig: ExportAsConfig = {
  type: 'csv', // the type you want to download
  elementId: 'myTableIdElementId', // the id of html/table element,
  options: {
    // html-docx-js document options
    orientation: 'landscape',
    margins: {
      top: '20'
    }
  }
};

@Component({
  selector: 'app-mcompare-modal',
  templateUrl: './mcompare-modal.component.html',
  styleUrls: ['./mcompare-modal.component.css']
})
export class McompareModalComponent implements OnInit {
  dashboardData: MaterialModel[];
  preferredTests = preferredTestsJson['default'];
  testMethods = [];
  plotTestMethods = {};
  selectedMaterials = [];
  constructor(
    private modalService: NgbModal,
    private exportAsService: ExportAsService,
    private utilityService: UtilityService
  ) {
  }

  ngOnInit() {
    this.formatData();
  }

  showHideGraph(testMethod) {
    this.plotTestMethods[testMethod] = !this.plotTestMethods[testMethod];
  }


  public export(w) {
    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
  }

  formatData() {
    this.dashboardData.map(midas => {
      // filter the midas based on selected Materials
      if (this.selectedMaterials.indexOf(midas.MIDAS_Id)) {
        midas.Tests.map(test => {
          // check if this already exist in testMethods array
          const TestMethodExist = this.testMethods.find(
            testInTestMethods =>
              testInTestMethods.TestMethod === test.TestMethod
          );
          if (TestMethodExist) {
            // push test meterial info
            TestMethodExist.meterials.push({
              MIDAS_Id: midas.MIDAS_Id,
              Sample_Description: midas.Sample_Description
            });

            // push test components meterial info
            TestMethodExist.Components.map(component => {
              component.meterials.push({
                MIDAS_Id: midas.MIDAS_Id,
                result: 20
              });
            });
          } else {
            // filter midas test by preferred Tests
            const testMethod = this.utilityService.filterByPreferredTests(
              test.TestMethod,
              this.preferredTests
            );
            if (testMethod) {
              // filter test method components by preferred TestMethod Components
              const filteredComponents =
                (test.Components &&
                  this.utilityService.filterByPreferredComponents(
                    test,
                    this.preferredTests
                  )) ||
                [];

              // Now push the meterial result info in each component
              filteredComponents.map(component => {
                component.meterials = [];
                component.meterials.push({
                  MIDAS_Id: midas.MIDAS_Id,
                  result: 20
                });
              });
              // now push the test info to test methods array
              const testInfo = {
                TestMethod: test.TestMethod,
                Sample_Description: test.Sample_Description,
                checked: test.checked,
                meterials: [
                  {
                    MIDAS_Id: midas.MIDAS_Id,
                    Sample_Description: midas.Sample_Description
                  }
                ],
                Components: filteredComponents
              };
              this.testMethods.push(testInfo);
            }
          }
        });
      }
    });
    // filter the testmethod which are not common in all
    this.testMethods = this.testMethods.filter(
      test => test.meterials.length === 3
    );
    console.log(this.testMethods);
  }

  updateMidasByTestCheckedProp(event, testMethod) {
    this.testMethods.map(test => {
      if (test.TestMethod === testMethod) {
        test.checked = event.target.checked;
      }
    });
  }
}
