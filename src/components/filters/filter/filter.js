import PropTypes from 'prop-types'

import classes from '../filters.module.scss'

function Filter({ title, checked, toggleCheck }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={toggleCheck} className={checked ? classes.checked : null} />
      <span>{title}</span>
    </label>
  )
}

Filter.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  toggleCheck: PropTypes.func.isRequired,
}

export default Filter
