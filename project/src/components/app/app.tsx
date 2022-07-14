import MainScreen from '../../pages/main-screen/main-screen';
// import LoginSreen from '../../pages/login-screen/login-screen';

type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return <MainScreen offersCount={offersCount} />;

export default App;
