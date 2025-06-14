import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (payload) => {
  console.warn("action is called", payload);
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  console.warn("action is removeFromCart", payload);
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const emptyCart = (payload) => {
  console.warn("action is emptyCart", payload);
  return {
    type: EMPTY_CART,
    payload,
  };
};
