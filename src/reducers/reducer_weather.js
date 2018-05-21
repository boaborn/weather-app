import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    // two lines does same behavior
    // case FETCH_WEATHER: return state.concat([action.payload.data])
    case FETCH_WEATHER: return [action.payload.data, ...state]
  }
  return state
}
