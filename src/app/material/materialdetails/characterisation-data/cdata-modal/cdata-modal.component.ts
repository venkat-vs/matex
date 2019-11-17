import {Component, OnInit} from '@angular/core';
import {Test} from '../../../../shared/models/material-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GalleryModalComponent} from '../../gallery/gallery-modal/gallery-modal.component';
import {ExportAsConfig, ExportAsService} from 'ngx-export-as';

const exportAsConfig: ExportAsConfig = {
  type: 'csv', // the type you want to download
  elementId: 'myTableIdElementId', // the id of html/table element,
  options: { // html-docx-js document options
    orientation: 'landscape',
    margins: {
      top: '20'
    }
  }
};

@Component({
  selector: 'app-cdata-modal',
  templateUrl: './cdata-modal.component.html',
  styleUrls: ['./cdata-modal.component.css']
})
export class CdataModalComponent implements OnInit {

  test: Test;

  constructor(private modalService: NgbModal, private exportAsService: ExportAsService) {
  }

  ngOnInit() {
  }

  /**
   * {open} Method to call modal on click of individual test tile
   */
  public open(test) {
    const modalRef = this.modalService.open(GalleryModalComponent);
    modalRef.componentInstance.Test = test;
    modalRef.componentInstance.Image = test.IMAGES;
  }

  public export(w) {
    // download the file using old school javascript method
    this.exportAsService.save(exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });
  }

}
