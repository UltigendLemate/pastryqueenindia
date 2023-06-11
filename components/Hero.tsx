import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' w-[100vw] md:w-[98.5vw]   relative mt-28  bg-white min-h-[40vh] md:min-h-[90vh] text-primary mainbg grid  justify-center items-center'>
      {/* <Image src={'/bg_main.png'} fill={true}/> */}
      <div className='absolute w-full h-full bg-black/60 z-0'></div>
      <div className='z-10'>
        {/* <h3 className='text-white text-lg text-center font-bold uppercase'>Hammer Foods Presents</h3> */}
        <h1 className='special-font text-[3.4rem] text-center sm:text-7xl md:text-8xl lg:text-9xl bg-white bg-clip-text text-primary'>PASTRY EVENT</h1>

        <span className='text-white text-[1.1rem] text-center sm:text-3xl lg:text-5xl font-bold uppercase'>
          {/* Junior Pastry Indian Cup 2023// */}
          <Typewriter
            options={{
              strings: [' Junior Pastry Indian Cup 2023'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default Hero