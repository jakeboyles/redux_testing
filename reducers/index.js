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
          title:action.title
        })
      }
    case 'DELETE_SHIRT':

      let newItems = state.items.filter(shirt=>{
        delete action.type
        return !_.isEqual(action,shirt)
      });

      return {
        ...state,
        items:newItems
      }
    default:
      return state
  }
}
