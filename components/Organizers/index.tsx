import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image'
import image1 from "../images/sigep.webp"
import image2 from "../images/bakery review.png"
import image3 from "../images/juniores pastry wc.png"
import image4 from "../images/ihe.png"
// import image5 from "../images/food safety.png"
import { FaTimes } from 'react-icons/fa';
import Organizer from '../Organizer';
import data from '../org.json';

const Org = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [showModal2, setShowModal2] = React.useState(false);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (

    <motion.div ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 60 },
      }} className=" font-mon relative z-0" id='Organizers'  >
      <img src="/pics/IMG_3980.webp" className=' opacity-50 shadow-2xl shadow-black absolute w-full h-full -z-10' alt="" />
      <h2 className='z-20 mx-auto text-5xl md:text-7xl text-primary mb-4  mt-10 text-center special-font'>The Organizers</h2>
      <div className="sm:grid sm:grid-cols-3   mb-10 md:px-10 m-auto gap-4 md:gap-8 p-4 z-40 ">

        {
          data.map((item) => (
            <Organizer key={item.img} {...item} />
          ))
        }
        {/* <Organizer/> */}


      </div>

    </motion.div>
  )
}

export default Org
