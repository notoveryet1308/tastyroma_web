import {
  cart
} from '../constants';

export const addItemInCart = (data) => ({
  type: cart.addItemInCart,
  payload: data
});

export const removeItemFromCart = (id)=>({
  type: cart.removeItemFromCart,
  payload: id
});

export const loadCartItems = ()=>({
  type: cart.loadingCartItems
})