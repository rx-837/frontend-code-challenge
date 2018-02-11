import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { environment } from "../../environments/environment"
import { IAdvertisementResponse } from "../interfaces"

@Injectable()
export class AdvertisementsService {
  constructor(private http: HttpClient) {
  }
  // Couldn't find type of advertisement (rent or sale) at back-end response
  public getAdvertisements(): Observable<IAdvertisementResponse> {
    const url = `${environment.apiUrl}/advertisements`
    return this.http.get<IAdvertisementResponse>(url)
  }
}
