import React from 'react'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import { CartContext } from './components/context/CartContext'
import Carrito from './components/Carrito'

function App() {
  return (
    <CartContext.Provider>
    <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/productos' element={<ItemListContainer/>}/>
      <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App