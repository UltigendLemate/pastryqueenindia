import React, { useState } from 'react'
import Image from 'next/image'
import data from "../Participants/participants.json"
import image1 from "../../public/images/pi/jw1.png"

import { FaTimes } from 'react-icons/fa';
type Props = {
  
}

const index = () => {  const [showPopup, setShowPopup] = useState(false);
  
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

    
  return (
    
    
<div className="py-10  bg-white">  
    <div className="container m-auto  text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-[#FF0080]   font-bold md:text-4xl">Participants</h2>
            
        </div>     
        <div  className="grid gap-12  xl:grid-cols-4">

       
      {
      data.map((item) => (
        <div key={item.id}>
          {

          item.id % 4 !== 0 ? (
         
          <div  className="card rounded-md bg-gradient-to-t from-transparent   to-rose-300  relative max-w-md flex justify-center  mx-auto xl:w-80 xl:h-80 h-72 w-72">
            <img alt='img' src={item.imagePath}  className='w-full p-3 h-full'/>
            <p className='absolute bottom-5 left-5  p-1 bg-pink-700 rounded-md  text-white opacity-80 '>{item.name}</p>

          </div>
          

          
          ) : (
          
            <div className="flex flex-col items-center  bg-white rounded-lg  ">
             <div className=''>
            <div className="bg-white rounded-lg text-center xl:text-left max-w-xs m-auto  overflow-hidden">
              <div className="p-4 text-center ">
               <img src={item.institute}/>
                <p className="  text-xl text-gray-500">{item.city}</p>
                <p className="  text-gray-500">{item.normalText}</p>
                
                {/* <button
                  className="text-[#FF0080]  hidden xl:block hover:underline mt-2"
                  onClick={openPopup}
                >
                  Read More
                </button> */}
              </div>
            </div>
           {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-md w-full">
                  <div className="flex justify-end">
                    <button className="text-gray-600 hover:text-gray-800" onClick={closePopup}>
                      <FaTimes className='text-pink-500 hover:text-pink-300' />
                    </button>
                  </div>
                  <p className="text-base xl:text-sm 2xl:text-[19px]">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere placeat sequi laborum asperiores itaque explicabo, a nihil, et molestias labore dolor corrupti? Consequuntur aliquid cumque, saepe repellat odit dicta corporis ab necessitatibus itaque autem iusto, placeat corrupti sed magnam, quasi non! Reprehenderit perferendis vel voluptatum consequatur qui omnis libero.
                  </p>
                  
                </div>
              </div>
            )}
          </div>
           </div>
          
          )}
       </div>
      ))}
    
  


        </div>
    </div>
</div>
    
  )

  }
export default index

