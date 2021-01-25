import React, { setGlobal, addReducer, useGlobal, useDispatch } from 'reactn'

setGlobal({
  counter: 0
})

addReducer('increment', (global, dispatch, amount) => ({
  counter: global.counter + amount
}))

const ReactNSample = () => {
  const [counter] = useGlobal('counter')
  const increment = useDispatch('increment')

  return (
    <div>
      Count: {counter}
      <button onClick={() => increment(1)}>Add</button>
    </div>
  )
}

export default ReactNSample
