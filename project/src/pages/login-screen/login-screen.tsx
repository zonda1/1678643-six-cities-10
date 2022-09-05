
import Logo from '../../components/logo/logo';
import { useAppDispatch } from '../../types/state';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import { useForm } from 'react-hook-form';


function LoginScreen() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<AuthData>();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmitEvent = (data: AuthData) => {
    if (data.email !== null && data.password !== null) {
      onSubmit({
        email: data.email,
        password: data.password,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit(handleSubmitEvent)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" placeholder="Email" {...register('email', { required: { value: true, message: 'This field is required' }, pattern: { value: /\w+@\w+\.\w+/, message: 'Invalid email' } })} />
                {errors.email?.message}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" placeholder="Password" {...register('password', { required: { value: true, message: 'This field is required' }, pattern: { value: /[A-Za-z]+[0-9]+/, message: 'At least 1 letter and 1 number required' } })} />
                {errors.password?.message}
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
