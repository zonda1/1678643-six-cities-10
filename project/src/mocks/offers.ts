export type Features = {
  type: string,
  bedrooms: number,
  maxAdults: number
};

export type Offers = {
  id: string,
  features: Features,
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
];
