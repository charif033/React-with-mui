import { Route, Routes } from 'react-router'
import './Css/App.css'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CheckoutPage from './Pages/CheckoutPage'
import NotfoundPage from './Pages/NotfoundPage'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/home" Component={HomePage}></Route>
        <Route path="/products" Component={HomePage}></Route>
        <Route path="/product/:id" Component={ProductPage}></Route>
        <Route path="/checkout" Component={CheckoutPage}></Route>
        <Route path="*" Component={NotfoundPage}></Route>
      </Routes>
    </>
  )
}

export default App
