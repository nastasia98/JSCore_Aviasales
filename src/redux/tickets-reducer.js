import { getId, getTickets } from '../API/api'

const initialState = {
  tickets: [],
  amount: 5,
  flag: 'search', // "error", 'stop'
}

const GET_TICKETS = 'GET_TICKETS'
const INC_VISIBLE_TICKETS_AMOUNT = 'INC_VISIBLE_TICKETS_AMOUNT'
const TOGGLE_FLAG = 'TOGGLE_FLAG'

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }
    case INC_VISIBLE_TICKETS_AMOUNT:
      return {
        ...state,
        amount: state.amount + 5,
      }
    case TOGGLE_FLAG:
      return {
        ...state,
        flag: action.flag,
      }
    default:
      return state
  }
}

export const loadPackOfTickets = (payload) => ({ type: GET_TICKETS, payload })
export const showMoreTickets = () => ({ type: INC_VISIBLE_TICKETS_AMOUNT })
export const toggleFlag = (flag) => ({ type: TOGGLE_FLAG, flag })

export const loadAllTickets = async (dispatch) => {
  try {
    const searchId = await getId()
    let flag = false
    if (searchId) {
      while (!flag) {
        const res = await getTickets(searchId)
        if (res.tickets && res.tickets.length) {
          dispatch(loadPackOfTickets(res.tickets))
          flag = res.stop
        } else if (res.stop === true) {
          flag = true
          dispatch(toggleFlag('stop'))
        }
      }
    }
  } catch (e) {
    dispatch(toggleFlag('error'))
  }
}

export default ticketsReducer
