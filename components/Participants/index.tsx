import React, { useState } from 'react'
import Image from 'next/image'
import data from "../Participants/participants.json"
import image1 from "../images/chef.jpg"

import { FaTimes } from 'react-icons/fa';

const Part = () => {  
  const [showPopup, setShowPopup] = useState(false);
  
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
            <h2 className="text-5xl md:text-7xl text-primary mb-4 special-font">Participants</h2>
            
        </div>


        <div  className="grid md:gap-3 grid-cols-3  xl:grid-cols-5">

       
      {
      data.map((item) => (
        <div key={item.id} className={`${item.id%4==0?"col-span-3 md:col-span-2":""}`}>
          {

          item.id % 4 !== 0 ? (
     
          <div className="card relative w-full flex justify-center  mx-auto  ">
            <Image alt='img' src={image1}  className='w-full p-1 md:p-3 h-full'/>
            <p className='absolute md:bottom-5 md:left-5  md:px-4 md:py-1 bottom-1 left-1 text-sm px-1 py-px  bg-primary bg-opacity-75 font-semibold md:rounded-xl rounded-tr-lg  text-white  '>{item.name}</p>

          </div>
          

          
          ) : (
          
            <div className="flex flex-col items-center col-span-3 bg-white rounded-lg   ">
          
            <div className="bg-white rounded-lg text-justify md:text-center xl:text-left m-auto  ">
              <div className="p-4 mb-10 md:mb-0">
                <p className="text-3xl md:text-4xl font-semibold inline text-gray-700">{item.institute}</p>
                <p className=" mt-3 text-2xl text-gray-500 inline"> | {item.city}</p>
                <p className="mt-3  text-gray-500 text-left">{item.normalText} Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, et! Lorem ipsum dolor sit amet.</p>
                
                <button
                  className="text-[#FF0080]  text-base underline-offset-4 underline md:text-lg font-semibold mt-2"
                  onClick={openPopup}
                >
                  Read More
                </button>
              </div>
            </div>
           {showPopup && (
              <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-20">
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-md w-full">
                <div className="flex justify-end">
                  <button className="text-gray-600 hover:text-gray-800" onClick={closePopup}>
                    <FaTimes className="text-primary hover:text-pink-300" />
                  </button>
                </div>
                <p className="text-base xl:text-sm 2xl:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit facere placeat sequi laborum asperiores itaque
                  explicabo, a nihil, et molestias labore dolor corrupti? Consequuntur aliquid cumque, saepe repellat odit dicta
                  corporis ab necessitatibus itaque autem iusto, placeat corrupti sed magnam, quasi non! Reprehenderit perferendis
                  vel voluptatum consequatur qui omnis libero.
                </p>
              </div>
            </div>
            
            )}
      
           </div>
          
          )}
       </div>
      ))}
    
  


        </div>
    </div>
</div>
    
  )

  }
export default Part

