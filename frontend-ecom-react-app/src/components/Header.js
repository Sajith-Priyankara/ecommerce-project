import { useSelector } from "react-redux";
import { cartData } from "../redux/reducer";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src="/img/cart.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
