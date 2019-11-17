import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BackToMaterialService {

  constructor(private router: Router, private spinner: NgxSpinnerService) {
  }


  /**
   * service used to go back to the Material Tile view using  particular Material ID
   * // Todo : pass route and midas number as params
   */
  public backToMaterial(): void {
    this.router.navigate(['/material-details']).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

  /**
   * {startSpinner} loader on the page load
   */
  public startSpinner(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
