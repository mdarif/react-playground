import React from 'react'

const NumberList = props => {
  const numbers = props.numbers
  const listItems = numbers.map(number => <li>{number}</li>)

  return <ul>{listItems}</ul>
}

export default NumberList
