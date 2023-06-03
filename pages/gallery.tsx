import React from 'react'
import Layout from '@/components/Layout'
import Gallery from '@/components/Gallery.jsx'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import Gallery from '@/components/Gallery.jsx'

type Props = {}

const gallery = (props: Props) => {
  return (
    <>    
    <Navbar/>
        {/* <h1 className='special text-[3.7rem] bg-white text-center sm:text-7xl md:text-8xl text-primary'>Gallery</h1> */}
  
        <Gallery/>
       


    <Footer/>
    </>

  )
}

export default gallery