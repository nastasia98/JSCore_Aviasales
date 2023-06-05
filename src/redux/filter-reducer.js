const initialState = {
  filters: [
    { id: 0, title: 'Без пересадок', checked: true },
    { id: 1, title: '1 пересадка', checked: true },
    { id: 2, title: '2 пересадки', checked: true },
    { id: 3, title: '3 пересадки', checked: true },
  ],
}

const CHECK_TOGGLE = 'CHECK_TOGGLE'
const All_CHECKS_TOGGLE = 'All_CHECKS_TOGGLE'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_TOGGLE:
      const checkbox = state.filters.filter((box) => box.id === action.id)
      return {
        ...state,
        filters: state.filters.map((box) =>
          box.id === action.id ? { ...box, checked: !checkbox[0].checked } : { ...box }
        ),
      }
    case All_CHECKS_TOGGLE:
      return {
        ...state,
        filters: state.filters.map((filter) => ({ ...filter, checked: action.payload })),
      }
    default:
      return state
  }
}

export const checkToggle = (id) => ({ type: CHECK_TOGGLE, id })
export const allChecksToggle = (payload) => ({ type: All_CHECKS_TOGGLE, payload })

export default filterReducer
