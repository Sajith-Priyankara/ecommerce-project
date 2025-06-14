import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (payload = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART is called", action);
      return [action.payload, ...payload];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART is called", action);
      payload.length = payload.length ? payload.length - 1 : [];
      return [...payload];
    case EMPTY_CART:
      console.warn("EMPTY_CART is called", action);
      payload = [];
      return [...payload];
    default:
      return [];
  }
};
