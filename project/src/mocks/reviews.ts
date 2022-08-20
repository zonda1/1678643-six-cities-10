export type User = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}

export type Comments = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User
}

// export const reviews: Reviews[] = [{
//   author: 'Grigory',
//   grade: '80%',
//   feedback: 'Great location, the views of South Bank at night were beautiful. everyone who worked at the hotel went out of there way to ensure we had a great stay, especially Padraic who made our stay very memorable.'
// }, {
//   author: 'Max',
//   grade: '100%',
//   feedback: 'Our room was very nice. We had a great stay at Sea Containers. The Staff were very helpful and accommodating. Room service was quick and the 12th Knot Bar was lovely.',
// }, {
//   author: 'Alex',
//   grade: '30%',
//   feedback: 'Difference between what I was expecting due to conversations pre arrival and what I experienced where too far apart.',
// }, {
//   author: 'Smith',
//   grade: '80%',
//   feedback: 'Beautiful modern hotel right on the Southbank. Very friendly helpful staff, easy check in and out. Spacious comfortable rooms.',
// },
// ];
