
import React, { useState, ChangeEvent } from 'react';

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: [false, false, false, false, false],
    review: ''
  });

  const checkedMark = formData.rating;
  const length = checkedMark.length;
  // const initialState = checkedMark;

  // const markInputHandler = (evt: any) => {
  //   const { name, checked } = evt.target;
  //   setFormData({ ...formData, rating: { ...formData, [name]: checked } });
  // };

  const commentInputHandler = (evt: any) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {checkedMark.map((mark, id) => {
          const keyValue = id;

          return (
            <React.StrictMode key={keyValue}>
              <input className="form__rating-input visually-hidden" name="rating" value={`${length - id}`} id={`${length - id}-stars`} type="radio" checked={mark} onChange={
                ({ target }: ChangeEvent<HTMLInputElement>) => {
                  const value = target.checked;
                  setFormData({ ...formData, rating: [...checkedMark.slice(0, id), value, ...checkedMark.slice(id + 1)] });
                }
              }
              />
              <label htmlFor={`${length - id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.StrictMode>
          );
        })}

        {/* <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={checkedMark[1]} onChange={markInputHandler} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label> */}

        {/* <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label> */}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} onChange={commentInputHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
