import { ADD_TO_CART } from "./constant";

export const cartData = (payload = [], action) => {
  //   if (action.type === ADD_TO_CART) {
  //     console.warn("reducer is called", action);
  //     //some logic here
  //     return payload;
  //   } else {
  //     return "no Action is called";
  //   }
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer is called", action);
      return payload;
    default:
      return "no Action is called";
  }
};
