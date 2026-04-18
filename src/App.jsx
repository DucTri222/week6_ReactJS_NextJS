import './App.css'
import Display from './components/Display'
import Control from './components/Control'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { themeState } from './atoms/themeState'
function App() {
  const theme = useRecoilValue(themeState)
  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  
  return (
    <>
      <Display/>
      <Control/>
    </>
  )
}

export default App
