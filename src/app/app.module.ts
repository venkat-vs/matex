/**
 * Angular imports
 */
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
/**
 * External Library Imports
 */
import {ScrollToModule} from 'ng2-scroll-to-el';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ExportAsModule} from 'ngx-export-as';
import {ClipboardModule} from 'ngx-clipboard';
import {Ng5SliderModule} from 'ng5-slider';
/**
 * Component Imports
 */
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MaterialListComponent} from './material-list/material-list.component';
import {MaterialComponent} from './material/material.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {GenealogyComponent} from './material/genealogy/genealogy.component';
import {GeneralinfoComponent} from './material/materialdetails/generalinfo/generalinfo.component';
import {GalleryComponent} from './material/materialdetails/gallery/gallery.component';
import {CharacterisationDataComponent} from './material/materialdetails/characterisation-data/characterisation-data.component';
import {TestingComponent} from './material/materialdetails/testing/testing.component';
import {ReportsComponent} from './material/materialdetails/reports/reports.component';
import {MaterialdetailsComponent} from './material/materialdetails/materialdetails.component';
import {AppRoutingModule} from './app-routing.module';
import {FloatMenuComponent} from './material/float-menu/float-menu.component';
import {SearchComponent} from './dashboard/search/search.component';
import {GalleryExpandedComponent} from './material/materialdetails/gallery/gallery-expanded/gallery-expanded.component';
// tslint:disable-next-line:max-line-length
import {CharacterisationDataExpandedComponent} from './material/materialdetails/characterisation-data/characterisation-data-expanded/characterisation-data-expanded.component';
import {TestingExpandedComponent} from './material/materialdetails/testing/testing-expanded/testing-expanded.component';
import {ReportsExpandedComponent} from './material/materialdetails/reports/reports-expanded/reports-expanded.component';
import {GalleryModalComponent} from './material/materialdetails/gallery/gallery-modal/gallery-modal.component';
import {TestingModalComponent} from './material/materialdetails/testing/testing-modal/testing-modal.component';
import {CdataModalComponent} from './material/materialdetails/characterisation-data/cdata-modal/cdata-modal.component';
import {ReportsModalComponent} from './material/materialdetails/reports/reports-modal/reports-modal.component';
import {McompareModalComponent} from './material-list/mcompare-modal/mcompare-modal.component';
/**
 * Service service
 */
import {GalleryService} from './shared/services/gallery.service';
import {DataService} from './shared/services/data.service';
import {UtilityService} from './shared/services/utility.service';
/**
 * Shared components
 */
import {CheckboxGroupComponent} from './shared/components/checkbox-group/checkbox-group.component';
import {PagenotfoundComponent} from './shared/components/pagenotfound/pagenotfound.component';
import {ModalComponent} from './shared/components/modal/modal.component';
/**
 * Shared Filters
 */
import {SplitPipe} from './shared/filters/string-split-pipe';
import {UniquePipe} from './shared/filters/remove-duplicates-pipe';
import {UniqueRecordPipe} from './shared/pipes/unique-records.pipe';
import {FilterTestsPipe} from './shared/pipes/filter-tests.pipe';
import {ElementCheckedPipe} from './shared/pipes/element-checked.pipe';
import {AccordionModule} from "ngx-bootstrap";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MaterialListComponent,
        MaterialComponent,
        HeaderComponent,
        FooterComponent,
        GenealogyComponent,
        GeneralinfoComponent,
        GalleryComponent,
        CharacterisationDataComponent,
        TestingComponent,
        ReportsComponent,
        MaterialdetailsComponent,
        CheckboxGroupComponent,
        PagenotfoundComponent,
        FloatMenuComponent,
        SearchComponent,
        GalleryExpandedComponent,
        CharacterisationDataExpandedComponent,
        TestingExpandedComponent,
        ReportsExpandedComponent,
        ModalComponent,
        GalleryModalComponent,
        TestingModalComponent,
        CdataModalComponent,
        McompareModalComponent,
        ReportsModalComponent,
        SplitPipe,
        UniquePipe,
        UniqueRecordPipe,
        FilterTestsPipe,
        ElementCheckedPipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        Ng2SearchPipeModule,
        AngularStickyThingsModule,
        ModalModule.forRoot(),
        NgbModule,
        ScrollToModule.forRoot(),
        NgxSpinnerModule,
        ExportAsModule,
        ClipboardModule,
        Ng5SliderModule,
        AccordionModule.forRoot()
    ],
    providers: [
        GalleryService,
        DataService,
        UtilityService
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        GalleryModalComponent, TestingModalComponent, CdataModalComponent, ReportsModalComponent, McompareModalComponent
    ]
})
export class AppModule {
}
