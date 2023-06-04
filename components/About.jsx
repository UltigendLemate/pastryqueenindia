import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section className='bg-white text-black flex items-center flex-col max-w-screen-xl mx-auto px-5 mb-10'>
      <h1 className='font-ProzaLibre text-5xl md:text-7xl text-pink-600 mb-4 text-center special-font'>ABOUT US</h1>
      <p className='text-md'>The objective the Junior Pastry Indian cup is to set up a training ground for large international events,
        while making it entertaining and showcasing the talents and future of younger generation pastry-chefs.
        By spotlighting them, we hope to engender a sense of belonging and valuable feelings of goodwill,
        quality, passion, creativity, collaboration and respect for colleagues.

        All are part of the ethics underpinning the sector, giving it solid roots and a constructive vision for the
        future. It will be an opportunity to share experiences and a platform for growth for young people who
        represent the future of the international pastry-making sector.

        It is the Pastry event with a vital role to play in achieving a career at the highest of technical standards.
      </p>

      <div className='grid md:grid-cols-2 gap-10 py-10'>
        <img src="/pics/IMG_4232.webp" alt="" className='rounded-md' />
        <img src="/pics/IMG_4439.webp" alt="" className='rounded-md' />

      </div>

      <Link href="/RegisterNow" className="lg:text-base text-base bg-pink-400 my-4 lg:mb-0 hover:bg-pink-500 rounded-lg text-black p-2 lg:px-6 text-center font-semibold hover:cursor-pointer decoration-pink-500 underline-offset-8 lg:hover:text-white transition-all duration-400">
        Know More!
      </Link>

    </section >
  )
}
