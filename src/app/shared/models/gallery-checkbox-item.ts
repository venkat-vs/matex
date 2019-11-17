/**
 * Model for the GalleryComponent Checkboxes filter
 *
 */
import {Images} from './material-model';


export class GalleryCheckboxItem {
  // data properties
  TEST_METHOD: string;
  TEST_METHOD_DESCR: string;
  IMAGES: Images[];

  // state properties
  checked: boolean;
  isSelectAll: boolean;
  selectedItemsCount: number;

  constructor(TEST_METHOD: any, TEST_METHOD_DESCR: any,
              IMAGES: Images[],
              checked?: boolean) {
    this.TEST_METHOD = TEST_METHOD;
    this.TEST_METHOD_DESCR = TEST_METHOD_DESCR;
    this.IMAGES = IMAGES;
    this.checked = checked ? checked : true;
    this.isSelectAll = false;
    this.selectedItemsCount = 0;
  }
}
