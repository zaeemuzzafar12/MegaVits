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
            const newCart = state.cart.filter((item) => item._id !== action.payload);
            return {
                ...state,
                cart: newCart,
            };

            case "RMV_ONE":
                const IteamIndex_dec = state.cart.findIndex((iteam)=> iteam.id === action.payload.id);
       
                if(state.cart[IteamIndex_dec].qnty >= 1){
                    const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                    console.log([...state.cart,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.cart]
                    }
                }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                    const data = state.cart.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }
    
    
        default:  return state;
            
    }
}