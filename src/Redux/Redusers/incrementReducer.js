const initialState = {
  count: 0
}
const incrementReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return state.count +1
  }
  return state
}

export default incrementReducer
