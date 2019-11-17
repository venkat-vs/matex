import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../../shared/models/material-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GalleryModalComponent} from './gallery-modal/gallery-modal.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() galleryImages: Test[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    // const newTest = [...this.galleryImages];
    // this.galleryImages.map(x => (x.IMAGES.forEach(x1 => this.newImages.push(x1))));
    // this.images = GalleryComponent.chunks(this.newImages, 3);
    // this.tests = GalleryComponent.chunks(newTest, 3);
  }

  /**
   * {openLightBox} Method to call modal on click of individual test tile
   */
  openLightBox(image: any, item: any) {
    const modalRef = this.modalService.open(GalleryModalComponent);
    modalRef.componentInstance.Image = image;
    modalRef.componentInstance.Test = item;
  }
}
