import { useEffect, useState } from "react";
import "./style.css";

const items = [
  {
    id: 1,
    name: "apple",
    price: 0.39,
  },
  {
    id: 2,
    name: "banana",
    price: 0.79,
  },
  {
    id: 3,
    name: "cherry tomatoes",
    price: 3.99,
  },
];

function ShoppingCart() {
  const [itemsList, setItemsList] = useState(items);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add to cart the individual items
  const addToCart = (item) => {
    setShoppingCart((prevCart) => {
      return [
        ...prevCart,
        {
          id: Date.now(),
          name: item.name,
          quantity: 1,
          price: item.price,
        },
      ];
    });
  };

  const incrementItem = (id) => {
    const updatedItem = shoppingCart.map((cart) => {
      if (cart.id === id) {
        return {
          ...cart,
          quantity: cart.quantity + 1,
        };
      } else {
        return cart;
      }
    });

    setShoppingCart(updatedItem);
    console.log("updatedItem", updatedItem);
  };

  const decrementItem = (id) => {
    let updatedItem = shoppingCart.map((cart) => {
      if (cart.id === id) {
        return {
          ...cart,
          quantity: cart.quantity - 1,
          // price: cart.price * cart.quantity,
        };
      } else {
        return cart;
      }
    });

    // remove the item which has 0 quantity
    updatedItem = updatedItem.filter((item) => item.quantity > 0);

    setShoppingCart(updatedItem);
  };

  const totalCartAmount = () => {
    const total = shoppingCart.reduce(
      (prevValue, currValue) =>
        prevValue + currValue.price * currValue.quantity,
      0
    );
    setTotal(total);
  };

  useEffect(() => {
    totalCartAmount();
  });

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        <div className="items">
          <h2>Items</h2>
          {itemsList.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h2>Cart</h2>
          {/* <h3>{JSON.stringify(shoppingCart)}</h3> */}
          {shoppingCart.length > 0 ? (
            shoppingCart.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>
                  <button onClick={() => decrementItem(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => incrementItem(item.id)}>+</button>
                </p>
                <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>Add an item to your cart</p>
          )}
        </div>
      </div>
      <div className="total">
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default ShoppingCart;
