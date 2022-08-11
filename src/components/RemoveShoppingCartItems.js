import { useState } from 'react'

/**
 * Challenge 2 of 4: Remove an item from the shopping cart
 *
 * This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything.
 * You need to add an event handler to it so that pressing it decreases the count of
 * the corresponding product.
 *
 * If you press ”–” when the count is 1, the product should
 * automatically get removed from the cart. Make sure it never shows 0.
 *
 * Source: https://beta.reactjs.org/learn/updating-arrays-in-state
 */

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 2
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

export default function RemoveShoppingCartItems () {
  const [products, setProducts] = useState(initialProducts)

  function handleIncreaseClick (productId) {
    setProducts(
      products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1
          }
        } else {
          return product
        }
      })
    )
  }

  function handleDecreaseClick (productId) {
    /**
     * You can first use map to produce a new array,
     * and then filter to remove products with a count set to 0:
     */
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        }
      } else {
        return product
      }
    })

    nextProducts = nextProducts.filter(p => p.count > 0)

    setProducts(nextProducts)
  }

  return (
    <>
      <h2>Remove the item if count is 0</h2>
      {JSON.stringify(products)}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>){' '}
            <button
              onClick={() => {
                handleIncreaseClick(product.id)
              }}
            >
              +
            </button>{' '}
            <button
              onClick={() => {
                handleDecreaseClick(product.id)
              }}
            >
              –
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
