import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About.jsx'
import Contact from '@/components/Contact.jsx'
import Sponsors from '@/components/Sponsors'
import Organizers from '@/components/Organizers'
import Participants from '@/components/Participants'
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>

      {/* hero section + about | organizers | sponsors | Rules & Guidelines| Gallery | Participants | Contact | Register Now */}

      {/* className = text-primary or bg-primary will work. this is primary pink */}
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
      // style={{ position: "relative" }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-120%" }}
          transition={{ duration: 1 }}
          className="w-screen h-screen bg-pink-400 absolute top-0 left-0 z-50"
        ></motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-120%" }}
          transition={{ duration: 1.5 }}
          className="w-screen h-screen bg-pink-500 absolute top-0 left-0 z-40"
        ></motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-120%" }}
          transition={{ duration: 2 }}
          className="w-screen h-screen bg-pink-600 absolute top-0 left-0 z-30"
        ></motion.div>
        <Hero />
        <About />
        <Organizers />
        <Sponsors />
        <Participants />
        <Contact />
      </motion.div>
    </Layout>
  )
}
