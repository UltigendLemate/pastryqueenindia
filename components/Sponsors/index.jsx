import React from 'react'
import Image from "next/image"
import Trial from "../../public/trial.png"
import Data from "./Data"


export default function Sponsors() {
    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    return (
        <div className='bg-white text-black flex items-center flex-col'>
            <h1 className='font-ProzaLibre text-5xl md:text-7xl text-pink-600 mb-4'>SPONSORS</h1>
            <div className={`flex flex-col lg:flex-row shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit m-y4 lg:mx-16 mx-6 ${showModal1 ? "md:h-screen h-fit" : ""}`}>
            <div class='rounded-lg mx-4 flex justify-center items-center'>
                        <Image alt='' src={Trial} width={1440} height={1440} class='max-w-[48%] md:max-w-[56%] lg:max-w-[100%]' />
                    </div>
                <div className='flex flex-col lg:justify-start justify-center mx-4'>
                    <div className='lg:text-5xl text-4xl text-pink-600 font-Lustria font-semibold lg:mb-8 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                    <div className='text-xl font-Quattrocento'>
                        Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing. From delectable cakes to delicate pastries, bring your A-game and win the title of Pastry Champion. Join us on [date] at [venue] and let your creativity shine. Register now and let the baking battle begin
                        <button className='text-pink-600 ml-2' onClick={() => setShowModal1(true)}>Read More</button>
                        {showModal1 ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-4"
                                >
                                    <div className="relative my-6 mx-auto w-fit">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 rounded-t">
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <p className="my-4 text-slate-500 lg:text-base leading-relaxed text-sm">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus ipsum harum, autem vel nobis, enim, et delectus hic in cupiditate! Reiciendis placeat reprehenderit mollitia nam ut error dicta Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum soluta similique provident totam! Itaque magni alias incidunt repellat est, nemo possimus explicabo neque assumenda ad fugit mollitia expedita quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat eos veniam mollitia sit voluptatum, libero tempore id assumenda tenetur velit amet soluta illo consectetur adipisci. Saepe corporis a iusto!
                                                    Atque beatae accusantium reiciendis consequatur ullam vitae dignissimos, cumque rem quibusdam incidunt molestiae nihil, quod suscipit autem quam culpa, aperiam dolorem maiores mollitia quas cum repellat pariatur enim. Explicabo, odio.
                                                    Quisquam consequuntur, pariatur qui dolore obcaecati dolor ut sunt ipsa quia voluptates animi consectetur ad illum cum modi. Maxime accusamus consequatur maiores. Ducimus corrupti tempora dolore minus quod eveniet excepturi.
                                                    Qui cupiditate asperiores eaque suscipit est? Corrupti est doloremque iste sapiente deleniti architecto in accusamus minus aliquam officiis sit, ducimus tenetur voluptatem consectetur reiciendis id aspernatur aperiam autem suscipit! Voluptatem?
                                                    Earum expedita reprehenderit laudantium minima ullam architecto quae animi, numquam nemo velit adipisci fugit molestiae, dolorem inventore? Perspiciatis repellendus possimus quia laborum, quos, illo consequatur voluptatem blanditiis numquam, sed harum!
                                                    Provident delectus, magni porro placeat sint rerum voluptas iste et laboriosam dolores necessitatibus quasi quas quam labore aut nemo minima beatae, ipsam odit, veniam sit eaque sed. Nisi, accusamus ad.
                                                    Quod, natus. Impedit velit maiores suscipit cum, error, nesciunt quidem ratione dolore aliquam necessitatibus assumenda optio quia libero voluptas iure doloribus accusamus quod aperiam. Exercitationem, unde repellendus. Quibusdam, dicta praesentium?
                                                    Facere, id odit. Vitae mollitia atque dolorem nostrum, nemo labore, non facere saepe quidem quaerat quasi hic praesentium ipsam, ea corporis ad earum ducimus quas dolore. Odit soluta ipsam cumque.
                                                    Officiis doloribus obcaecati neque reiciendis est temporibus eum voluptates, nulla qui quisquam, ut et labore! Odio cum, sit impedit eaque atque eveniet, distinctio assumenda modi voluptatibus minima vel, dignissimos fuga?
                                                    Amet nostrum exercitationem quo ea consequatur, nesciunt neque dignissimos, officia quas similique mollitia maxime! Ab eligendi nisi in voluptate mollitia nulla nostrum, dolores et aliquam sunt vitae sint, similique accusamus!
                                                    Reiciendis cumque nemo ea vel nihil, iste eius recusandae est nobis eos excepturi odit, temporibus adipisci quod fugit ut explicabo quia illum nulla. Sint facere iste quasi maxime eaque officia!
                                                    Nulla similique, cupiditate dignissimos aperiam eius repudiandae eveniet error ex? Quae ducimus perspiciatis minus dignissimos officiis, iste illo saepe possimus repellendus repudiandae laborum ipsam eveniet laudantium ab quam optio nostrum.
                                                    Dolore quasi enim quo similique sed vitae assumenda consequatur nesciunt sapiente commodi expedita atque rem hic iste obcaecati fugiat ad ab, porro quidem veniam suscipit illo. Reiciendis quae corrupti molestias.
                                                    Autem, odio nam? Error deserunt enim possimus similique quod odio tempora minima ullam, excepturi veniam porro, reprehenderit nulla quam ut dolore velit placeat laborum repudiandae corporis veritatis expedita optio minus?
                                                    Inventore incidunt quisquam, quos voluptatem officiis suscipit aperiam, tempore, iste consequatur vero totam dicta earum saepe distinctio maiores eaque. Iure expedita hic earum fugiat officia. Provident temporibus tempora modi commodi!
                                                </p>
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal1(false)}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col ${showModal2 || showModal3 ? "lg:flex-col" : "lg:flex-row"} bg-white h-auto w-auto lg:mx-16 mx-8 my-6 items-center`}>
                <div className={`flex flex-col lg:flex-row shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-full rounded-lgm m-4 ${showModal2 ? "h-screen w-full" : "basis-1/2"}`}>
                    <div class='rounded-lg mx-4 flex justify-center items-center'>
                        <Image alt='' src={Trial} width={720} height={720} class='max-w-[36%] lg:max-w-[100%]' />
                    </div>

                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                            <button className='text-pink-600 ml-2' onClick={() => setShowModal2(true)}>Read More</button>
                            {showModal2 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative my-6 mx-auto w-auto">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 rounded-t">
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal2(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 lg:text-base text-sm leading-relaxed">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet esse temporibus mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci, voluptatibus cum doloremque impedit tenetur! Alias!
                                                        Quia ducimus labore quasi cupiditate vel. Ipsa possimus, illo voluptate sequi inventore suscipit, delectus beatae et neque magni enim molestias rem consectetur maxime odio, saepe aut. Aut itaque laborum recusandae.
                                                        Rerum possimus laboriosam nisi, dolores, quibusdam sit dolore suscipit, ipsum voluptates sequi id et perferendis natus quasi. Numquam, autem, odit in iusto ipsa pariatur, explicabo iure ad dolorum nostrum ratione.
                                                        Qui ea repellendus, iure mollitia reiciendis ratione est labore placeat voluptas enim quos quaerat sunt? Voluptatibus delectus a dolorem aperiam corporis sit illo, quia ea tenetur dolorum. Ea, corporis illo.
                                                        Nisi maxime assumenda cupiditate natus fuga quis consequatur suscipit obcaecati blanditiis ullam omnis officia nostrum repudiandae distinctio molestias quae exercitationem, animi fugiat sit. Quo ex esse ducimus, nesciunt consectetur animi!
                                                        Magni quibusdam modi molestias veritatis ducimus maiores eligendi deserunt, nihil totam adipisci velit accusamus quo sed facilis dolorem aliquid animi ab neque assumenda facere iste. Deleniti a iure id fugit.
                                                        Asperiores, inventore laudantium quisquam ratione repellat odit quia quod sint at quam fugit odio sit soluta sunt expedita magni nihil impedit cupiditate delectus magnam autem aliquid est. Debitis, rerum quia.!
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal2(false)}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col lg:flex-row shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-full rounded-lgm m-4 ${showModal3 ? "h-screen w-full" : "basis-1/2"}`}>
                <div class='rounded-lg mx-4 flex justify-center items-center'>
                        <Image alt='' src={Trial} width={720} height={720} class='max-w-[36%] lg:max-w-[100%]' />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                            <button className='text-pink-600 ml-2' onClick={() => setShowModal3(true)}>Read More</button>
                            {showModal3 ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative my-6 mx-auto w-auto">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 rounded-t">
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal3(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 lg:text-base text-sm leading-relaxed">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet esse temporibus mollitia. Veniam illum eaque sit natus ab nisi sequi repudiandae vero adipisci, voluptatibus cum doloremque impedit tenetur! Alias!
                                                        Quia ducimus labore quasi cupiditate vel. Ipsa possimus, illo voluptate sequi inventore suscipit, delectus beatae et neque magni enim molestias rem consectetur maxime odio, saepe aut. Aut itaque laborum recusandae.
                                                        Rerum possimus laboriosam nisi, dolores, quibusdam sit dolore suscipit, ipsum voluptates sequi id et perferendis natus quasi. Numquam, autem, odit in iusto ipsa pariatur, explicabo iure ad dolorum nostrum ratione.
                                                        Qui ea repellendus, iure mollitia reiciendis ratione est labore placeat voluptas enim quos quaerat sunt? Voluptatibus delectus a dolorem aperiam corporis sit illo, quia ea tenetur dolorum. Ea, corporis illo.
                                                        Nisi maxime assumenda cupiditate natus fuga quis consequatur suscipit obcaecati blanditiis ullam omnis officia nostrum repudiandae distinctio molestias quae exercitationem, animi fugiat sit. Quo ex esse ducimus, nesciunt consectetur animi!
                                                        Magni quibusdam modi molestias veritatis ducimus maiores eligendi deserunt, nihil totam adipisci velit accusamus quo sed facilis dolorem aliquid animi ab neque assumenda facere iste. Deleniti a iure id fugit.
                                                        Asperiores, inventore laudantium quisquam ratione repellat odit quia quod sint at quam fugit odio sit soluta sunt expedita magni nihil impedit cupiditate delectus magnam autem aliquid est. Debitis, rerum quia.!
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal3(false)}
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
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

