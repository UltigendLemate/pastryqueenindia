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
     
        <Gallery/>
       


    <Footer/>
    </>

  )
}

export default gallery