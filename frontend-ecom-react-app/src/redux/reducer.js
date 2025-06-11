import { ADD_TO_CART } from "./constant";

export const cartData = (payload = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer is called", action);
      return [action.payload, ...payload];
    default:
      return [];
  }
};
