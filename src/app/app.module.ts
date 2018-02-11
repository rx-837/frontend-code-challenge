import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"


import { AppComponent } from "./app.component"
import { MatCardModule } from "@angular/material/card"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { AdvertisementsService } from "./services"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [AdvertisementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
