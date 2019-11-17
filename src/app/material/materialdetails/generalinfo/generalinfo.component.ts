import {Component, Input, OnInit} from '@angular/core';
import {DEFAULT_TEXT} from '../../../shared/constants/text-constants';

@Component({
  selector: 'app-generalinfo',
  templateUrl: './generalinfo.component.html',
  styleUrls: ['./generalinfo.component.css']
})
export class GeneralinfoComponent implements OnInit {

  readonly DEFAULT_TEXT = DEFAULT_TEXT;
  @Input() materialInfo: any;
  AssociatedID = {
    batch_id: 123,
    prep_id: 456,
    additional_id: 678
  };

  constructor() {
  }

  ngOnInit() {
  }


}
