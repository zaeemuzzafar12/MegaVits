import { toast  } from 'react-toastify';
const intialstate = {
    cart : []
}

export const CartReducers = ( state = intialstate ,action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            toast.success("Item Added Successfully");
         return   {
                ...state,
               cart:[ ...state.cart  , action.payload ] 
            }

        case "REMOVE_FROM_CART":
            const currentitems = state.cart.slice(0);
            const itemtodeletebyid = action.payload;
            const remainitems = currentitems.filter((i) => i?.id !== itemtodeletebyid)
            toast.error("Item Deleted Successfully");
            return{
                ...state,
                cart: remainitems
            }
    
        default:  return state;
            
    }
}