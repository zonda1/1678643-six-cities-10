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
