import {Component, OnInit} from '@angular/core';
import {BackToMaterialService} from '../shared/services/back-to-material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private spinner: BackToMaterialService) {
  }

  ngOnInit() {
    this.spinner.startSpinner();
  }


}
