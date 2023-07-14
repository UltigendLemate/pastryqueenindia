import React, { useState } from 'react'
import Image from 'next/image'
import data from "../Participants/participants.json"
import image1 from "../../public/images/pi/jw1.png"

import { FaTimes } from 'react-icons/fa';
type Props = {
  
}

const Index = () => {  const [showPopup, setShowPopup] = useState(false);
  
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
            <h2 className="font-ProzaLibre text-5xl md:text-7xl text-primary mt-12 mb-6 text-center special-font">Participants</h2>
            
        </div>     
        <div  className="grid md:mx-20 gap-12 md:gap-10  xl:grid-cols-9">

       
      {
      data.map((item) => (
        <div key={item.id} className={`col-span-${item.id%4? 2:3}`}>
          {

          item.id % 4 !== 0 && item.isMentor==false
           ? (
            
         
          <div  className="card  rounded-md bg-gradient-to-t from-transparent   to-rose-300  relative max-w-md flex justify-center  mx-auto w-full">
            <img alt='img' src={item.imagePath}  className='w-full p-3 h-full'/>
            <p className='absolute bottom-5 left-50  text-center p-1 bg-pink-700 rounded-md  text-white opacity-80 '>{item.name}</p>

          </div>
          

          
          ) 
          : 
          item.id % 4 !== 0 && item.isMentor==true?
          (
            <div  className="card rounded-md border-t-[3px] border-l-[3px] border-r-[3px] border-l-yellow-300 border-r-yellow-300  border-t-yellow-300 bg-gradient-to-t from-transparent   to-rose-300  relative max-w-md flex justify-center  mx-auto w-full">
            <img alt='img' src={item.imagePath}  className='w-full p-3 h-full'/>
            <p className='absolute bottom-5 left-50  text-center  p-1 bg-pink-700 rounded-md  text-white opacity-80 '>{item.name}</p>

          </div>
          )
          :
          (
          
            <div className="flex justify-center  flex-col items-center w-full h-full rounded-lg   ">
             <div className=''>
            <div className=" rounded-lg text-center xl:text-left w-full   overflow-hidden">
              <div className="text-center ">
               <img src={item.institute} className='w-full '/>
                <p className=" mt-5 text-xl text-gray-500">{item.city}</p>
                
                
              </div>
            </div>
          
          </div>
           </div>
          
          )
          }
       </div>
      ))}
    
  


        </div>
    </div>
</div>
    
  )

  }
export default Index



  //  {
  //    "id": 21,
  //    "name": "Dr. Balendra Singh",
  //    "imagePath": "/images/pi/judge1.png",
  //    "isMentor":false
  //  },
  //  {
  //    "id": 22,
  //    "name": "Chef Eureka Araujo ",
  //    "imagePath": "/images/pi/judge2.png",
  //    "isMentor":true
  //  },
  //  {
  //    "id": 23,
  //    "name": "Chef Mukesh Singh Rawat",
  //    "imagePath": "/images/pi/judge3.png",
  //    "isMentor":false
  //  },
  //  {
  //    "id": 24,
  //    "city": "",
  //    "institute": "/images/ihe.png",
  //    "normalText": "",
  //    "expandedText":"6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero qui ex aliquid exercitationem quo nostrum consequatur sit neque molestiae libero eum, beatae maiores. Dolores, officiis, cumque nemo illo inventore ex sequi labore sunt veniam, asperiores pariatur velit impedit non debitis provident. Rerum explicabo laborum reprehenderit animi, voluptate eaque iusto."
  //  }
