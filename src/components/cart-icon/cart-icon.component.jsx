import { ReactComponent as ShoppingIcon } from "../../assets/111 shopping-bag.svg";
import "./cart-icon.styles.scss";

const CardIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'></span>
    </div>
  );
};

export default CardIcon;
