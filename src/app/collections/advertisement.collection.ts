import { take as _take, values as _values } from "lodash"
import { IAdvertisement } from "../interfaces"
import { AdvertisementModel } from "../models"

export class AdvertisementCollection {
  protected models: {[key: string]: AdvertisementModel} = {}
  constructor(items: Array<IAdvertisement> = []) {
    items.forEach((item: IAdvertisement) => {
      this.models[item.additionalId] = new AdvertisementModel(item)
    })
  }
  public getAll(): Array<AdvertisementModel> {
    return _values<AdvertisementModel>(this.models)
  }
  public take(count: number): Array<AdvertisementModel> {
    return _take<AdvertisementModel>(this.getAll(), count)
  }
}
