import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [ref2, inView2] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);
  return (
    <section ref={ref} id='About' className='bg-white font-mon text-black flex items-center flex-col max-w-screen-xl mx-auto px-5 '>
      <h1 className='font-ProzaLibre text-5xl md:text-7xl text-primary mt-5 mb-6 text-center special-font'>ABOUT US</h1>
      <motion.p
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }} className='text-md'>The objective the Pastry Queen India is to set up a training ground for large
        international events, while making it entertaining and showcasing the talents and
        future of younger generation pastry-chefs. By spotlighting them, we hope to
        engender a sense of belonging and valuable feelings of goodwill, quality,
        passion, creativity, collaboration and respect for colleagues.
        All are part of the ethics underpinning the sector, giving it solid roots and a
        constructive vision for the future. It will be an opportunity to share experiences
        and a platform for growth for young people who represent the future of the
        international pastry-making sector. It is the Pastry event with a vital role to play in achieving a career at the highest

        of technical standards.<br /><br />

        This competition is your chance to shine! Whether you excel in plated desserts or work wonders with chocolate creations, Pastry Queen India provides the perfect platform to showcase your artistry. Each team, consisting of a female pastry chef and a team manager, will be tasked with interpreting the theme of <b>&quot;revolutionary women&quot;</b> through their delectable creations.


        <Link href="/register.pdf" className="lg:text-base text-base  lg:mb-0  rounded-lg text-primary p-2 md:m-3 lg:px-1 font-semibold hover:cursor-pointer decoration-primary underline-offset-8 underline lg:hover:text-black transition-all duration-400 block md:inline">
          Know More!
        </Link>
      </motion.p>



      <motion.div className='grid md:grid-cols-2 gap-10 py-10' ref={ref2}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }}>
          <div>
          <Image ref={ref} width={600} height={600}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }} src="/images/DSC_8053.jpg" alt="" className='rounded-md max-h-96 object-cover hidden md:block' />

        </div>
        <div>
          <Image ref={ref} width={600} height={600}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }} src="/images/DSC_7840.jpg" alt="" className='rounded-md max-h-96 object-cover' /></div>

        
      </motion.div>



    </section >
  )
}
