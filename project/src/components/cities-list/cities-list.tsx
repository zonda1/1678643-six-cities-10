import { Cities } from '../../mocks/city';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { changeCity } from '../../store/action';

type CitiesListProps = {
  cities: Cities[]
}


export default function CitiesList({ cities }: CitiesListProps) {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        const keyValue = `city-${index}`;
        const value = city.title;
        return (
          <li key={keyValue} className="locations__item">
            <a className={`${city === currentCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}`} href="#" onClick={() =>
              dispatch(changeCity({ city }))}
            >
              <span>{value}</span>
            </a>
          </li>
        );
      })}
    </ul >
  );
}
