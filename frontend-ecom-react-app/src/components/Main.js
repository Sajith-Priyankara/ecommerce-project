import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "samsung",
    catogery: "mobile",
    price: 1485,
    colour: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove To Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    </div>
  );
}

export default Main;
