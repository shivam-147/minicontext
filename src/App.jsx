import UserContextProvider from "./contexts/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import { ProductContextProvider, useProduct } from "./contexts/Products"
import First from "./components/First"
import { useState } from "react"


function App() {

  const [items, setItems] = useState([]);

  const addItems = (item) => {
    setItems([...items, item])
  }

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>

      <ProductContextProvider value={{ items, addItems }} >
        <First />
      </ProductContextProvider>
    </>
  )
}

export default App
