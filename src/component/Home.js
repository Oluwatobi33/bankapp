import React from 'react'
import Background from './Background'
import Download from './Download'
import Every from './Every'
import ExistingCust from './ExistingCust'
import Footer from './Footer'
import FootPrint from './FootPrint'
import NavBar from './NavBar'
import Product from './Product'
import Shop from './Shop'

const Home = () => {
  return (
    <>
    <NavBar/> 
     <Background/>
      <Every/>
       <Shop/>
       <Download/>
       <ExistingCust/> 
       <Product/>
        <FootPrint/>
        {/* <Footer/> */}
    
    </>
  )
}

export default Home