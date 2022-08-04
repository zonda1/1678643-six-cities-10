// export type City = {
//   title: string;
//   lat: number;
//   lng: number;
//   zoom: number;
// };

// export const CITY: City = {
//   title: 'Amsterdam',
//   lat: 52.377956,
//   lng: 4.897070,
//   zoom: 10
// };


export type Cities = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export const CITIES: Cities[] = [
  {
    title: 'Amsterdam',
    lat: 52.377956,
    lng: 4.897070,
    zoom: 10
  }, {
    title: 'Cologne',
    lat: 50.935173,
    lng: 6.953101,
    zoom: 10
  }, {
    title: 'Brussels',
    lat: 50.850346,
    lng: 4.351721,
    zoom: 10
  },
];
