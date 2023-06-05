import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Empty } from 'antd'

import { loadAllTickets, showMoreTickets } from '../../redux/tickets-reducer'
import ShowButton from '../showButton/showButton'

import TicketCard from './ticketCard/ticketCard'
import classes from './ticketsList.module.scss'

function TicketsList() {
  const dispatch = useDispatch()
  const sortTag = useSelector((state) => state.sortReducer.sortTag)
  const filters = useSelector((state) => state.filterReducer.filters)
  const tickets = useSelector((state) => state.ticketsReducer.tickets)
  const amount = useSelector((state) => state.ticketsReducer.amount)

  useEffect(() => {
    dispatch(loadAllTickets)
  }, [])

  const filterTickets = () => {
    const checkedFilters = filters.filter((item) => item.checked)
    const filteredTickets = []
    for (let i = 0; i < checkedFilters.length; i++) {
      const arr = tickets.filter((ticket) => ticket.segments[0].stops.length === checkedFilters[i].id)
      filteredTickets.push(...arr)
    }
    return filteredTickets
  }

  let sortTickets
  if (sortTag === 'cheapest') {
    sortTickets = filterTickets().sort((a, b) => a.price - b.price)
  } else if (sortTag === 'fastest') {
    sortTickets = filterTickets().sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  } else if (sortTag === 'optimal') {
    sortTickets = filterTickets().sort((a, b) => {
      if (a.segments[0].duration === b.segments[0].duration) {
        return a.price - b.price
      }
      return a.segments[0].duration - b.segments[0].duration
    })
  } else {
    sortTickets = filterTickets()
  }

  const showTicketsList = (sortTickets, amount) => {
    const portion = sortTickets.slice(0, amount)
    return portion.map((item) => {
      const key = `${item.price}${item.carrier}${item.segments[0].date}${item.segments[1].date}`
      return <TicketCard key={key} price={item.price} carrier={item.carrier} segments={item.segments} />
    })
  }

  const checkedFilters = filters.filter((item) => item.checked)

  return (
    <>
      {checkedFilters.length ? (
        <>
          <div className={classes.ticketsList}>{showTicketsList(sortTickets, amount)}</div>
          {showTicketsList(sortTickets, amount).length ? (
            <ShowButton onShow={() => dispatch(showMoreTickets())} />
          ) : null}
        </>
      ) : (
        <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />
      )}
    </>
  )
}

export default TicketsList
