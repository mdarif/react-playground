import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function UpdateShoppingCartItem() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
  }

  function handleDecreaseClick(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  }

  return (
    <>
      <h1>Update Shopping Cart Items</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>) {""}
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
