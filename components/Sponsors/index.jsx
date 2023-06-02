import React from 'react'
import Image from "next/image"
import Trial from "../../public/trial.png"
import Data from "./Data"

export default function Sponsors() {
    return (
        <div className='bg-white text-black flex items-center flex-col'>
            <h1 className='font-ProzaLibre text-5xl md:text-7xl text-pink-500'>SPONSORS</h1>
            <div className='flex flex-col lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit rounded-lgm m-4'>
                <div className='rounded-lg mx-4'>
                    <Image alt='' src={Trial} width={180} height={180} />
                </div>
                <div className='flex flex-col lg:justify-start justify-center mx-4'>
                    <div className='text-3xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                    <div className='text-lg font-Quattrocento'>
                        Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing. From delectable cakes to delicate pastries, bring your A-game and win the title of Pastry Champion. Join us on [date] at [venue] and let your creativity shine. Register now and let the baking battle begin
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row bg-white h-auto w-auto mx-4 my-6'>
                <div className='flex flex-col basis-1/2 lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit rounded-lgm m-4'>
                    <div className='rounded-lg mx-4 w-max-[100px]'>
                        <Image alt='' src={Trial} width={130} height={130} />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                        </div>
                    </div>
                </div>  <div className='flex flex-col basis-1/2 lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit rounded-lgm m-4'>
                    <div className='rounded-lg mx-4 w-max-[100px]'>
                        <Image alt='' src={Trial} width={130} height={130} />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row bg-white h-auto w-fit mx-4 my-6 flex-wrap items-center align-middle justify-center'>
                {Data.map((Part, i) => (
                    <div key={i}>
                        <div className='flex flex-col items-center align-middle justify-center my-4 mx-12'>
                            <Image alt='' src={Trial} width={100} height={100} />
                            <h1 className='my-1'>QUINCY</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

