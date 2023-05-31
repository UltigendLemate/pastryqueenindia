"use Client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import Image from "next/image"
import Logo from "../../public/logo.jpg"
type Props = {}

const index = (props: Props) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-20 bg-white">
        <div className="justify-between px-4 mx-auto width-screen lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={Logo} alt='' width={60} height={72} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Hamburger toggled={navbar} toggle={setNavbar} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Organizers
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Sponsors
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Participants
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center lg:border-b-0 font-semibold hover:cursor-pointer  hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>
                <li className="text-base text-black py-2 lg:px-6 text-center border-b-2 lg:border-b-0 font-semibold border-white hover:bg-pink-500 decoration-pink-500 underline-offset-8 hover:cursor-pointer lg:hover:text-white transition-all duration-400 rounded-lg mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Rules And Regulations
                  </Link>
                </li>
                <li className="text-base bg-pink-400 hover:bg-pink-500 rounded-lg text-black py-2 lg:px-6 text-center border-b-2 lg:border-b-0 font-semibold hover:cursor-pointer decoration-pink-500 underline-offset-8 lg:hover:text-white transition-all duration-400 mx-2">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Register Now!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default index 