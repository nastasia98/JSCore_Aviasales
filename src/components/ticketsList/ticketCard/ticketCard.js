import PropTypes from 'prop-types'

import classes from './ticketCard.module.scss'
import TicketSegment from './segment/ticketSegment'

function TicketCard({ price, segments, carrier }) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const segment = segments.map((seg) => {
    const key = `${seg.date}${seg.duration}${seg.stops}`
    return (
      <TicketSegment
        key={key}
        origin={seg.origin}
        date={seg.date}
        destination={seg.destination}
        stops={seg.stops}
        duration={seg.duration}
      />
    )
  })

  return (
    <div className={classes.ticketCard}>
      <div className={classes.header}>
        <span>{numberWithSpaces(price)} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      {segment}
    </div>
  )
}

TicketCard.propTypes = {
  price: PropTypes.number,
  segments: PropTypes.arrayOf(PropTypes.object),
  carrier: PropTypes.string,
}

export default TicketCard
