import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import MenuBar from './components/Navigation/Navigation'
import MenuList from './components/MenuList/MenuList'

function App() {
  return (
    <div className="App">
      <Header />
      <MenuList />
      {/* <MenuBar /> */}
    </div>
  )
}

export default App
