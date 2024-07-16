import React from 'react'
import './App.css'
import Navbar from './components.jsx/Navbar'
import Addproducts from './components.jsx/Addproducts'
import Viewproducts from './components.jsx/Viewproducts'
import { Route,Routes } from 'react-router-dom'
function App() {


  return (
    
      <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Viewproducts/>}></Route>
      <Route path='/Addproducts' element={<Addproducts/>}></Route>
      
      </Routes>
      </div>
     

  )
}

export default App
