import { useAppDispatch, useAppSelector } from '../../types/state';
import { changeCity } from '../../store/action';
import { memo } from 'react';

function CitiesList() {
  const { city: currentCity, allCities } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {allCities.map((city, index) => {
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

export default memo(CitiesList);
