import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './UserContext'
import Produto from './Produto'

function App() {

  return (
    <>
      <UserContext.Provider value={{nome:'Debora'}}>
        <Produto/>
      </UserContext.Provider>
    </>
  )
}

export default App
