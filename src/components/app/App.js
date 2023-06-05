import { useSelector } from 'react-redux'

import Loader from '../../lib/loader/loader'
import Filters from '../filters/filters'
import Sort from '../sort/sort'
import Error from '../../lib/error/error'
import TicketsList from '../ticketsList/tiketsList'
import logo from '../../assets/images/Logo.png'

import classes from './App.module.scss'

function App() {
  const flag = useSelector((state) => state.ticketsReducer.flag)

  return (
    <div className={classes.app}>
      {flag === 'search' ? <Loader /> : <img className={classes.logo} src={logo} alt="logo" />}
      <div className={classes.main}>
        <Filters />
        <div>
          <Sort />
          {flag === 'error' ? <Error /> : <TicketsList />}
        </div>
      </div>
    </div>
  )
}

export default App
