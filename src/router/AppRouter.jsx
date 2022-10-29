import React from 'react'
import {Routes, Route} from "react-router-dom"
import PrivateRouter from './PrivateRouter';
import Home from "../pages/home/Home"
import Login '../pages/login/Login';




const AppRouter = () => {



  return (

   <>
   <Routes>
    {/* <Route path= "/login" element={<PrivateRouter/>} >
    <Route path="/" element={<Home/>} /> */}
    <Route path= "/login" element={<Home/>} >
    <Route path="/login" element={<Login/>} />
    <Route path="/about" element={<Abaut/>} />
    
    </Route>
   </Routes>



   </>
  )
}

export default AppRouter