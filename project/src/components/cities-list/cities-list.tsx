// import { City } from '../../mocks/city';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { changeCity } from '../../store/action';
import { CityType } from '../../mocks/offers';

type CitiesListProps = {
  cities: CityType[]
}


export default function CitiesList({ cities }: CitiesListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        const keyValue = `city-${index}`;
        return (
          <li key={keyValue} className="locations__item">
            <a className={`${city === currentCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`} href="#" onClick={() =>
              dispatch(changeCity(city))}
            >
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul >
  );
}
