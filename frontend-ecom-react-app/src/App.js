import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const product = {
    name: "samsung",
    catogery: "mobile",
    price: 1485,
    colour: "red",
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
