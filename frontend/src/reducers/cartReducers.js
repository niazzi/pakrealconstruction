import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO, CART_TOTAL } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {}, total: 0 }, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.product === item.product)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }
        case CART_TOTAL:
            {   console.log("In reducer about set state", action.payload)
                return {
                    ...state,
                    total: action.payload
                }
            }

        default:
            return state
    }
}