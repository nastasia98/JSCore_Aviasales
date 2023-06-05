import { useDispatch, useSelector } from 'react-redux'

import { changeSortTag } from '../../redux/sort-reducer'

import classes from './sort.module.scss'

function Sort() {
  const dispatch = useDispatch()
  const sortTag = useSelector((state) => state.sortReducer.sortTag)

  const onSortTagChange = (event) => dispatch(changeSortTag(event.target.value))

  return (
    <div className={classes.sort} onChange={onSortTagChange}>
      <label className={sortTag === 'cheapest' ? classes.checked : null}>
        <input type="radio" value="cheapest" name="tickets" />
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>
      <label className={sortTag === 'fastest' ? classes.checked : null}>
        <input type="radio" value="fastest" name="tickets" />
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
      <label className={sortTag === 'optimal' ? classes.checked : null}>
        <input type="radio" value="optimal" name="tickets" />
        <span>ОПТИМАЛЬНЫЙ</span>
      </label>
    </div>
  )
}

export default Sort
