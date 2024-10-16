import UserContextProvider from "./contexts/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import { ProductContextProvider, useProduct } from "./contexts/Products"
import First from "./components/First"
import { useState } from "react"


function App() {

  const { name, email } = useProduct();

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <ProductContextProvider value={{ name, email }} >
        <First />
      </ProductContextProvider>
    </>
  )
}

export default App
