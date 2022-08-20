export type AuthData = {
  email: string;
  password: string;
};

export type CommentType = {
  comment: string
  rating: number | null
}

export type NewCommentData = {
  id: any,
  review: CommentType,
};
