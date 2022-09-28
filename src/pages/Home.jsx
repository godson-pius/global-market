import React from 'react'
import AllCat from '../components/AllCat'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Newsletter from '../components/Newsletter'
import Recommended from '../components/Recommended'
import TopSelling from '../components/TopSelling'

const Home = () => {
  return (
    <>
        <div className='w-full'>
            <Info />
            <Hero />
            <TopSelling />
            <Recommended />
            <AllCat /> 
            <Newsletter />
        </div>
    </>
  )
}

export default Home