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
                                // <>
                                //     <div
                                //         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                //     >
                                //         {/* <div
                                //         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-4"
                                //     > */}
                                //         <div className="relative my-6 mx-auto w-fit">
                                //             {/*content*/}
                                //             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                //                 {/*header*/}
                                //                 <div className="flex items-start justify-between p-5 rounded-t">
                                //                     <button
                                //                         className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                //                         onClick={() => setShowModal1(false)}
                                //                     >
                                //                         <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                //                             ×
                                //                         </span>
                                //                     </button>
                                //                 </div>
                                //                 {/*body*/}
                                //                 <div className="relative p-6 flex-auto">
                                //                     <p className="my-4 text-slate-500 lg:text-base leading-relaxed text-sm">
                                //                         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus ipsum harum, autem vel nobis, enim, et delectus hic in cupiditate! Reiciendis placeat reprehenderit mollitia nam ut error dicta Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum soluta similique provident totam! Itaque magni alias incidunt repellat est, nemo possimus explicabo neque assumenda ad fugit mollitia expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat eos veniam mollitia sit voluptatum, libero tempore id assumenda tenetur velit amet soluta illo consectetur adipisci. Saepe corporis a iusto!
                                //                         Atque beatae accusantium reiciendis consequatur ullam vitae dignissimos, cumque rem quibusdam incidunt molestiae nihil, quod suscipit autem quam culpa, aperiam dolorem maiores mollitia quas cum repellat pariatur enim. Explicabo, odio.
                                //                         Quisquam consequuntur, pariatur qui dolore obcaecati dolor ut sunt ipsa quia voluptates animi consectetur ad illum cum modi. Maxime accusamus consequatur maiores. Ducimus corrupti tempora dolore minus quod eveniet excepturi.
                                //                         Qui cupiditate asperiores eaque suscipit est? Corrupti est doloremque iste sapiente deleniti architecto in accusamus minus aliquam officiis sit, ducimus tenetur voluptatem consectetur reiciendis id aspernatur aperiam autem suscipit! Voluptatem?
                                //                         Earum expedita reprehenderit laudantium minima ullam architecto quae animi, numquam nemo velit adipisci fugit molestiae, dolorem inventore? Perspiciatis repellendus possimus quia laborum, quos, illo consequatur voluptatem blanditiis numquam, sed harum!
                                //                         Provident delectus, magni porro placeat sint rerum voluptas iste et laboriosam dolores necessitatibus quasi quas quam labore aut nemo minima beatae, ipsam odit, veniam sit eaque sed. Nisi, accusamus ad.
                                //                         Quod, natus. Impedit velit maiores suscipit cum, error, nesciunt quidem ratione dolore aliquam necessitatibus assumenda optio quia libero voluptas iure doloribus accusamus quod aperiam. Exercitationem, unde repellendus. Quibusdam, dicta praesentium?
                                //                         Facere, id odit. Vitae mollitia atque dolorem nostrum, nemo labore, non facere saepe quidem quaerat quasi hic praesentium ipsam, ea corporis ad earum ducimus quas dolore. Odit soluta ipsam cumque.
                                //                         Officiis doloribus obcaecati neque reiciendis est temporibus eum voluptates, nulla qui quisquam, ut et labore! Odio cum, sit impedit eaque atque eveniet, distinctio assumenda modi voluptatibus minima vel, dignissimos fuga?
                                //                         Amet nostrum exercitationem quo ea consequatur, nesciunt neque dignissimos, officia quas similique mollitia maxime! Ab eligendi nisi in voluptate mollitia nulla nostrum, dolores et aliquam sunt vitae sint, similique accusamus!
                                //                         Reiciendis cumque nemo ea vel nihil, iste eius recusandae est nobis eos excepturi odit, temporibus adipisci quod fugit ut explicabo quia illum nulla. Sint facere iste quasi maxime eaque officia!
                                //                         Nulla similique, cupiditate dignissimos aperiam eius repudiandae eveniet error ex? Quae ducimus perspiciatis minus dignissimos officiis, iste illo saepe possimus repellendus repudiandae laborum ipsam eveniet laudantium ab quam optio nostrum.
                                //                         Dolore quasi enim quo similique sed vitae assumenda consequatur nesciunt sapiente commodi expedita atque rem hic iste obcaecati fugiat ad ab, porro quidem veniam suscipit illo. Reiciendis quae corrupti molestias.
                                //                         Autem, odio nam? Error deserunt enim possimus similique quod odio tempora minima ullam, excepturi veniam porro, reprehenderit nulla quam ut dolore velit placeat laborum repudiandae corporis veritatis expedita optio minus?
                                //                         Inventore incidunt quisquam, quos voluptatem officiis suscipit aperiam, tempore, iste consequatur vero totam dicta earum saepe distinctio maiores eaque. Iure expedita hic earum fugiat officia. Provident temporibus tempora modi commodi!
                                //                     </p>
                                //                 </div>
                                //                 {/*footer*/}
                                //                 <div className="flex items-center justify-end p-6 border-t rounded-b">
                                //                     <button
                                //                         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                //                         type="button"
                                //                         onClick={() => setShowModal1(false)}
                                //                     >
                                //                         Close
                                //                     </button>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>
                                //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                // </>
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
                                    // <>
                                    //     <div
                                    //         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    //     >
                                    //         <div className="relative my-6 mx-auto w-auto">
                                    //             {/*content*/}
                                    //             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    //                 {/*header*/}
                                    //                 <div className="flex items-start justify-between p-5 rounded-t">
                                    //                     <button
                                    //                         className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    //                         onClick={() => setShowModal2(false)}
                                    //                     >
                                    //                         <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                    //                             ×
                                    //                         </span>
                                    //                     </button>
                                    //                 </div>
                                    //                 {/*body*/}
                                    //                 <div className="relative p-6 flex-auto">
                                    //                     <p className="my-4 text-slate-500 lg:text-base text-sm leading-relaxed">
                                    //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet esse temporibus mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci, voluptatibus cum doloremque impedit tenetur! Alias!
                                    //                         Quia ducimus labore quasi cupiditate vel. Ipsa possimus, illo voluptate sequi inventore suscipit, delectus beatae et neque magni enim molestias rem consectetur maxime odio, saepe aut. Aut itaque laborum recusandae.
                                    //                         Rerum possimus laboriosam nisi, dolores, quibusdam sit dolore suscipit, ipsum voluptates sequi id et perferendis natus quasi. Numquam, autem, odit in iusto ipsa pariatur, explicabo iure ad dolorum nostrum ratione.
                                    //                         Qui ea repellendus, iure mollitia reiciendis ratione est labore placeat voluptas enim quos quaerat sunt? Voluptatibus delectus a dolorem aperiam corporis sit illo, quia ea tenetur dolorum. Ea, corporis illo.
                                    //                         Nisi maxime assumenda cupiditate natus fuga quis consequatur suscipit obcaecati blanditiis ullam omnis officia nostrum repudiandae distinctio molestias quae exercitationem, animi fugiat sit. Quo ex esse ducimus, nesciunt consectetur animi!
                                    //                         Magni quibusdam modi molestias veritatis ducimus maiores eligendi deserunt, nihil totam adipisci velit accusamus quo sed facilis dolorem aliquid animi ab neque assumenda facere iste. Deleniti a iure id fugit.
                                    //                         Asperiores, inventore laudantium quisquam ratione repellat odit quia quod sint at quam fugit odio sit soluta sunt expedita magni nihil impedit cupiditate delectus magnam autem aliquid est. Debitis, rerum quia.!
                                    //                     </p>
                                    //                 </div>
                                    //                 {/*footer*/}
                                    //                 <div className="flex items-center justify-end p-6 border-t rounded-b">
                                    //                     <button
                                    //                         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    //                         type="button"
                                    //                         onClick={() => setShowModal2(false)}
                                    //                     >
                                    //                         Close
                                    //                     </button>
                                    //                 </div>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    // </>
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
                                    // <>
                                    //     <div
                                    //         className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    //     >
                                    //         <div className="relative my-6 mx-auto w-auto">
                                    //             {/*content*/}
                                    //             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    //                 {/*header*/}
                                    //                 <div className="flex items-start justify-between p-5 rounded-t">
                                    //                     <button
                                    //                         className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    //                         onClick={() => setShowModal3(false)}
                                    //                     >
                                    //                         <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                    //                             ×
                                    //                         </span>
                                    //                     </button>
                                    //                 </div>
                                    //                 {/*body*/}
                                    //                 <div className="relative p-6 flex-auto">
                                    //                     <p className="my-4 text-slate-500 lg:text-base text-sm leading-relaxed">
                                    //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet esse temporibus mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci, voluptatibus cum doloremque impedit tenetur! Alias!
                                    //                         Quia ducimus labore quasi cupiditate vel. Ipsa possimus, illo voluptate sequi inventore suscipit, delectus beatae et neque magni enim molestias rem consectetur maxime odio, saepe aut. Aut itaque laborum recusandae.
                                    //                         Rerum possimus laboriosam nisi, dolores, quibusdam sit dolore suscipit, ipsum voluptates sequi id et perferendis natus quasi. Numquam, autem, odit in iusto ipsa pariatur, explicabo iure ad dolorum nostrum ratione.
                                    //                         Qui ea repellendus, iure mollitia reiciendis ratione est labore placeat voluptas enim quos quaerat sunt? Voluptatibus delectus a dolorem aperiam corporis sit illo, quia ea tenetur dolorum. Ea, corporis illo.
                                    //                         Nisi maxime assumenda cupiditate natus fuga quis consequatur suscipit obcaecati blanditiis ullam omnis officia nostrum repudiandae distinctio molestias quae exercitationem, animi fugiat sit. Quo ex esse ducimus, nesciunt consectetur animi!
                                    //                         Magni quibusdam modi molestias veritatis ducimus maiores eligendi deserunt, nihil totam adipisci velit accusamus quo sed facilis dolorem aliquid animi ab neque assumenda facere iste. Deleniti a iure id fugit.
                                    //                         Asperiores, inventore laudantium quisquam ratione repellat odit quia quod sint at quam fugit odio sit soluta sunt expedita magni nihil impedit cupiditate delectus magnam autem aliquid est. Debitis, rerum quia.!
                                    //                     </p>
                                    //                 </div>
                                    //                 {/*footer*/}
                                    //                 <div className="flex items-center justify-end p-6 border-t rounded-b">
                                    //                     <button
                                    //                         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    //                         type="button"
                                    //                         onClick={() => setShowModal3(false)}
                                    //                     >
                                    //                         Close
                                    //                     </button>
                                    //                 </div>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    // </>
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

