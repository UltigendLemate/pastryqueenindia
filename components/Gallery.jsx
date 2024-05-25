import React from 'react'
import Image from 'next/image'



const Gallery = () => {
  return (
    <>
      <h1 className='special-font text-[3.7rem] pb-5 mt-24 bg-white text-center sm:text-7xl md:text-8xl text-primary'>Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 px-3 bg-white gap-3 justify-center items-center'>
        <img src="/pics/1Z0A9315.jpg" alt="" className='object-cover rounded-md col-span-2 md:row-span-2 md:object-cover md:w-full md:h-full' />
        <img src="/pics/1Z0A9357.jpg" alt="" className='object-cover rounded-md col-span-1 row-span-2 ' />
        <img src="/pics/DSC_0106.JPG" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_0193.JPG" alt="" className='object-cover rounded-md col-span-1' />


        <img src="/pics/DSC_0201.JPG" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_4396.JPG" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_4406.jpg" alt="" className='object-cover rounded-md col-span-2 md:col-span-1' />


        <img src="/pics/DSC_8053.JPG" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_4732.jpg" alt="" className='object-cover row-span-2 rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_4416.JPG" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_4417.jpg" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_4420.JPG" alt="" className='object-cover rounded-md col-span-1' />

        <img src="/pics/DSC_4429.jpg" alt="" className='object-cover rounded-md col-span-2 md:col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_4502.jpg" alt="" className='object-cover rounded-md col-span-2 md:col-span-1 md:object-cover md:h-full' />

        <img src="/pics/DSC_0086.JPG" alt="" className='object-cover rounded-md col-span-1 row-span-2 md:object-cover md:h-full' />
        <img src="/pics/DSC_4546.jpg" alt="" className='object-cover rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_4561.JPG" alt="" className='object-cover rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/DSC_4669.JPG" alt="" className='object-cover rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_4730.jpg" alt="" className='object-cover rounded-md col-span-1' />
        <img src="/pics/DSC_7840.JPG" alt="" className='object-cover rounded-md col-span-2 md:col-span-1' />
        <img src="/pics/DSC_7897.JPG" alt="" className='object-cover rounded-md col-span-2 md:col-span-1' />
        <img src="/pics/DSC_7912.JPG" alt="" className='object-cover rounded-md col-span-1' />


        <img src="/pics/DSC_0091.JPG" alt="" className='object-cover rounded-md col-span-1 row-span-2' />
        <img src="/pics/DSC_0195.JPG" alt="" className='object-cover rounded-md col-span-1 row-span-2' />
        <img src="/pics/DSC_0096.JPG" alt="" className='object-cover rounded-md col-span-1 row-span-2' />
        <div className="col-span-1 row-span-2 grid justify-between h-full gap-5 ">
        <img src="/pics/DSC_8047.jpg" alt="" className='object-cover h-full rounded-md' />
        <img src="/pics/DSC_8053.jpg" alt="" className='object-cover h-full rounded-md' />

        </div>
      </div>
    </>
  )
}

export default Gallery