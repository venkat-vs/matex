import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CdataModalComponent} from '../cdata-modal/cdata-modal.component';
import {MaterialModel} from '../../../../shared/models/material-model';
import {MaterialService} from '../../../../shared/services/material.service';
import {BackToMaterialService} from '../../../../shared/services/back-to-material.service';

@Component({
  selector: 'app-characterisation-data-expanded',
  templateUrl: './characterisation-data-expanded.component.html',
  styleUrls: ['./characterisation-data-expanded.component.css']
})
export class CharacterisationDataExpandedComponent implements OnInit {
  tests: any;

  constructor(
    private modalService: NgbModal,
    private materialService: MaterialService,
    private backToMaterial: BackToMaterialService) {
  }

  ngOnInit() {
    this.getMaterial();
    this.backToMaterial.startSpinner();
  }

  /**
   * {open} Method to call modal on click of individual test tile
   */
  public open(test): void {
    const modalRef = this.modalService.open(CdataModalComponent);
    modalRef.componentInstance.test = test;
  }


  /**
   * {getMaterial} get respective selected Material
   */
  public getMaterial(): void {
    this.materialService.materialById().subscribe((materialList: MaterialModel[]) => {
      this.tests = materialList[0].TEST;
    }, err => {
      console.log(err);
    });
  }

  /**
   * {back} routes back to previous parent route
   */
  public back(): void {
    this.backToMaterial.backToMaterial();
  }


}
