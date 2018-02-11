import { AdvertisementModel } from "../src/app/models"

const ADVERTISEMENT = {
  _id: {$id: "573c7c608ffd7c0b2a8b45b6"},
  hasFurniture: false,
  advertisementPrice: {baseRent: 374, sellPrice: 457},
  userWishes: {visibleAddress: true},
  purpose: 0,
  title: "+++ +++ FLATSCREEN ZUM EINZUG! +++ Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem Ausblick",
  realestateSummary: {
    address: {
      street: "Im Bonnefeld",
      number: "7",
      postalCode: "47259",
      city: "Duisburg",
      fullAddress: "Im Bonnefeld 7, 47259 Duisburg",
      location: {
        type: "Point",
        coordinates: [
          51.35949000000001,
          6.69369
        ]
      }
    },
    numberOfRooms: 3,
    space: 78.78000000000003
  },
  additionalId: 131175,
  advertisementAssets: [{
    titlePicture: false,
    advertisementThumbnails: {
      inventory_m: {
        _id: {object_i_d: {}},
        createdAt: {sec: 1484312250, usec: 983000},
        updatedAt: {sec: 1518340175, usec: 924000},
        fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
        filename: "asset57ffa0ced86b1_inventoryM.jpg",
        url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
        mimeType: "image/jpeg",
        metadata: {
          width: 610,
          height: 300,
          thumbnail: "inventory_m",
          transformation: "ad_image_thumbails",
          filesystem: "thumbnails",
          copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0ced86b1_inventoryM.jpg"
        }
      },
      thumb_xs: {
        _id: {object_i_d: {}},
        createdAt: {sec: 1484312250, usec: 983000},
        updatedAt: {sec: 1518340176, usec: 9000},
        fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
        filename: "asset57ffa0cf14b9e_thumbXS.jpg",
        url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
        mimeType: "image/jpeg",
        metadata: {
          width: 200,
          height: 150,
          thumbnail: "thumb_xs",
          transformation: "ad_image_thumbails",
          filesystem: "thumbnails",
          copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0cf14b9e_thumbXS.jpg"
        }
      }
    }
  }, {
    titlePicture: true,
    advertisementThumbnails: {
      inventory_m: {_id: {object_i_d: {}},
      createdAt: {sec: 1484312250, usec: 983000},
      updatedAt: {sec: 1518340175, usec: 924000},
      fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
      filename: "asset57ffa0ced86b1_inventoryM.jpg",
      url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
      mimeType: "image/jpeg",
      metadata: {
        width: 610,
        height: 300,
        thumbnail: "inventory_m",
        transformation: "ad_image_thumbails",
        filesystem: "thumbnails",
        copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0ced86b1_inventoryM.jpg"
      }
      },
      thumb_xs: {
        _id: {object_i_d: {}},
        createdAt: {sec: 1484312250, usec: 983000},
        updatedAt: {sec: 1518340176, usec: 9000},
        fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
        filename: "asset57ffa0cf14b9e_thumbXS.jpg",
        url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
        mimeType: "image/jpeg",
        metadata: {
          width: 200,
          height: 150,
          thumbnail: "thumb_xs",
          transformation: "ad_image_thumbails",
          filesystem: "thumbnails",
          copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0cf14b9e_thumbXS.jpg"
        }
      }
    }
  }]
}

const TITLE_PICTURE = {
  titlePicture: true,
  advertisementThumbnails: {
    inventory_m: {_id: {object_i_d: {}},
      createdAt: {sec: 1484312250, usec: 983000},
      updatedAt: {sec: 1518340175, usec: 924000},
      fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
      filename: "asset57ffa0ced86b1_inventoryM.jpg",
      url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg",
      mimeType: "image/jpeg",
      metadata: {
        width: 610,
        height: 300,
        thumbnail: "inventory_m",
        transformation: "ad_image_thumbails",
        filesystem: "thumbnails",
        copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0ced86b1_inventoryM.jpg"
      }
    },
    thumb_xs: {
      _id: {object_i_d: {}},
      createdAt: {sec: 1484312250, usec: 983000},
      updatedAt: {sec: 1518340176, usec: 9000},
      fileId: "573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
      filename: "asset57ffa0cf14b9e_thumbXS.jpg",
      url: "https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0cf14b9e_thumbXS.jpg",
      mimeType: "image/jpeg",
      metadata: {
        width: 200,
        height: 150,
        thumbnail: "thumb_xs",
        transformation: "ad_image_thumbails",
        filesystem: "thumbnails",
        copySource: "573c7c608ffd7c0b2a8b45b6/asset57ffa0cf14b9e_thumbXS.jpg"
      }
    }
  }
}

describe("Application Test", () => {
  describe("Test AdvertisementModel", () => {
    test("addressIsVisible()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.addressIsVisible()).toBeTruthy()
    })

    test("getCity()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getCity()).toBe(ADVERTISEMENT.realestateSummary.address.city)
    })

    test("getCost()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getCost()).toBe(ADVERTISEMENT.advertisementPrice.baseRent)
    })

    test("getPostalCode()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getPostalCode()).toBe(ADVERTISEMENT.realestateSummary.address.postalCode)
    })

    test("getRoomCount()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getRoomCount()).toBe(ADVERTISEMENT.realestateSummary.numberOfRooms)
    })

    test("getSpace()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getSpace()).toBe(ADVERTISEMENT.realestateSummary.space)
    })

    test("getSpacePretty()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getSpacePretty()).toBe(Math.round(ADVERTISEMENT.realestateSummary.space))
    })

    test("getStreet()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getStreet()).toBe(ADVERTISEMENT.realestateSummary.address.street)
    })

    test("getStreetNumber()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getStreetNumber()).toBe(ADVERTISEMENT.realestateSummary.address.number)
    })

    test("getTitle()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getTitle()).toBe(ADVERTISEMENT.title)
    })

    test("getTitlePicture()", () => {
      const model = new AdvertisementModel(ADVERTISEMENT)
      expect(model.getTitlePicture()).toEqual(TITLE_PICTURE)
    })
  })
})
