// import { removeItem } from './cart-actions';
import { CartActionsConstant } from './cart.type';
import { addItemToCart,removeItemFromCart } from './cart.utils'
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionsConstant.TOGGEL_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionsConstant.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionsConstant.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionsConstant.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };

    default:
      return state
  }
}

export default cartReducer;