import { find } from "lodash"
import { IAdvertisement, IAdvertisementModel, IPicture, IRealestateSummary, IUserWishes } from "../interfaces"

export class AdvertisementModel implements IAdvertisementModel {
  constructor(protected attributes: IAdvertisement) {
  }
  private getAdvertisementAssets(): Array<IPicture> {
    return this.attributes.advertisementAssets
  }
  private getRealestateSummary(): IRealestateSummary {
    return this.attributes.realestateSummary
  }
  private getUserWishes(): IUserWishes {
    return this.attributes.userWishes
  }
  public addressIsVisible(): boolean {
    return this.getUserWishes().visibleAddress
  }
  public getCity(): string {
    return this.getRealestateSummary().address.city
  }
  public getCost(): number {
    return this.attributes.advertisementPrice.baseRent
  }
  public getPostalCode(): string {
    return this.getRealestateSummary().address.postalCode
  }
  public getRoomCount(): number {
    return this.getRealestateSummary().numberOfRooms
  }
  public getSpace(): number {
    return this.getRealestateSummary().space
  }
  public getSpacePretty(): number {
    return Math.round(this.getRealestateSummary().space)
  }
  public getStreet(): string {
    return this.getRealestateSummary().address.street
  }
  public getStreetNumber(): string {
    return this.getRealestateSummary().address.number
  }
  public getTitle(): string {
    return this.attributes.title
  }
  public getTitlePicture(): IPicture {
    return find<IPicture>(this.getAdvertisementAssets(), (picture) => picture.titlePicture === true)
  }
}
