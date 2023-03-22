
export const addProducts = (items) => {
    return{
        type:"ADD_TO_CART",
        payload: items
    }
}

export const deleteProducts = (_id) => {
    return{
        type:"REMOVE_FROM_CART",
        payload: _id
    }
}

export const REMOVE = (item) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}