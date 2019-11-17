import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../../shared/services/material.service';
import {MaterialModel} from 'src/app/shared/models/material-model';
import {ScrollToService} from 'ng2-scroll-to-el';

@Component({
  selector: 'app-materialdetails',
  templateUrl: './materialdetails.component.html',
  styleUrls: ['./materialdetails.component.css']
})
export class MaterialdetailsComponent implements OnInit {
  /**
   * Materials model  to Get all the tests of a particular Material ID
   */
  materials: MaterialModel[] = [];

  constructor(private materialService: MaterialService, private scrollService: ScrollToService) {
  }

  ngOnInit() {
    this.getMaterial();
  }

  /**
   * service to Get all the tests of a particular Material ID
   * returns an observable
   */
  public getMaterial() {
    this.materialService.materialById().subscribe((materialList: MaterialModel[]) => {
      this.materials = materialList;
    }, err => {
      console.log(err);
    });
  }

  /**
   * Method to get the elem ref and scroll to that particular element
   */
  scrollToElement(ele: any, genealogy: HTMLElement, chData: HTMLDivElement, testing: HTMLDivElement, reports: HTMLDivElement) {
    if (ele === 'genealogy') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else if (ele === 'generalinfo') {
      this.scrollService.scrollTo(genealogy);
    } else if (ele === 'cData') {
      this.scrollService.scrollTo(chData);
    } else if (ele === 'testing') {
      this.scrollService.scrollTo(testing);
    } else if (ele === 'reports') {
      this.scrollService.scrollTo(reports);
    }

  }
}
