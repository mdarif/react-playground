import React from 'react'

const Greeting = React.memo(props => {
  console.log('Greeting Comp render')
  return <h1>Hi {props.name}!!!</h1>
})

export default Greeting
