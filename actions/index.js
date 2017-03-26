export const deleteShirt = (shirt) =>({
	type: 'DELETE_SHIRT',
	...shirt
})

export const addShirt = (shirt) =>({
	type: 'ADD_SHIRT',
	...shirt
})