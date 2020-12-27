import React from 'react'
import { useDispatch } from 'react-redux'

import { login } from './store/actions/auth'

import './App.scss'

function App() {
  const dispatch = useDispatch()

  const signIn = () => {
    dispatch(login('email', 'password'))
  }

  return (
    <div className="App">
      App
      <button type="button" onClick={signIn}>
        Login
      </button>
    </div>
  )
}

export default App
