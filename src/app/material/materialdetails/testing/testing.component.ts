import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  @Input() testingDb: any;
  result: any;
  isSelectedIndex: number;

  constructor() {
  }

  ngOnInit() {
  }

  filterUnit(event, n: number) {
    this.isSelectedIndex = n;
    this.result = this.testingDb.filter(e => e.CHILD_SAMPLE_DESCRIPTION.includes(event.target.innerHTML));
  }
}
