
import { useAppDispatch } from '../../types/state';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated, sortByPopular } from '../../store/data-process/data-process';
import { useState } from 'react';
import classnames from 'classnames';
// import { getFilteredOffers } from '../../store/data-process/selectors';

export default function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isListOpened, setIsListOpened] = useState<boolean>(false);
  const [isSortingPick, setSortingPick] = useState<string>('Popular');


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsListOpened(true)} >
        {isSortingPick}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classnames('places__options places__options--custom places__options--closed', { 'places__options--opened': isListOpened })}>
        <li className="places__option places__option--active" tabIndex={0}
          onClick={() => {
            dispatch(sortByPopular());
            setSortingPick('Popular');
            setIsListOpened(false);
          }}
        >Popular
        </li>
        <li className="places__option" tabIndex={0}
          onClick={() => {
            dispatch(sortFromCheapest());
            setSortingPick('Price: low to high');
            setIsListOpened(false);
          }}
        >Price: low to high
        </li>
        <li className="places__option" tabIndex={0} onClick={() => {
          dispatch(sortFromMostExpensive());
          setSortingPick('Price: high to low');
          setIsListOpened(false);
        }}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0} onClick={() => {
          dispatch(sortFromTopRated());
          setSortingPick('Top rated first');
          setIsListOpened(false);
        }}
        >Top rated first
        </li>
      </ul>
    </form>
  );
}
