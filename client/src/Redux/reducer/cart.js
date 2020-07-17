import {
  cart
} from '../constants';

const INITIAL_STATE = {
  cartItems: [],
  loading: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case cart.addItemInCart:
      return {
        ...state,
        cartItems: updateCartItem(payload, state.cartItems)
      };
    case cart.removeItemFromCart:
      return {
        ...state,
        cartItems: removeCartItem(payload, state.cartItems)
      };
    default:
      return state;
  }
};

const updateCartItem = (payload, cartItems) => {
  const items = cartItems;

  if (items.length === 0) {
    items.push(payload);
  } else {
    const itemFound = items.find(el => el._id === payload._id);
    if(!itemFound){
      items.push(payload);
      return items;
    }
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i]._id === payload._id) {
      items[i] = payload;
    }
  }
  return items;
}

const removeCartItem = (payload, cartItems) => {
  const items = cartItems;
  for (let i = 0; i < items.length; i++) {
    if (items[i]._id === payload._id) {
      items.splice(i, 1);
    }
  }
  return items;
}

export default cartReducer;