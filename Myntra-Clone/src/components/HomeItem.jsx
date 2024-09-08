import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(bagActions.addToBag(item.id));
  }

  return (
    <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button type="button" className="btn btn-primary btn-sm" onClick={handleOnClick} style={{width: "100%", marginTop: "5px"}}>Add To Cart</button>
    </div>
    </>
  )
};

export default HomeItem;