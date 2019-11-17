import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showGenealogy: boolean;
  showSearchPanel: boolean;
  showSearch: boolean;

  constructor(private router: Router) {
  }

  /**
   * Method to hide genealogy when it is in the search page and material results page
   * returns an observable
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // tslint:disable-next-line:max-line-length
        this.showGenealogy = (event.url === '/') || (event.url === '/material-search-results') || (event.url === '/material-search') || (event.url === '/Page-not-found');
        this.showSearch = (event.url === '/') || (event.url === '/material-search');
      }
    });
  }

}
