import React from 'react'
import data from '../sponsors.json'
import Organizer from '../Organizer';
type Props = {}

const Sponsors = (props: Props) => {
  return (
    <div className='bg-white text-black flex items-center flex-col'>
    <h1 className=' text-5xl md:text-7xl text-primary mb-4 special-font'>SPONSORS</h1>
    <div className="sm:grid sm:grid-cols-2  max-w-6xl m-auto gap-4 md:gap-8 p-4 z-40 ">

{
  data.map((item : any) => (
    <Organizer key={item.img} {...item} />
  ))
}
{/* <Organizer/> */}


</div>
    </div>
  )
}

export default Sponsors