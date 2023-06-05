import PropTypes from 'prop-types'

import classes from './showButton.module.scss'

function ShowButton({ onShow }) {
  return (
    <button className={classes.showButton} onClick={onShow} type="button">
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  )
}

ShowButton.propTypes = {
  onShow: PropTypes.func.isRequired,
}

export default ShowButton
