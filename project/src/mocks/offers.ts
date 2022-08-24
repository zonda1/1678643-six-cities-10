export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type CityType = {
  name: string,
  location: Location
}
export type HostType = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}


export type Offers = {
  city: CityType
  previewImage: string,
  images: string[],
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number
  price: number,
  goods: string[],
  host: HostType,
  description: string,
  location: Location,
  id: number,
};
