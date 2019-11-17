import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReportsModalComponent} from '../reports-modal/reports-modal.component';
import {BackToMaterialService} from '../../../../shared/services/back-to-material.service';

@Component({
  selector: 'app-reports-expanded',
  templateUrl: './reports-expanded.component.html',
  styleUrls: ['./reports-expanded.component.css']
})
export class ReportsExpandedComponent implements OnInit {

  constructor(private modalService: NgbModal, private spinner: BackToMaterialService, private backToMaterial: BackToMaterialService) {
  }

  ngOnInit() {
    this.spinner.startSpinner();
  }

  open() {
    const modalRef = this.modalService.open(ReportsModalComponent);
  }

  back() {
    this.backToMaterial.backToMaterial();
  }

}
