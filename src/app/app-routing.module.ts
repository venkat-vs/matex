import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagenotfoundComponent} from './shared/components/pagenotfound/pagenotfound.component';
import {SearchComponent} from './dashboard/search/search.component';
import {MaterialListComponent} from './material-list/material-list.component';
import {MaterialComponent} from './material/material.component';
import {GalleryExpandedComponent} from './material/materialdetails/gallery/gallery-expanded/gallery-expanded.component';
// tslint:disable-next-line:max-line-length
import {CharacterisationDataExpandedComponent} from './material/materialdetails/characterisation-data/characterisation-data-expanded/characterisation-data-expanded.component';
import {TestingExpandedComponent} from './material/materialdetails/testing/testing-expanded/testing-expanded.component';
import {ReportsExpandedComponent} from './material/materialdetails/reports/reports-expanded/reports-expanded.component';
import {paths} from './shared/constants/app-path';
import {PathResolveService} from './shared/services/path-resolve.service';

export const routes: Routes = [
  {
    path: '',

    children: [
      {path: paths.search, component: SearchComponent, data: {animationState: paths.search}},
      {path: paths.searchResults, component: MaterialListComponent, data: {animationState: paths.searchResults}},
      {path: paths.materialDetails, component: MaterialComponent, data: {animationState: paths.materialDetails}},
      {path: paths.galleryDetails, component: GalleryExpandedComponent, data: {animationState: 'gallery'}},
      {path: paths.characterizationDetails, component: CharacterisationDataExpandedComponent, data: {animationState: 'cData'}},
      {path: paths.testingDetails, component: TestingExpandedComponent, data: {animationState: 'testing'}},
      {path: paths.reportDetails, component: ReportsExpandedComponent, data: {animationState: 'reports'}},
      {path: paths.pageNotFound, component: PagenotfoundComponent, data: {animationState: 'pagenotfound'}},
      {path: '', redirectTo: paths.search, pathMatch: 'full'},
    ]
  },
  {path: '**', resolve: {path: PathResolveService}, component: PagenotfoundComponent, data: {animationState: 'nine'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
