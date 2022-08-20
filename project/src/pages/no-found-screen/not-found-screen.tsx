// import Logo from '../../components/logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <div>
      {/* <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header> */}
      <section>
        <div className="container">
          <h1 style={{ fontSize: '40px' }}>404. Page not found</h1>
        </div>
      </section>
    </div>
  );
}

export default NotFoundScreen;
