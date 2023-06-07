import React from 'react'
import Image from "next/image"
import Trial from "../../public/banner.jpeg"
import Data from "./Data"
import { FaTimes } from 'react-icons/fa';


export default function Sponsors() {
    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    return (
        <div className='bg-white text-black flex items-center flex-col'>
            <h1 className=' text-5xl md:text-7xl text-pink-600 mb-4 special-font'>SPONSORS</h1>
            {/* diamond sponsor  */}
            <div className={`flex flex-col ${showModal1 || showModal2 || showModal3 ? "lg:flex-col" : "lg:flex-row"}`}>
                <div className={`flex flex-col lg:flex-row shadow-xl backdrop-blur-3xl rounded-lg px-2 py-6 basis-3/5 items-center justify-center mx-6 w-fit h-auto my-auto ${showModal1 ? "md:h-screen h-fit" : ""}`}>
                    <div className='rounded-lg mx-4 flex justify-center items-center max-w-4/5'>
                        <Image alt='' src={Trial} width={2400} height={2400} className='' />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-2xl text-pink-600 font-Lustria font-semibold lg:mb-4 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-sm md:text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing. From delectable cakes to delicate pastries.mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci
                            <button className='text-pink-600 ml-2' onClick={() => setShowModal1(true)}>Read More</button>
                            {/* pop up in the read more  */}
                            {showModal1 ? (
                                <div className="fixed inset-2 z-20 flex items-center overflow-y-auto justify-center bg-white bg-opacity-40">
                                    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-fit h-fit pt-8">
                                        <div className="flex justify-end">
                                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal1(false)}>
                                                <FaTimes className="text-primary hover:text-pink-300 lg:mt-6 mt-[1000px] md:mt-[400px]" />
                                            </button>
                                        </div>
                                        <p className="text-sm md:text-base lg:text-lg">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt magnam minima consectetur itaque ex sapiente quo, possimus veniam, aperiam praesentium esse necessitatibus, sequi iure quas excepturi aliquam commodi eveniet maiores!
                                            Harum veniam, illo modi sed alias maiores beatae asperiores doloribus. Iste voluptatibus, totam asperiores, vitae perferendis dolores illo reprehenderit, officiis sunt maiores provident! Est reiciendis numquam nulla non earum quos.
                                            Explicabo quas vero illum, aliquam quae vitae deserunt maiores voluptatem veniam blanditiis consequatur alias reprehenderit suscipit eaque, natus, consequuntur aperiam quam ullam ratione? Maxime error earum minima suscipit commodi tempora.
                                            Mollitia minus adipisci voluptate, sunt incidunt eveniet est ad architecto exercitationem assumenda nisi sit cupiditate consequuntur laudantium qui recusandae hic itaque. Perferendis mollitia repudiandae illum labore nam consequatur! Obcaecati, odit!
                                            Magni eos nesciunt optio fuga, quae officia facilis, explicabo ab similique sed alias nulla dolorum molestias ad dolorem, quam recusandae perspiciatis nemo. Ratione quaerat voluptatibus, excepturi maiores delectus in voluptates.
                                            Porro sed ullam, ipsam in nesciunt nobis reprehenderit tempore at sit ad. Exercitationem, officiis enim. Dolore enim maiores consectetur architecto alias delectus magnam illo quisquam amet, error quo minus mollitia?
                                            Illum excepturi veritatis, magnam culpa adipisci dolorem fugit provident distinctio earum. Laboriosam delectus quae perferendis nesciunt quod commodi facilis. Provident, asperiores ipsa possimus fugit aliquam obcaecati labore similique recusandae modi!
                                            Repudiandae veniam eveniet provident maiores facilis at aliquid. Accusantium, aut dolorem quas excepturi quae voluptates laboriosam non alias corrupti totam voluptatum nihil, corporis delectus in ullam fugiat veritatis esse! Ea!
                                            Tenetur vitae accusantium natus adipisci amet magnam id maxime? Nisi laborum, reiciendis labore, nihil perspiciatis magni iste quisquam explicabo nobis aspernatur totam cum officia nulla veritatis suscipit libero facilis? Vero!
                                            At, officia recusandae qui laboriosam dolorum asperiores earum, debitis optio, culpa harum magni aliquid voluptates? Rem ducimus blanditiis magni quasi expedita, fugit quos cum earum similique ad delectus eveniet vero!
                                            Repellendus veritatis reiciendis assumenda ex iusto? Accusantium, eligendi est voluptatem sunt voluptatum ipsum! Molestias voluptates fugit nostrum doloremque a dignissimos officiis? Provident, cum fuga deserunt quae ea quam nihil expedita.
                                            Obcaecati odio laborum repellendus quasi cupiditate vero quo pariatur dolorem temporibus? Placeat quidem, provident similique eveniet dolores tempora nisi, praesentium nam nihil illo voluptates est aspernatur fuga sunt obcaecati nobis.
                                            Sunt quaerat quibusdam nesciunt sapiente non ex culpa dolores, ipsa rem ratione sed amet, cumque voluptas fuga repellendus. Obcaecati aliquid placeat a modi sit! Ut, voluptas? Officia qui error ducimus!
                                            Voluptate amet omnis esse neque, error magni maxime in ut, fugiat eveniet nihil reprehenderit accusamus repellendus natus minima pariatur, aspernatur iusto quisquam exercitationem alias tenetur molestias dolorum dolorem iure? Impedit.
                                            Odit consectetur incidunt quisquam quasi natus aperiam dolores neque cum laboriosam nostrum! Esse sit quisquam fuga aspernatur temporibus a incidunt mollitia rerum, laudantium, cumque asperiores eius sint vitae maiores natus?
                                            Libero ipsa esse ut ab. Animi repudiandae perspiciatis ipsum quos quo? Iste repellendus distinctio dolorum ad perferendis accusamus delectus magnam sit, veniam sed omnis! Earum nostrum quo adipisci corrupti ab?
                                            Excepturi distinctio saepe fugiat soluta aperiam modi quidem expedita delectus quas reprehenderit illo ad sapiente nesciunt, blanditiis quisquam voluptatibus nulla, architecto exercitationem veniam dolore suscipit nobis ea, pariatur error! Aut.
                                        </p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>


                {/* plat sponsor  */}
                <div className={`flex basis-2/5 flex-col ${showModal2 || showModal3 ? "lg:flex-col" : "lg:flex-col"} bg-white h-auto w-auto mx-6 items-center`}>
                    <div className={`flex flex-col lg:flex-row shadow-xl backdrop-blur-3xl rounded-lg px-4 py-4 items-center justify-center w-full m-4 ${showModal2 ? "h-screen w-full" : "basis-1/2"}`}>
                        <div className='rounded-lg mx-4 flex justify-center items-center'>
                            <Image alt='' src={Trial} width={420} height={420} className='max-w-[100%]' />
                        </div>

                        <div className='flex flex-col lg:justify-start justify-center mx-4'>
                            <div className='text-lg text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY1</div>
                            <div className='text-sm font-Quattrocento'>
                                Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary
                                <button className='text-pink-600 ml-2' onClick={() => setShowModal2(true)}>Read More</button>
                                {showModal2 ? (
                                    <div className="fixed inset-2 z-20 flex items-center overflow-y-auto justify-center bg-white bg-opacity-40">
                                        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-fit h-fit pt-8">
                                            <div className="flex justify-end">
                                                <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal2(false)}>
                                                    <FaTimes className="text-primary hover:text-pink-300 lg:mt-6 mt-[1000px] md:mt-[160px]" />
                                                </button>
                                            </div>
                                            <p className="text-sm md:text-base lg:text-lg">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt veniam reprehenderit dolores alias. Esse aliquam, omnis illo commodi distinctio placeat beatae, cumque velit sint odit amet eveniet fuga dolore dolor!
                                                Excepturi veritatis dolore reiciendis esse cumque enim voluptates maxime ea libero blanditiis commodi ratione ex rem aut aliquid, ut minus et cupiditate fugit qui? Inventore sunt itaque autem eos explicabo.
                                                Tenetur, voluptatem molestias perferendis quam laudantium dolore atque culpa doloribus suscipit sit magnam provident beatae iusto delectus laboriosam similique ratione, vitae fugiat placeat nihil. Perferendis natus accusantium doloremque numquam nihil!
                                                Culpa suscipit minus eveniet, iusto qui eligendi, cum omnis error quod velit inventore enim praesentium cumque alias esse est, ducimus dignissimos illum! Eius perspiciatis aspernatur ipsum, rerum totam voluptatibus iure.
                                                Tenetur voluptas officiis possimus enim vitae, maiores rerum at eos. Quia, sed placeat? Ipsum eius deleniti nesciunt alias ad harum sapiente eligendi error. Distinctio sint quo animi, non commodi ipsa.
                                                Tempora laboriosam quibusdam modi provident nostrum maxime labore perferendis ipsum enim fugiat, corrupti voluptatibus consequuntur minima explicabo! Earum obcaecati ut repellat rem sint, inventore nulla, expedita atque animi fugiat odio!
                                                Error velit rerum consequatur? Consequatur quis voluptatem quaerat, eveniet officia odio quibusdam fugit, iure illum, non consequuntur reiciendis doloremque! Voluptatem nam odio non veniam, deleniti cum voluptas voluptatum impedit qui!
                                                Autem laboriosam deserunt in perferendis sed, incidunt illum dicta mollitia, sapiente aliquam maxime. Dolore corrupti, aliquid voluptas odit dolores pariatur nemo, deserunt similique corporis eaque accusamus exercitationem rem cupiditate iusto!
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-3 items-center justify-center w-full rounded-lgm m-4 ${showModal3 ? "h-screen w-full" : "basis-1/2"}`}>
                        <div className='rounded-lg mx-4 flex justify-center items-center'>
                            <Image alt='' src={Trial} width={420} height={420} className='max-w-[100%]' />
                        </div>
                        <div className='flex flex-col lg:justify-start justify-center mx-4'>
                            <div className='text-lg text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY2</div>
                            <div className='text-sm font-Quattrocento'>
                                Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary.
                                <button className='text-pink-600 ml-2' onClick={() => setShowModal3(true)}>Read More</button>
                                {showModal3 ? (
                                    <div className="fixed inset-2 z-20 flex items-center overflow-y-auto justify-center bg-white bg-opacity-40">
                                        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-fit h-fit pt-8">
                                            <div className="flex justify-end">
                                                <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal3(false)}>
                                                    <FaTimes className="text-primary hover:text-pink-300 lg:mt-6 mt-[1000px] md:mt-[160px]" />
                                                </button>
                                            </div>
                                            <p className="text-sm md:text-base lg:text-lg">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, aut pariatur. Expedita exercitationem quas eos eum aperiam numquam officiis. Accusantium odit voluptatum beatae culpa harum rerum rem cupiditate veniam reiciendis?
                                                Quam molestiae amet tenetur, deleniti beatae esse dolore exercitationem vero ipsam necessitatibus reprehenderit, sint omnis quas magni minima illum tempora. Harum tempora iure pariatur ullam libero ex qui, illum debitis!
                                                Commodi architecto optio magni aut est nemo aperiam cumque ullam fuga placeat omnis culpa quibusdam, id earum, fugit modi! Inventore magni incidunt praesentium voluptate quo esse. Ullam, soluta! Assumenda, minima?
                                                Vel tenetur totam vero similique earum! Culpa, fuga autem voluptatum impedit distinctio vel laudantium odio architecto ipsam reiciendis, quaerat accusamus dignissimos. Deserunt ipsam magni modi, quo tempore quibusdam molestias consequatur!
                                                Mollitia nihil beatae nulla modi quis quibusdam nobis, corporis aut suscipit, delectus aliquid similique quos. Nihil, dolore alias dicta id necessitatibus quisquam obcaecati ratione, eveniet corrupti sint fugit itaque et.
                                                Reprehenderit, repellendus assumenda quidem ratione id quas mollitia quasi ab fugiat minus hic quisquam dicta magni ad enim cupiditate alias dolores pariatur totam accusamus temporibus itaque iusto modi! Itaque, deleniti.
                                                Mollitia eos explicabo odio iste similique! Ad, quidem sequi, possimus, dignissimos repellat assumenda eaque facere quaerat eius sint aliquid! Cumque facilis exercitationem nihil temporibus earum odit ipsa fugiat autem aliquid!
                                                Ex blanditiis possimus repudiandae totam adipisci magni consectetur assumenda quaerat inventore nostrum? Odio culpa ullam illum, nihil alias, dignissimos veritatis hic expedita harum adipisci numquam quisquam, earum architecto inventore voluptatibus.
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/* gold silver sponsors  */}
            <div className='grid grid-cols-2 md:grid-cols-6 gap-7 px-10  bg-white h-auto justify-center w-full my-6 items-center align-middle'>
                {Data.map((Part, i) => (
                    <div key={i}>
                        <div className='flex flex-col items-center  align-middle justify-center '>
                            <Image alt='' src={Trial} width={1000} height={1000} className='shadow-xl' />
                            <h1 className='my-1 text-xl'>QUINCY</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

