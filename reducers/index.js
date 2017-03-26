const initialState = {
    items: []
};

export default(state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case 'ADD_SHIRT':
      newState.cart.items.push({
        price:action.price,
        color:action.color,
        title:action.title
      })

      return newState;

    case 'DELETE_SHIRT':

      let items = newState.cart.items.filter(shirt=>{
        delete action.type
        return !_.isEqual(action,shirt)
      });

      newState.cart.items = items
 
      return newState

    default:
      return state
  }
}
