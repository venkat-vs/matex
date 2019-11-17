import {Component, OnInit} from '@angular/core';
import {GalleryService} from '../../../../shared/services/gallery.service';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.css']
})
export class GalleryModalComponent implements OnInit {
  Image: any;
  Test: any;

  constructor(private galleryService: GalleryService) {
  }

  ngOnInit() {
  }

  public download() {
    this.galleryService.downloadSelectedImage(this.Image);
  }

  public copied(event) {
    console.log('Image Copied');
  }
}
