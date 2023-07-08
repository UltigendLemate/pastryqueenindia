import React from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
    img : string,
    mini : string,
    text:string
}
const Organizer = (props : Props) => {
    const [showModal, setShowModal] = React.useState(false)
    //stop scroll when modal is open
    React.useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [showModal])
    
  return (
    <div className="max-w-xs md:max-w-xl  mb-5 sm:mb-0 mx-auto p-2 sm:p-5  bg-white rounded-md overflow-hidden shadow-md">
    <div className="flex w-full  h-32 sm:h-36 justify-center">
      <img src={props.img} alt="Image1" className='w-80 p-4' />
    </div> <div className="p-4">
      <p className="text-gray-800 text-xs md:text-sm mb-2">{props.mini}<span className='text-primary cursor-pointer' onClick={() => setShowModal(true)}>Know More</span></p>
    </div>
    {showModal && (
                <div className="fixed w-screen h-[100vh]  bottom-0 left-0 z-[999] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md overflow-y-hidden">
                    <div className="bg-white rounded-lg shadow-l z-[999] p-4 pt-0 md:pt-0 md:p-6 max-w-[250px] max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
                        <div className=" flex justify-between py-3 bg-white top-0 right-0">
    
                            <p className='text-xl font-semibold'>Know More</p>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-pink-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg">{props.text}</p>
                    </div>
                </div>
            )}
  </div>
  )
}

export default Organizer