export const addToCart = (payload) => {
  console.warn("action is called", payload);
  return {
    type: "ADD_TO_CART",
    payload,
  };
};
