import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Vendor from '../pages/Vendor'
import VendorSignup from '../pages/VendorSignup'

const Index = () => {
  return (
    <Router basename='/'>
        <Navbar />
        
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/sign-up' element={ <Signup /> } />
            <Route path='/sign-in' element={ <Signin /> } />
            <Route path='/vendor-signup' element={ <VendorSignup /> } />
            <Route path='/vendor' element={ <Vendor /> } />
        </Routes>

        <Footer />
    </Router>
  )
}

export default Index