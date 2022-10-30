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

  function handleIncreaseClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <>
      <h1>Update Shopping Cart Item</h1>
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
          </li>
        ))}
      </ul>
    </>
  );
}
