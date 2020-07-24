import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../store/shopping cart/selector";
import {
  addItemToCart,
  finalizeOrders,
  removeAllFromCart,
} from "../store/shopping cart/actions";
import { Link } from "react-router-dom";
import { selectAuth } from "../store/auth/selectors";

export default function ShoppingCartPage() {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <div>
      This is your shopping cart!
      <table>
        <tbody>
          {items.map((i, id) => {
            return (
              <tr key={id + 1}>
                <th>{i.name}</th>
                <th>{i.price}</th>
                <th>
                  <button
                    onClick={() => {
                      dispatch(addItemToCart(i));
                    }}
                  >
                    +
                  </button>
                </th>
              </tr>
            );
          })}
          <tr>
            <th>{`In total that will be: ${totalPrice}$`}</th>
          </tr>
        </tbody>
      </table>
      {!items.length ? (
        <p>Your shopping cart is empty! </p>
      ) : (
        <Link to={"/cart/success"}>
          <button
            onClick={() => {
              dispatch(finalizeOrders(items, auth.user.id));
              dispatch(removeAllFromCart());
            }}
          >
            Purchase Products
          </button>
        </Link>
      )}
    </div>
  );
}
