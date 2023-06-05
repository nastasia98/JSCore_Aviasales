const initialState = {
  sortTag: 'cheapest',
}

const CHANGE_SORT_TAG = 'CHANGE_SORT_TAG'

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_TAG:
      return {
        ...state,
        sortTag: action.name,
      }
    default:
      return state
  }
}

export const changeSortTag = (name) => ({ type: CHANGE_SORT_TAG, name })

export default sortReducer
