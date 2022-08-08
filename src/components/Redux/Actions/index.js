
export const addProducts = (items) => {
    return{
        type:"ADD_TO_CART",
        payload: items
    }
}

export const deleteProducts = (id) => {
    return{
        type:"REMOVE_FROM_CART",
        payload: id
    }
}