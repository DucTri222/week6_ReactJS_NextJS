import './App.css'
import Display from './components/Display'
import Control from './components/Control'
import React from 'react'
import { useRecoilState } from 'recoil'
import { themeState } from './atoms/themeState'
function App() {
  const [theme, setTheme] = useRecoilState(themeState)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <>
      <Display/>
      <Control/>

      <h1>Theme this moment: {theme}</h1>
      <button onClick={toggleTheme}></button>
    </>
  )
}

export default App
