import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterState } from '../atoms/counterState'

const Display = () => {
    const count = useRecoilValue(counterState)
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default Display
