import { format } from 'date-fns'
import PropTypes from 'prop-types'

import classes from '../ticketCard.module.scss'

function TicketSegment({ origin, date, destination, stops, duration }) {
  const departureTime = format(new Date(date), 'HH:mm')
  const pathTime = new Date(date).getTime() + duration * 60000
  const arrivalTime = format(new Date(pathTime), 'HH:mm')

  const hours = Math.floor(duration / 60)
    .toString()
    .padStart(2, '0')
  const minutes = (duration % 60).toString().padStart(2, '0')

  let comment
  if (stops.length > 1) {
    comment = `${stops.length} ПЕРЕСАДКИ`
  } else if (stops.length === 1) {
    comment = '1 ПЕРЕСАДКА'
  } else {
    comment = 'БЕЗ ПЕРЕСАДОК'
  }

  return (
    <ul className={classes.path}>
      <li>
        <div className={classes.title}>
          {origin} - {destination}
        </div>
        <div className={classes.details}>
          {departureTime} – {arrivalTime}
        </div>
      </li>
      <li>
        <div className={classes.title}>В ПУТИ</div>
        <div className={classes.details}>
          {hours}ч {minutes}м
        </div>
      </li>
      <li>
        <div className={classes.title}>{comment}</div>
        <div className={classes.details}>{stops.join(', ')}</div>
      </li>
    </ul>
  )
}

TicketSegment.propTypes = {
  origin: PropTypes.string,
  date: PropTypes.string,
  destination: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.object),
  duration: PropTypes.number,
}

export default TicketSegment
