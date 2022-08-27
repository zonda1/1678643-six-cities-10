import { useAppDispatch } from '../../types/state';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated } from '../../store/data-process/data-process';

export default function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
      <li className="places__option" tabIndex={0} onClick={() => dispatch(sortFromCheapest())}>Price: low to high</li>
      <li className="places__option" tabIndex={0} onClick={() => dispatch(sortFromMostExpensive())}>Price: high to low</li>
      <li className="places__option" tabIndex={0} onClick={() => dispatch(sortFromTopRated())}>Top rated first</li>
    </ul>
  );
}
