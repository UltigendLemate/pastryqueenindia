import React, { useEffect } from 'react'
import Image from "next/image"
import Trial from "../../public/banner.jpeg"
import Data from "./Data"
import { FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";


export default function Sponsors() {

    const controls = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView1) {
            controls.start("visible");
        }
    }, [controls, inView1]);
    const [ref2, inView2] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView2) {
            controls.start("visible");
        }
    }, [controls, inView2]);
    const [ref3, inView3] = useInView({ threshold: 0.8 });

    useEffect(() => {
        if (inView3) {
            controls.start("visible");
        }
    }, [controls, inView3]);

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    return (
        <div className='bg-white text-black flex items-center flex-col'>
            <h1 className=' text-5xl md:text-7xl text-green-600 mb-4 special-font'>SPONSORS</h1>
            {/* diamond sponsor  */}
            <div className="flex lg:flex-row flex-col" >
                <motion.div ref={ref1}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 60 },
                    }} className={`flex flex-col lg:flex-row shadow-xl  rounded-lg px-2 py-6 basis-3/5 items-center justify-center mx-6 w-fit h-auto my-auto ${showModal1 ? "md:h-screen h-fit" : ""}`}>
                    <div className='rounded-lg mx-4 flex justify-center items-center max-w-4/5'>
                        <Image alt='' src={Trial} width={2400} height={2400} className='' />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-2xl text-green-600 font-Lustria font-semibold lg:mb-4 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-sm md:text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing. From delectable cakes to delicate pastries.mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci
                            <button className='text-green-600 ml-2' onClick={() => setShowModal1(true)}>Read More</button>
                        </div>
                    </div>
                </motion.div>
                {/* plat sponsor  */}
                <motion.div ref={ref2}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 60 },
                    }} className={`flex basis-2/5 flex-col ${showModal2 || showModal3 ? "lg:flex-col" : "lg:flex-col"} bg-white h-auto w-auto mx-6 items-center`}>
                    <div className={`flex flex-col lg:flex-row shadow-xl  rounded-lg px-4 py-4 items-center justify-center w-full m-4 ${showModal2 ? "h-screen w-full" : "basis-1/2"}`}>
                        <div className='rounded-lg mx-4 flex justify-center items-center'>
                            <Image alt='' src={Trial} width={420} height={420} className='max-w-[100%]' />
                        </div>

                        <div className='flex flex-col lg:justify-start justify-center mx-4'>
                            <div className='text-lg text-green-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY1</div>
                            <div className='text-sm font-Quattrocento'>
                                Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary
                                <button className='text-green-600 ml-2' onClick={() => setShowModal2(true)}>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row shadow-2xl rounded-lg px-4 py-3 items-center justify-center w-full rounded-lgm m-4 ${showModal3 ? "h-screen w-full" : "basis-1/2"}`}>
                        <div className='rounded-lg mx-4 flex justify-center items-center'>
                            <Image alt='' src={Trial} width={420} height={420} className='max-w-[100%]' />
                        </div>
                        <div className='flex flex-col lg:justify-start justify-center mx-4'>
                            <div className='text-lg text-green-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY2</div>
                            <div className='text-sm font-Quattrocento'>
                                Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary.
                                <button className='text-green-600 ml-2' onClick={() => setShowModal3(true)}>Read More</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* gold silver sponsors  */}
            <motion.div ref={ref3}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 2 }}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 100 },
                    }}  className='grid grid-cols-2 md:grid-cols-6 gap-7 px-10  bg-white h-auto justify-center w-full my-6 items-center align-middle'>
                {Data.map((Part, i) => (
                    <div key={i}>
                        <div  className='flex flex-col items-center  align-middle justify-center '>
                            <Image alt='' src={Trial} width={1000} height={1000} className='shadow-xl' />
                            <h1 className='my-1 text-xl'>QUINCY</h1>
                        </div>
                    </div>
                ))}
            </motion.div>
            {/* pop up in the read more  */}
            {showModal1 && (
                <div className="fixed w-screen h-screen top-0  z-50 flex items-center overflow-y-auto justify-center bg-white bg-opacity-5 backdrop-blur-md">
                    <div className="bg-white rounded-lg shadow-lg p-4 pt-0 md:pt-0 md:p-6 max-w-xs max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative w-full">
                        <div className="sticky flex justify-between py-3 bg-white top-0 right-0">
                            {/* <p>{}</p> */}
                            <p className='text-xl font-semibold'>Modal 1</p>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal1(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-green-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil dolorum a natus delectus et consequuntur nostrum ullam. Sit, maxime. Nihil accusamus odit dignissimos? Minima maiores pariatur maxime inventore necessitatibus dolores?
                            Aliquid veniam ipsum quas fuga. Quisquam eum adipisci dolore nesciunt possimus rerum nihil obcaecati veniam provident ex. Enim officia ipsum itaque natus quas quis veniam, nobis doloribus asperiores illum nihil!
                            Illo necessitatibus asperiores, nesciunt amet fugiat dolor quos, sint repellat veritatis non, fugit corrupti iure. Atque velit, accusantium non beatae, quo eum optio fugit magni, eligendi voluptates explicabo vel excepturi.
                            Mollitia distinctio et dolores officia autem accusamus itaque consectetur harum quos a, quibusdam voluptate debitis consequatur illum cupiditate quasi impedit ratione praesentium animi minus adipisci libero ducimus quo! Quaerat, accusantium.
                            Praesentium, odit! Voluptate dignissimos a nesciunt nihil eum voluptatum reprehenderit dolore, perferendis in vel magni! Deserunt quas rem qui iste fuga officia magnam voluptatum commodi quasi itaque! Sapiente, explicabo cupiditate.
                            Odit ab praesentium aliquid quasi pariatur assumenda accusamus nesciunt! Sed ullam voluptas corrupti quisquam blanditiis reiciendis eum voluptatum? Quidem aliquam hic fugit provident iure numquam consequuntur dolorem, esse quasi blanditiis?
                            Voluptate aliquam dolor asperiores aut delectus earum doloribus, quidem, quibusdam vel non saepe labore quaerat, nam ipsum tempore reiciendis sunt consectetur consequatur. Similique amet natus voluptate magni corporis earum deserunt.
                            Ipsam, hic itaque dicta ducimus minima nisi facere, error quia assumenda quos doloremque dignissimos ad saepe, natus est atque sed explicabo aspernatur rerum. Natus voluptate consequuntur iusto ad non quis.
                            Velit aliquam soluta consectetur omnis cum dolor reiciendis commodi qui inventore in amet ea, cupiditate laudantium, ad, expedita eaque sequi et saepe dolorum? Deleniti quaerat nemo aspernatur minima eos impedit.
                            Corrupti ut adipisci odit, iste beatae dicta sint suscipit doloremque nulla asperiores impedit. Voluptate iusto saepe, reiciendis vel corporis a maiores voluptatem voluptates! Ipsum officia ratione quia, numquam nesciunt tenetur.
                            Tenetur sequi, numquam nihil amet natus nam voluptates eius distinctio ad ratione dolor deserunt officia cum, doloribus, cupiditate quis repellendus et magnam molestiae aperiam eaque earum fugit quos perspiciatis! Tempore!
                            Fugit atque voluptatum delectus. Architecto cum incidunt ad dolor? Aliquam enim velit eius ipsa? Perspiciatis reprehenderit assumenda esse aliquid, aut nulla provident sequi odio, sunt quasi, corporis animi aperiam aliquam!
                            Reiciendis, fugiat sint ipsa obcaecati consequuntur quae aliquam deleniti id tempora nihil, sapiente incidunt ratione reprehenderit et dolores voluptatibus consequatur. Id non quia quam dolores deleniti explicabo illum asperiores impedit?
                            Quidem quo nesciunt eveniet explicabo vero voluptates accusantium velit unde placeat recusandae rem sequi ullam reprehenderit cum odit asperiores incidunt quam, dolore dolor soluta excepturi dolores totam magnam! Reiciendis, neque.
                            Iste, ab, veritatis cupiditate, at itaque expedita et dicta maxime placeat sequi veniam. Ad tempora delectus, aliquid harum quo molestias odit consequatur distinctio ratione dignissimos, repellendus ea itaque nemo voluptatem!
                            Distinctio fugit cupiditate reiciendis voluptas nulla ex nisi, aspernatur est sapiente expedita assumenda corrupti aliquid inventore non necessitatibus ullam. Ratione odio iste cupiditate accusantium beatae tenetur minus fuga culpa nesciunt?
                            Beatae nobis laboriosam mollitia ipsum vitae, deleniti nam non? Fuga, unde. Non, saepe voluptatem reiciendis vero veniam repellat rerum. Possimus iusto quos eveniet modi unde molestiae laboriosam dignissimos, ab maiores.</p>
                    </div>
                </div>
            )}
            {showModal2 && (
                <div className="fixed w-screen h-screen top-0  z-50 flex items-center overflow-y-auto justify-center bg-white bg-opacity-5 backdrop-blur-md">
                    <div className="bg-white rounded-lg shadow-lg p-4 pt-0 md:pt-0 md:p-6 max-w-xs max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
                        <div className="sticky flex justify-between py-3 bg-white top-0 right-0">
                            {/* <p>{}</p> */}
                            <p className='text-xl font-semibold'>Modal 2</p>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal2(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-green-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos harum, reiciendis quibusdam, aliquid officia sequi nihil voluptate facere deleniti dolore pariatur ea nemo voluptatem dolores. Laboriosam, magnam voluptatum. Cupiditate!
                            Similique ea fugit animi est optio eius asperiores saepe temporibus numquam vel ratione amet sequi eligendi qui quo, quisquam maiores ut et dolore cupiditate mollitia accusamus ipsam eos? Est, esse.
                            Veritatis, voluptates illum. Ipsam est consequuntur fuga numquam, nihil officia, delectus dolor consequatur alias similique et earum dolorem illo voluptatum molestiae cumque! Quidem laboriosam est vero ea deleniti porro eius!
                            Tempore nesciunt voluptates fugiat impedit, velit sit fugit hic nisi id, beatae officiis. Nulla repellat sequi libero qui cumque, officia quas vel rem placeat dolores! Sunt necessitatibus minima inventore repellendus.
                            Odio alias voluptatibus et hic ipsam temporibus vitae dolore inventore. Nisi explicabo impedit itaque, quisquam pariatur delectus eaque repudiandae reiciendis vel, cumque ea perferendis accusantium ab iste? Quidem, ullam soluta?
                            Illum asperiores nesciunt iusto dolor possimus molestiae eos, animi ex laborum dignissimos quis illo accusamus neque, labore, commodi eius suscipit consectetur quas sit cumque doloremque qui inventore? Veniam, laborum amet!
                            Impedit praesentium, nostrum tempora possimus cum nihil tempore aperiam facilis nesciunt repellendus sit, eaque culpa ducimus quibusdam, iste ipsa qui consequatur! Sit accusantium qui amet enim fuga deserunt consequuntur ab.</p>
                    </div>
                </div>
            )}
            {showModal3 && (
                <div className="fixed w-screen h-screen top-0  z-50 flex items-center overflow-y-auto justify-center bg-white bg-opacity-5 backdrop-blur-md">
                    <div className="bg-white rounded-lg shadow-lg p-4 pt-0 md:pt-0 md:p-6 max-w-xs max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
                        <div className="sticky flex justify-between py-3 bg-white top-0 right-0">
                            {/* <p>{}</p> */}
                            <p className='text-xl font-semibold'>Modal 3</p>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal3(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-green-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eos harum, reiciendis quibusdam, aliquid officia sequi nihil voluptate facere deleniti dolore pariatur ea nemo voluptatem dolores. Laboriosam, magnam voluptatum. Cupiditate!
                            Similique ea fugit animi est optio eius asperiores saepe temporibus numquam vel ratione amet sequi eligendi qui quo, quisquam maiores ut et dolore cupiditate mollitia accusamus ipsam eos? Est, esse.
                            Veritatis, voluptates illum. Ipsam est consequuntur fuga numquam, nihil officia, delectus dolor consequatur alias similique et earum dolorem illo voluptatum molestiae cumque! Quidem laboriosam est vero ea deleniti porro eius!
                            Tempore nesciunt voluptates fugiat impedit, velit sit fugit hic nisi id, beatae officiis. Nulla repellat sequi libero qui cumque, officia quas vel rem placeat dolores! Sunt necessitatibus minima inventore repellendus.
                            Odio alias voluptatibus et hic ipsam temporibus vitae dolore inventore. Nisi explicabo impedit itaque, quisquam pariatur delectus eaque repudiandae reiciendis vel, cumque ea perferendis accusantium ab iste? Quidem, ullam soluta?
                            Illum asperiores nesciunt iusto dolor possimus molestiae eos, animi ex laborum dignissimos quis illo accusamus neque, labore, commodi eius suscipit consectetur quas sit cumque doloremque qui inventore? Veniam, laborum amet!
                            Impedit praesentium, nostrum tempora possimus cum nihil tempore aperiam facilis nesciunt repellendus sit, eaque culpa ducimus quibusdam, iste ipsa qui consequatur! Sit accusantium qui amet enim fuga deserunt consequuntur ab.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

