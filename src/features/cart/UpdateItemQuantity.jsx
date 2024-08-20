import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuntityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const currentQuntity = useSelector(getCurrentQuntityById(pizzaId));

  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-md font-medium">{currentQuntity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
