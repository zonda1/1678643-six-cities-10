export type Features = {
  type: string,
  bedrooms: number,
  maxAdults: number
};

export type Location = {
  city: string,
  lat: number,
  lng: number,
}

export type Offers = {
  id: string,
  features: Features,
  location: Location,
  rating: number,
  price: number,
  placeName: string,
  facilities: string[],
  description: string,
};

export const offers: Offers[] = [
  {
    id: '1',
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    location: {
      city: 'Amsterdam',
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
    rating: 4.8,
    price: 120,
    placeName: 'Wood and stone place',
    facilities: ['WiFi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel', 'TV',
      'Fridge',],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: '2',
    features: {
      type: 'Private room',
      bedrooms: 1,
      maxAdults: 2,
    },
    location: {
      city: 'Amsterdam',
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
    rating: 4.5,
    price: 70,
    placeName: 'Canal View Prinsengracht',
    facilities: ['WiFi',
      'TV',],
    description: 'An excellent one double bedroom maisonette with conservatory and garden boasting well proportioned accommodation ideally located for access to Feltham town centre and Hatton Cross tube station.'
  },
  {
    id: '3',
    features: {
      type: 'Hotel',
      bedrooms: 1,
      maxAdults: 2,
    },
    location: {
      city: 'Amsterdam',
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
    rating: 4.2,
    price: 80,
    placeName: 'The Panoramic Hotel',
    facilities: ['WiFi',
      'Towels',
      'TV',
      'Air conditioning system',
      'Hairdryer'],
    description: 'The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.'
  },
  {
    id: '4',
    features: {
      type: 'Apartment',
      bedrooms: 2,
      maxAdults: 2,
    },
    location: {
      city: 'Amsterdam',
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
    rating: 4.5,
    price: 100,
    placeName: 'Woodlands Park Road, 112, Haringey N15',
    facilities: ['WiFi',
      'Washing machine',
      'Towels',
      'Kitchen',
      'Cabel', 'TV',
      'Fridge',],
    description: 'Newly Renovated beautiful 1/2 bed flat situated in between 3 stations, Haringey, Turnpike Lane, Manor House. This top floor modern conversation is a split level flat with good sized bright bedroom and spacious living room.'
  },
  //Cologne
  {
    id: '5',
    features: {
      type: 'Apartment',
      bedrooms: 2,
      maxAdults: 2,
    },
    location: {
      city: 'Cologne',
      lat: 50.930442,
      lng: 6.950754,
    },
    rating: 3.5,
    price: 75,
    placeName: 'Workers-Sleep-Station',
    facilities: ['WiFi',
      'Washing machine',
      'Towels',
      'Kitchen',
      'Cabel', 'TV',
      'Fridge',],
    description: 'Located 3.5 km from LANXESS Arena, Workers-Sleep-Station has accommodations with free WiFi and free private parking.'
  },
  {
    id: '6',
    features: {
      type: 'Apartment',
      bedrooms: 2,
      maxAdults: 2,
    },
    location: {
      city: 'Cologne',
      lat: 50.940021,
      lng: 6.957002,
    },
    rating: 3.0,
    price: 90,
    placeName: 'Lovely Studio Cologne West - Neues Momomotel',
    facilities: ['WiFi',
      'Washing machine',
      'Towels',
      'Kitchen',
      'Cabel', 'TV',
      'Fridge',],
    description: 'Located in Cologne in the Nordrhein-Westfalen region, Lovely Studio Cologne West - Neues Momomotel has accommodations with free WiFi and free private parking.'
  },
  //Brussels
  {
    id: '7',
    features: {
      type: 'Apartment',
      bedrooms: 2,
      maxAdults: 2,
    },
    location: {
      city: 'Brussels',
      lat: 50.853521,
      lng: 4.353822,
    },
    rating: 4.0,
    price: 50,
    placeName: 'Apartment Capitalcondos ',
    facilities: ['WiFi',
      'Washing machine',
      'Towels',
      'Kitchen',
      'Cabel', 'TV',
      'Fridge',],
    description: 'Apartment Capitalcondos is located on the outer edge of Ninove, 1.2 mi from the city center. The apartment is connected to part of a villa and located on an avenue which offers cycling and walking paths around the surrounding area.'
  },
];
