import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TestingModalComponent} from '../testing-modal/testing-modal.component';
import {BackToMaterialService} from '../../../../shared/services/back-to-material.service';

@Component({
  selector: 'app-testing-expanded',
  templateUrl: './testing-expanded.component.html',
  styleUrls: ['./testing-expanded.component.css']
})
export class TestingExpandedComponent implements OnInit {

  constructor(private modalService: NgbModal, private spinner: BackToMaterialService, private backToMaterial: BackToMaterialService) {
  }

  ngOnInit() {
    this.spinner.startSpinner();
  }

  open() {
    const modalRef = this.modalService.open(TestingModalComponent);
  }

  back() {
    this.backToMaterial.backToMaterial();
  }

}
