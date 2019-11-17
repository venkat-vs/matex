/**
 * Re-usable Checkbox component to create checkbox filters in any given component
 *
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GalleryCheckboxItem} from '../../models/gallery-checkbox-item';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {

  @Input() options = Array<GalleryCheckboxItem>();
  @Input() selectedValues: GalleryCheckboxItem[];
  @Output() toggle = new EventEmitter<any[]>();
  masterSelected: boolean;

  constructor() {
    this.masterSelected = true;
  }

  ngOnInit() { 
  }

  /**
   * Function to Toggle Checkboxes in the Gallery Detailed view.
   * {selectedValues} to return the selected objects
   * {toggle} to emmit the selected objects to the Gallery s
   * {masterSelected} if either one of the filter checkbox is selected then set masterSelected as false
   */
  onToggle() {
    this.selectedValues = this.options.filter(x => x.checked);
    this.toggle.emit(this.selectedValues);
    this.masterSelected = this.selectedValues.length >= this.options.length;
  }

  /**
   * Function to Select all Checkboxes in the Gallery Detailed view.
   * {options} to get the all  checkboxes and set the checked value to true
   * {toggle} to emmit the selected objects to the Gallery Component
   */
  public selectAll(): void {
    this.options.forEach((option) => {
      option.checked = this.masterSelected;
    });
    this.toggle.emit(this.options.filter(x => x.checked));
  }


}
