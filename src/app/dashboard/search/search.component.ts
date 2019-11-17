import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DEFAULT_TEXT } from "../../shared/constants/text-constants";
import { BackToMaterialService } from "../../shared/services/back-to-material.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  readonly DEFAULT_TEXT = DEFAULT_TEXT;
  isActiveInput = false;
  midasIds = "";
  constructor(private spinner: BackToMaterialService, private router: Router) {}

  ngOnInit() {
    this.spinner.startSpinner();
  }

  goTo(): void {
    this.router.navigate(["/material-search-results"])
  }

 
  onInputClick() {
    this.isActiveInput = true;
  }
}
