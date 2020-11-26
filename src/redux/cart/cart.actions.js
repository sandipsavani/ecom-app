import { CartActionsConstant } from './cart.type';

export const toggelCartHidden  = () => ({
 type: CartActionsConstant.TOGGEL_CART_HIDDEN
}); 

export const addItem = (item) => ({
  type: CartActionsConstant.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: CartActionsConstant.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = (item) => ({
  type: CartActionsConstant.CLEAR_ITEM_FROM_CART,
  payload: item
});
