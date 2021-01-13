import React from 'react'
import './App.scss'
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import MenuBar from './components/Navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      {/* <MenuBar /> */}
    </div>
  )
}

export default App
