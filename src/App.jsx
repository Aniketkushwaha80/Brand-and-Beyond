import { useState } from 'react'
import logo from './logo.svg'


import Register from './components/Register/Register'
import Login from './components/Login/Login'

import Product from './components/Product/Product'
import Home from './components/Home/Home'

import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar'
import Admin from './components/Admin/Admin'
import Userdetail from './components/user_detail/User_detail'









function App() {
  // const [state, setState] = useState(false)

  return (
    <div className="App">
 
<Navbar/>

        <Routes>
     
        <Route exact path="/" element={<Home/>}/>
      

        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/product" element={<Product />}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/user/:id" element={<Userdetail/>}/>


       
          
      

        </Routes>
    
      
    
   
    
     
    </div>
  )
}

export default App
