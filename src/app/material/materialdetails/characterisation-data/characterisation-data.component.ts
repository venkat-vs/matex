import {Component, Input, OnInit} from '@angular/core';
import {Test} from 'src/app/shared/models/material-model';
import {CdataModalComponent} from './cdata-modal/cdata-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characterisation-data',
  templateUrl: './characterisation-data.component.html',
  styleUrls: ['./characterisation-data.component.css']
})
export class CharacterisationDataComponent implements OnInit {

  /**
   * {mtests} material tests array for a particular Material ID
   * {cData} Characterization data array grouped into 3 items per array for carousel
   */

  @Input() mtests: Test[];
  cData: any[];
  testData: any[];

  constructor(private modalService: NgbModal) {
  }

  /**
   * {chunks} method to split a array in group of 3 items per array
   */
  static chunks(array, size) {
    let results: any[];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  ngOnInit() {
    this.cData = [...this.mtests];
    this.testData = CharacterisationDataComponent.chunks(this.cData, 3);
  }

  /**
   * {open} Method to call modal on click of individual test tile
   */
  public open(test) {
    const modalRef = this.modalService.open(CdataModalComponent);
    modalRef.componentInstance.test = test;
  }

}


