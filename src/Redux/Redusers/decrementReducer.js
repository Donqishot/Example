const initialState = {
  count: 0
}
const decrementReducer = (state = initialState, action) => {
  if (action.type === 'DECREMENT') {
    return state.count -1
  }
  return state
}

export default decrementReducer
