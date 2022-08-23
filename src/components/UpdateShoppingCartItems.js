import { useState } from 'react'

/**
 * Source: https://beta.reactjs.org/learn/updating-arrays-in-state
 */

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2
  }
]

export default function UpdateShoppingCartItems () {
  const [products, setProducts] = useState(initialProducts)

  function handleIncrease (productId) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        }
      } else {
        return product
      }
    })
    setProducts(newProducts)
  }

  function handleDecrease (productId) {
    const newProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        }
      } else {
        return product
      }
    })
    setProducts(newProducts)
  }

  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.count === 0 ? 'red' : 'green'
      }}
    >
      {product.name} (<b>{product.count}</b>)
      <button
        onClick={() => {
          handleIncrease(product.id)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleDecrease(product.id)
        }}
        disabled={product.count === 0}
      >
        -
      </button>
    </li>
  ))

  return (
    <>
      {JSON.stringify(products)}
      <ul>{listItems}</ul>
    </>
  )
}
