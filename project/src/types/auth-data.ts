export type AuthData = {
  email: string;
  password: string;
};

export type CommentType = {
  comment: string
  rating: number
}

export type NewCommentData = {
  id: number,
  review: CommentType,
};
