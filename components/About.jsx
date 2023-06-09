import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section ref={ref} className='bg-white text-black flex items-center flex-col max-w-screen-xl mx-auto px-5 mb-10'>
      <h1 className='font-ProzaLibre text-5xl md:text-7xl text-primary mb-4 text-center special-font'>ABOUT US</h1>
      <motion.p
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4}}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }} className='text-md'>The objective the Junior Pastry Indian cup is to set up a training ground for large international events,
        while making it entertaining and showcasing the talents and future of younger generation pastry-chefs.
        By spotlighting them, we hope to engender a sense of belonging and valuable feelings of goodwill,
        quality, passion, creativity, collaboration and respect for colleagues.

        All are part of the ethics underpinning the sector, giving it solid roots and a constructive vision for the
        future. It will be an opportunity to share experiences and a platform for growth for young people who
        represent the future of the international pastry-making sector.

        It is the Pastry event with a vital role to play in achieving a career at the highest of technical standards.

        <Link href="/RegisterNow" className="lg:text-base text-base  lg:mb-0  rounded-lg text-primary p-2 md:m-3 lg:px-1 font-semibold hover:cursor-pointer decoration-primary underline-offset-8 underline lg:hover:text-black transition-all duration-400 block md:inline">
          Know More!
        </Link>
      </motion.p>



      <div className='grid md:grid-cols-2 gap-10 py-10'>
        <motion.img ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }} src="/pics/IMG_4232.webp" alt="" className='rounded-md' />

        <motion.img ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.1 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }} src="/pics/IMG_4439.webp" alt="" className='rounded-md hidden md:block' />

      </div>



    </section >
  )
}
