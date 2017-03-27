export const deleteShirt = (shirt) =>({
	type: 'DELETE_SHIRT',
	...shirt
})

export const addShirtNew = (shirt) =>({
	type: 'ADD_SHIRT',
	...shirt
})