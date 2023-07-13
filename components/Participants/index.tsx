import React, { useState } from 'react';
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from 'next/image';
import data from '../Participants/participants.json';
import image1 from '../images/chef.jpg';
import { FaTimes } from 'react-icons/fa';

const Part = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  const handleClick = (text: string) => {
    setPopupText(text);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="py-10 bg-white overflow-x-hidden">
      <div className="container m-auto text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-5xl md:text-7xl text-primary mb-4 special-font">Participants</h2>
        </div>
        <div className="grid md:gap-3 grid-cols-3 xl:grid-cols-5" ref={ref}>
          {data.map((item) => (
            <div key={item.id} className={`${item.id % 4 === 0 ? 'col-span-3 md:col-span-2' : ''}`}>
              {item.id % 4 !== 0 ? (
                <motion.div ref={ref}
                  animate={controls}
                  initial="hidden"
                  transition={{ duration: 1.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -60 },
                  }} className="card relative w-full flex justify-center mx-auto">
                  <Image alt="img" src={image1} className="w-full p-1 md:p-3 h-full" />
                  <p className="absolute md:bottom-5 md:left-5 md:px-4 md:py-1 bottom-1 left-1 text-sm px-1 py-px bg-primary bg-opacity-75 font-semibold md:rounded-xl rounded-tr-lg text-white">
                    {item.name}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  animate={controls}
                  initial="hidden"
                  transition={{ duration: 1.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 60 },
                  }} className="flex flex-col items-center col-span-3 bg-white rounded-lg">
                  <div className="bg-white rounded-lg text-justify md:text-center xl:text-left m-auto">
                    <div className="p-4 mb-10 md:mb-0">
                      <p className="text-3xl md:text-4xl font-semibold inline text-gray-700">{item.institute}</p>
                      <p className="mt-3 text-2xl text-gray-500 inline"> | {item.city}</p>
                      <p className="mt-3 text-gray-500 text-left">{item.normalText}</p>
                      <button
                        className="text-[#FF0080] text-base underline-offset-4 underline md:text-lg font-semibold mt-2"
                        onClick={() => item.expandedText && handleClick(item.expandedText)}
                        id={item.id.toString()}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        {showPopup && (
          <div className="fixed w-screen h-screen top-0  z-50 flex items-center overflow-y-auto justify-center bg-white bg-opacity-5 backdrop-blur-md">
            <div className="bg-white rounded-lg shadow-lg p-4 pt-0 md:pt-0 md:p-6 max-w-xs max-h-[300px] md:max-w-3xl md:max-h-[400px] overflow-auto relative  w-full">
              <div className="sticky flex justify-between py-3 bg-white top-0 right-0">
                {/* <p>{}</p> */}
                <p className='text-xl font-semibold'>More About Us</p>
                <button className="text-gray-600 hover:text-gray-800" onClick={closePopup}>
                  <FaTimes className="text-primary text-3xl hover:text-pink-300" />
                </button>
              </div>
              <p className="xl:text-sm 2xl:text-lg">{popupText} Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias facilis tempora laudantium voluptatem odio eaque recusandae. Earum doloribus praesentium nostrum, illo a totam consectetur vero quaerat, laudantium vitae voluptates. Quam expedita, minus, at dolorum, tempora nemo tempore reiciendis doloremque officiis vitae pariatur blanditiis amet sequi alias. Officiis error explicabo consequatur placeat. Error iure sit dolorum, mollitia aspernatur laudantium veritatis repellendus molestiae totam exercitationem eligendi est consectetur minima quam quaerat ea aliquam repudiandae pariatur ut delectus corrupti porro impedit? Beatae, ex omnis distinctio perspiciatis laudantium tenetur minus voluptate vitae officia deserunt atque numquam assumenda culpa quia saepe velit ducimus officiis!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Part;
