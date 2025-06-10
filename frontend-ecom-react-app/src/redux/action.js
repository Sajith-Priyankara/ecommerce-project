import { ADD_TO_CART } from "./constant";

export const addToCart = (payload) => {
  console.warn("action is called", payload);
  return {
    type: ADD_TO_CART,
    payload,
  };
};
