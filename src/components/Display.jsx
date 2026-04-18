import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterState } from '../atoms/counterState'
import { themeState } from '../atoms/themeState'

const Display = () => {
    const count = useRecoilValue(counterState)
    const theme = useRecoilValue(themeState)
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Theme: {theme}</h1>
    </div>
  )
}

export default Display
