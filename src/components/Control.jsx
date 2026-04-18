import React from 'react'
import { useRecoilState } from 'recoil'
import { counterState } from '../atoms/counterState'
import { themeState } from '../atoms/themeState'

const Control = () => {
    const [count, setCount] = useRecoilState(counterState)
    const [theme, setTheme] = useRecoilState(themeState)
    const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div>
      <button onClick={()=> setCount(count+1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default Control
