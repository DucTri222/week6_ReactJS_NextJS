import React from 'react'
import { useRecoilState } from 'recoil'
import { counterState } from '../atoms/counterState'

const Control = () => {
    const [count, setCount] = useRecoilState(counterState)
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default Control
