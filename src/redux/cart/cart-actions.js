import { CartActionsConstant } from './cart-constants';

export const toggelCartHidden  = () => ({
 type: CartActionsConstant.TOGGEL_CART_HIDDEN
}); 

export const addItem = (item) => ({
  type: CartActionsConstant.ADD_ITEM,
  payload: item
});