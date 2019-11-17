import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.css']
})
export class FloatMenuComponent implements OnInit {

  @Output() sendElement = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }


  /**
   * method  to Get selected element to scroll to that particular element
   * {sendElement} send the selected Html element to the search component to scroll to respective selection
   */
  goToTop(ele) {
    this.sendElement.emit(ele);
  }
}
