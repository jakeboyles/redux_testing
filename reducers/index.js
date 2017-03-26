const initialState = {
    items: []
};

export default(state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case 'ADD_SHIRT':
      newState.items.push({
        price:action.price,
        color:action.color,
        title:action.title
      })

      return newState;

    case 'DELETE_SHIRT':

      let items = newState.items.filter(shirt=>{
        delete action.type
        return !_.isEqual(action,shirt)
      });

      newState.items = items
 
      return newState

    default:
      return state
  }
}
