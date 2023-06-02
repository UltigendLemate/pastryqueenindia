import React from 'react'
import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' w-[98vw] relative  bg-white min-h-[40vh] md:min-h-[80vh] text-primary mainbg grid  justify-center items-center'>
      {/* <Image src={'/bg_main.png'} fill={true}/> */}
      <div className='absolute w-full h-full bg-black/60 z-0'></div>
      <div className='z-20'>
      {/* <h3 className='text-white text-lg text-center font-bold uppercase'>Hammer Foods Presents</h3> */}
      <h1 className='special-font text-[3.7rem] text-center sm:text-7xl md:text-8xl lg:text-9xl bg-white bg-clip-text text-primary'>PASTRY EVENT</h1>
      <h2 className='text-white text-[1.4rem] text-center sm:text-3xl lg:text-5xl font-bold uppercase'>Junior Pastry Indian Cup 2023</h2>
      </div>
    </div>
  )
}

export default Hero