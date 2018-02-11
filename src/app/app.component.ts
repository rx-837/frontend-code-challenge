import { Component, OnInit } from "@angular/core"
import { AdvertisementCollection } from "./collections"
import { IAdvertisementModel } from "./interfaces"
import { AdvertisementsService } from "./services"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  public advertisements: Array<IAdvertisementModel>
  public loadingIsComplete = false
  public containErrors = false
  public loader = {
    color: "primary",
    mode: "indeterminate",
    value: 50
  }

  constructor(private advertisementsService: AdvertisementsService) {
  }

  public ngOnInit(): void {
    this.advertisementsService.getAdvertisements().subscribe((response) => {
      this.loadingIsComplete = true
      if (response.errors && response.errors.length > 0 || !response.data) {
        this.containErrors = true
        return
      }
      const collection = new AdvertisementCollection(response.data)
      this.advertisements = collection.take(10)
    }, (error) => {
      this.loadingIsComplete = true
      this.containErrors = true
    })
  }
}
