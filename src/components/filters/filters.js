import { useDispatch, useSelector } from 'react-redux'

import { checkToggle, allChecksToggle } from '../../redux/filter-reducer'

import classes from './filters.module.scss'
import Filter from './filter/filter'

function Filters() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filterReducer.filters)

  const toggleCheck = (id) => dispatch(checkToggle(id))
  const toggleAllChecks = (check) => dispatch(allChecksToggle(check))

  const isChecked = () => {
    const arrCheck = filters.filter((item) => item.checked)
    return arrCheck.length === 4
  }

  const filterList = filters.map((item) => (
    <Filter title={item.title} key={item.id} checked={item.checked} toggleCheck={() => toggleCheck(item.id)} />
  ))

  return (
    <div className={classes.pathFilter}>
      <div>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <label>
        <input
          type="checkbox"
          checked={isChecked()}
          onChange={() => toggleAllChecks(!isChecked())}
          className={isChecked() ? classes.checked : null}
        />
        <span>Все</span>
      </label>
      {filterList}
    </div>
  )
}

export default Filters
