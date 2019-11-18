import {Component, OnInit, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Options} from 'ng5-slider';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {McompareModalComponent} from './mcompare-modal/mcompare-modal.component';
// import { Lightbox } from 'ngx-lightbox';
import {dashboardJson} from '../shared/data/dashboard';
import {preferredTestsJson} from '../shared/data/preferredTests';
import {documentsJson} from '../shared/data/document';
// import * as  documentJson from '../../../../data/document.ts';
import {DataService} from '../shared/services/data.service';

@Component({
    selector: 'app-material-list',
    templateUrl: './material-list.component.html',
    styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
    private albums = [];
    sourceData = [];
    dashboardData = [];
    documentData = [];
    midasIds = [];
    updatedMidasIds = [];
    preferredTests = [];
    documents = [];
    ownerMidasCounts = {};
    testMethodMidasCount = {};
    testMethods = [];
    testComponents = [];
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    midasOwners = [];
    activeView = 'grid';
    activeTab = 'material';
    value = -40;
    highValue = 60;
    options: Options = {
        floor: 0,
        ceil: 100
    };
    materialsToCompare = [];

    isOwnerAccordionGroupOpen = false;
    isTestMethodAccordionGroupOpen = false;
    isComponentAccordionGroupOpen = false;

    isOwnerSelectAll = true;
    isTestMethodSelectAll = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private data: DataService,
        private modalService: NgbModal
    ) {
        this.preferredTests = preferredTestsJson.default;
        this.documents = documentsJson.default;
    }

    ngOnInit() {
        this.value = -40;
        this.highValue = 60;
        this.options = {
            floor: -50,
            ceil: 100,
            noSwitching: true,
            translate: (value: number): string => {
                if (value === -40) {
                    return 'midas no' + value;
                }
                return '$' + value;
            }
        };
        this.route.queryParams.subscribe(params => {
            // Defaults to 0 if no query param provided.
            this.midasIds = ['4062106', '4058656', '405123', '4058657'];
            this.sourceData = dashboardJson.default.filter(
                x => this.midasIds.includes(x.MIDAS_Id) === true
            );
            this.sourceData.map(midas => {
                midas.Owner.checked = true;
                midas.Tests.map(test => {
                    test.checked = true;
                });
            });

            this.getDashbardData();
            this.ownerMidasCount();
            this.ownerTestMidasCount();
        });

        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Select Countries',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: 'myclass custom-class',
            badgeShowLimit: 0
        };
    }

    setOptions(component: any): void {
        return;
        // Due to change detection rules in Angular, we need to re-create the options object to apply the change
        const newOptions: Options = Object.assign({}, this.options);
        newOptions.floor = component.min;
        newOptions.ceil = component.max;
        this.options = newOptions;
    }

    // getOptions(component) {
    //   return {
    //     floor: component.min,
    //     ceil: component.max,
    //     noSwitching: true,
    //     translate: (value: any): string => {
    //       if (value === component.result) {
    //         return 'midas no' + value;
    //       }
    //       return value;
    //     }
    //   };
    // }
    switchView(view) {
        this.activeView = view;
    }

    switchTab(tab) {
        this.activeTab = tab;
        if (tab === 'document') {
            this.isOwnerAccordionGroupOpen = false;
            this.isTestMethodAccordionGroupOpen = false;
            this.isComponentAccordionGroupOpen = false;
        }
    }

    getDashbardData() {
        this.dashboardData = this.sourceData.filter(
            x => this.midasIds.includes(x.MIDAS_Id) === true
        );
    }

    updateMidasByTestCheckedProp(checked, testMethod) {
        this.dashboardData.map(midas => {
            midas.Tests.map(test => {
                if (test.TestMethod === testMethod) {
                    test.checked = checked;
                }
            });
        });
    }

    selectAllTestMethod() {
        this.isTestMethodSelectAll = !this.isTestMethodSelectAll;
        const allMidasCheckBoxes = window.document.getElementsByClassName('test-method-checkbox');
        // @ts-ignore
        for (const allMidasCheckBox of allMidasCheckBoxes) {
            (allMidasCheckBox as HTMLInputElement).checked = this.isTestMethodSelectAll;
        }
        this.filterUnique(this.testMethods, 'TestMethod').forEach(test => {
            this.updateMidasResult(this.isTestMethodSelectAll, test.TestMethod);
        });
    }

    selectAllOwnerMidas() {
        this.isOwnerSelectAll = !this.isOwnerSelectAll;
        const allMidasCheckBoxes = window.document.getElementsByClassName('owner-midas-checkbox');
        // @ts-ignore
        for (const allMidasCheckBox of allMidasCheckBoxes) {
            (allMidasCheckBox as HTMLInputElement).checked = this.isOwnerSelectAll;
        }
        this.filterUnique(this.sourceData, 'Owner').forEach(midas => {
            this.updateMidasResult(this.isOwnerSelectAll, midas.Owner.id);
        });
    }

    filterUnique(value: any, attr: any): any[] {
        const uniqueOnwnerIds = [];
        const uniqueArray = value.filter((el, index, array) => {
            if (uniqueOnwnerIds.indexOf(el[attr].id) === -1) {
                uniqueOnwnerIds.push(el[attr].id);
                return true;
            }
            return false;
        });
        return uniqueArray;
    }

    updateMidasResult(checked, ownerId) {
        this.dashboardData.forEach(midas => {
            if (midas.Owner.id === ownerId) {
                midas.Owner.checked = checked;
                midas.Tests.map(test => {
                    test.checked = checked;
                });
            }
        });

        this.ownerTestMidasCount();

        // get the midas ids for this owner
        // const midasIdsByOwner = this.getMidasIdsByOwner(ownerId);
        // if (!!event.target.checked) {
        //   // add midas ids
        //   const addedMidasIds = this.midasIds.concat(midasIdsByOwner);
        //   // Removing duplicates if any
        //   this.midasIds = addedMidasIds.filter(
        //     (midasid, index) => addedMidasIds.indexOf(midasid) === index
        //   );
        // } else {
        //   // remove midas ids
        //   this.midasIds = this.midasIds.filter((midasId) => {
        //     return midasIdsByOwner.indexOf(midasId) === -1;
        //   });
        // }
        // this.getDashbardData();
    }

    getMidasIdsByOwner(ownerId) {
        const midasIdsByOwner = this.sourceData.map(midas => {
            if (midas.Owner.id === ownerId) {
                return midas.MIDAS_Id;
            }
        });
        return midasIdsByOwner;
    }

    reloadDashboard() {
    }

    open(index: number): void {
        // open lightbox
        // this._lightbox.open(this.albums, index);
    }

    /*close(): void {
        // close lightbox programmatically
        // this._lightbox.close();
    }*/

    ownerMidasCount() {
        this.ownerMidasCounts = {};
        this.dashboardData.map(el => {
            this.ownerMidasCounts[el.MIDAS_Id] =
                1 + (this.ownerMidasCounts[el.MIDAS_Id] || 0);
        });
    }

    ownerTestMidasCount() {
        this.testMethodMidasCount = {};
        this.testMethods = [];
        this.dashboardData.map(midas => {
            // Find if the midas contains this test method.
            if (midas.Owner.checked) {
                midas.Tests.map(test => {
                    if (test.checked) {
                        if (this.testMethodMidasCount[test.TestMethod]) {
                            this.testMethodMidasCount[test.TestMethod] += 1;
                        } else {
                            this.testMethodMidasCount[test.TestMethod] = 1;
                            this.testMethods.push(test);
                        }
                    }
                });
            }
        });
        this.getUniqueTestComponents();
    }

    getCountOfMidas(testMethod) {
        return this.testMethodMidasCount[testMethod];
    }

    getUniqueTestComponents() {
        this.testComponents = [];
        this.testMethods.map(test => {
            if (test.checked && test.Components) {
                test.Components.map(component => {
                    const component1 = this.testComponents.find(
                        uniqueComponent =>
                            uniqueComponent.component.component === component.component
                    );
                    if (!component1 || this.testComponents.length === 0) {
                        this.testComponents.push({component, test});
                    }
                });
            }
        });
    }

    goToCompareResult(): void {
        if (this.materialsToCompare.length !== 3) {
            return;
        }
        const modalRef = this.modalService.open(McompareModalComponent);
        modalRef.componentInstance.dashboardData = this.dashboardData;
        modalRef.componentInstance.selectedMaterials = this.materialsToCompare;
    }

    goToMidasDetail($event) {
        if ($event.target.type === 'checkbox') {
            return;
        }
        this.router.navigate(['/material-details']);
    }

    updateMaterialsToCompare(event, midasId) {
        const midasIndex = this.materialsToCompare.indexOf(midasId);
        if (event.target.checked && midasIndex === -1) {
            this.materialsToCompare.push(midasId);
        } else if (!event.target.checked && midasIndex !== -1) {
            this.materialsToCompare.splice(midasIndex, 1);
        }
    }
}
