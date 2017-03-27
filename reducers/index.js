const initialState = {
    items: []
};

export default(state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SHIRT':
      return {
        ...state,
        items: state.items.concat({
          price:action.price,
          color:action.color,
          title:action.title,
          id:action.id,
        })
      }
    case 'DELETE_SHIRT':
      return {
        ...state,
        items:state.items.filter(shirt=> !_.isEqual(action.id,shirt.id)),
      }
    default:
      return state
  }
}
