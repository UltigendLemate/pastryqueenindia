// "use Client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import Image from "next/image"
import Logo from "../../public/logo.jpg"
type Props = {}
import Data from "./Data"

const Kndex = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="justify-between px-4 mx-auto width-screen lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between py-3  lg:block">
              <Link href="/">
                <Image src={Logo} alt='' width={1080} height={1080} className='w-24 h-24' />
              </Link>
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
              <ul className="h-screen lg:h-auto items-center justify-center py-2 lg:flex lg:flex-row mt-3 lg:mt-0 align-middle">
                <div className='flex lg:flex-row flex-col align-middle justify-center'>
                  {Data.map((Part, i) => (
                    <div key={i}>
                      <li className="lg:text-base text-base mb-4 text-black lg:px-4 lg:mb-0 text-center font-semibold hover:cursor-pointer hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent">
                        <Link href="/" onClick={() => setNavbar(!navbar)}>
                          {Part}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
                <li className="lg:text-base text-base mb-4 text-black lg:px-4 lg:mb-0 text-center font-semibold hover:cursor-pointer hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent">
                        <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                          Gallery
                        </Link>
                      </li>
                <li className="lg:text-base text-base text-black mx-2 mb-2 px-2 lg:py-2 pb-2 lg:mb-0 text-center font-semibold lg:hover:bg-gray-300 hover:underline-offset-8 decoration-pink-500 underline-offset-8 hover:cursor-pointer lg:hover:text-black transition-all duration-400 rounded-lg">
                  <Link href="/JPIC Guidelines & Rules.pdf" onClick={() => setNavbar(!navbar)}>
                    Rules And Regulations
                  </Link>
                </li>
                <li className="lg:text-base text-base bg-pink-400 mb-4 lg:mb-0 hover:bg-pink-500 rounded-lg text-black py-2 lg:px-6 text-center font-semibold hover:cursor-pointer decoration-pink-500 underline-offset-8 lg:hover:text-white transition-all duration-400">
                  <Link href="/RegisterNow" onClick={() => setNavbar(!navbar)}>
                    Register Now!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div >
      </nav >
    </div >
  )
}

export default Kndex 