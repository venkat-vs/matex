import {Component, OnInit} from '@angular/core';
import {GalleryModalComponent} from '../gallery-modal/gallery-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BackToMaterialService} from '../../../../shared/services/back-to-material.service';
import {MaterialModel} from '../../../../shared/models/material-model';
import {MaterialService} from '../../../../shared/services/material.service';
import {GalleryCheckboxItem} from '../../../../shared/models/gallery-checkbox-item';
import {GalleryService} from '../../../../shared/services/gallery.service';

@Component({
  selector: 'app-gallery-expanded',
  templateUrl: './gallery-expanded.component.html',
  styleUrls: ['./gallery-expanded.component.css']
})
export class GalleryExpandedComponent implements OnInit {

  public data: any;
  testOptions = new Array<GalleryCheckboxItem>();
  term: any;
  index: any;
  /**
   * {testOptions} Array of options to create filter checkboxes
   * {images} array of images
   * {data} array of checked boxes
   * {checkedList} array of checked list
   * {testOptions} test type filter options
   * {term} search string
   */
  private images: any;
  private checkedList = [];

  constructor(
    private modalService: NgbModal,
    private backToMaterial: BackToMaterialService,
    private materialService: MaterialService,
    private galleryService: GalleryService) {
  }

  ngOnInit() {
    this.backToMaterial.startSpinner();
    this.getMaterial();
  }

  /**
   * {openLightBox} Method to call modal on click of individual test tile
   */
  public open(item: any, ele: any) {
    const modalRef = this.modalService.open(GalleryModalComponent);
    modalRef.componentInstance.Image = item;
    modalRef.componentInstance.Test = ele;
  }

  /**
   * {back} Method route back to the parent route
   */
  public back() {
    this.backToMaterial.backToMaterial();
  }

  /**
   * {getMaterial} Method to get material details for a selected material
   */
  public getMaterial() {
    this.materialService.materialById().subscribe((materialList: MaterialModel[]) => {
      this.testOptions = materialList[0].TEST.map(x =>
        new GalleryCheckboxItem(x.TEST_METHOD, x.TEST_METHOD_DESCR, x.IMAGES, x.checked));
      this.data = this.testOptions;
    }, err => {
      console.log(err);
    });
  }


  /**
   * {ontestChange} capture the checked/unchecked filter
   * {data} array of checked boxes and respective objects
   * {value} Array of CheckedBoxes data
   */
  public ontestChange(value): void {
    if (value) {
      this.data = value;
    }
  }

  /**
   * {selectedImageToggle} capture the checked/unchecked filter for particular Test
   * {item} selected image Object
   * {event} selected checkbox even to capture checked/unchecked
   * {value} Array of CheckedBoxes data
   */
  public selectedImageToggle(ele: any, item: any, event): void {
    if (event.target.checked) {
      ele.selectedItemsCount = (ele.selectedItemsCount || 0) + 1;
      item.checked = event.target.checked;
    } else {
      ele.selectedItemsCount--;
      // Find the index of stored id
      item.checked = event.target.checked;
      const index = this.checkedList.findIndex(list => list === item);
      this.checkedList.splice(index, 1); // Then remove
    }
    ele.isSelectAll = ele.selectedItemsCount === ele.IMAGES.length;
  }

  /**
   * {download} Download the selected images from the gallery
   * {images} selected image array list
   * {galleryService} service to send array of images to download as zip
   */
  public download(ele: any) {
    this.images = ele.IMAGES.filter(x => x.checked);
    this.galleryService.downloadSelectedImages(this.images);
  }

  /**
   * {selectAllImages} select all  images from the gallery for a given test type
   * {ele.isSelectAll} enum value true or false for the select/unselect all images of a given test type
   */
  public selectAllImages(ele: any) {
    ele.isSelectAll = !ele.isSelectAll;
    ele.selectedItemsCount = ele.isSelectAll ? ele.IMAGES.length : 0;
    ele.IMAGES.forEach((option) => {
      option.checked = ele.isSelectAll;
    });
  }

}
