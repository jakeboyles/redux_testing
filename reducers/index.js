export default(state = {}, action) => {
  switch (action.type) {
    case 'ADD_SHIRT':

      var newState = Object.assign({}, state);
 
      newState.cart.items.push({
        price:action.price,
        color:action.color,
        title:action.title,
      });
 
      return newState;
    default:
      return state
  }
}