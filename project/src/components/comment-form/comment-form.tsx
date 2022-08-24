
import React, { useState, ChangeEvent, FormEvent } from 'react';

export type CommentFormProps = {
  onUserCommentHandler: (comment: string, rating: number | null) => void;
};


function CommentForm({ onUserCommentHandler }: CommentFormProps): JSX.Element {
  const [formData, setFormData] = useState<{ review: string, rating: number | null }>({
    review: '',
    rating: null,
  });

  const commentInputHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onUserCommentHandler(formData.review, formData.rating);
      setFormData({
        review: '',
        rating: null,
      });
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from({ length: 5 }, (v, id) => {
          const keyValue = id;
          return (
            <React.Fragment key={keyValue}>
              <input className="form__rating-input visually-hidden" name="rating" value={5 - id} id={`${5 - id}-stars`} type="radio" checked={false} onChange={
                ({ target }: ChangeEvent<HTMLInputElement>) => {
                  const { checked, value } = target;
                  if (checked) {
                    setFormData({ ...formData, rating: Number(value) });
                  }
                }
              }
              />
              <label htmlFor={`${5 - id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>);
        }
        )};
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} onChange={commentInputHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={formData.review === '' || formData.rating === null}>Submit</button>
      </div>
    </form >
  );
}

export default CommentForm;
