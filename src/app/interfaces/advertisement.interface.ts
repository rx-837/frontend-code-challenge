export interface IAdvertisementResponse {
  data: Array<IAdvertisement>
  errors: Array<any>
  links: Array<any>
  meta: { page: number, pageSize: number, count: number }
}

export interface IPicture {
  advertisementThumbnails: {
    inventory_m: {
      createdAt: { sec: number, usec: number }
      fileId: string
      filename: string
      metadata: {
        copySource: string
        filesystem: string
        height: number
        thumbnail: string
        transformation: string
        width: number
      }
      mimeType: string
      updatedAt: { sec: number, usec: number }
      url: string
    }
    thumb_xs: {
      createdAt: { sec: number, usec: number }
      fileId: string
      filename: string
      metadata: {
        copySource: string
        filesystem: string
        height: number
        thumbnail: string
        transformation: string
        width: number
      }
      mimeType: string
      updatedAt: { sec: number, usec: number }
      url: string
    }
  }
  titlePicture: boolean
}

export interface IRealestateSummary {
  address: {
    city: string
    fullAddress: string
    location: {
      coordinates: Array<number>,
      type: string
    }
    number: string
    postalCode: string
    street: string
  }
  numberOfRooms: number
  space: number
}

export interface IUserWishes {
  visibleAddress: boolean
}

export interface IAdvertisement {
  additionalId: number
  advertisementAssets: Array<IPicture>
  advertisementPrice: { baseRent: number, sellPrice: number }
  hasFurniture: boolean
  purpose: number | boolean
  realestateSummary: IRealestateSummary
  title: string
  userWishes: IUserWishes
  _id: { $id: string }
}

export interface IAdvertisementModel {
  addressIsVisible(): boolean
  getCity(): string
  getCost(): number
  getPostalCode(): string
  getRoomCount(): number
  getSpace(): number
  getSpacePretty(): number
  getStreet(): string
  getStreetNumber(): string
  getTitle(): string
  getTitlePicture(): IPicture
}
