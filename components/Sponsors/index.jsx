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
            <h1 className='font-ProzaLibre text-5xl md:text-7xl text-pink-500'>SPONSORS</h1>
            <div className={`flex flex-col lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit m-4 ${showModal1 ? "h-screen" : ""}`}>
                <div className='rounded-lg mx-4'>
                    <Image alt='' src={Trial} width={180} height={180} />
                </div>
                <div className='flex flex-col lg:justify-start justify-center mx-4'>
                    <div className='text-3xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                    <div className='text-lg font-Quattrocento'>
                        Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing. From delectable cakes to delicate pastries, bring your A-game and win the title of Pastry Champion. Join us on [date] at [venue] and let your creativity shine. Register now and let the baking battle begin
                        <button className='text-white font-bold ml-2' onClick={() => setShowModal1(true)}>Read More</button>
                        {showModal1 ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
                                                <p className="my-4 text-slate-500 text-base leading-relaxed">
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil dolor eaque, obcaecati eos temporibus est facere cum natus quos, autem sit quasi saepe error assumenda architecto recusandae porro repellat!
                                                    Aliquid libero enim repellendus deleniti iste. Eius perspiciatis iure aliquid nam ad, repellendus minima praesentium id dolore excepturi et tenetur expedita libero magnam possimus ut voluptate quisquam dicta perferendis animi!
                                                    Dolorem impedit dignissimos et rerum cum magni ipsa autem repellat sint fugit, recusandae pariatur eaque dolores. Repellat recusandae, odio amet magni vel ullam quis in ipsa, inventore iure at magnam.
                                                    Deleniti repellendus, eaque facere consequatur adipisci enim reiciendis aliquam inventore iusto eius possimus, fuga dolore nihil dolores doloribus ipsa assumenda commodi atque, voluptatibus id ratione. Ullam reiciendis recusandae dolores fugit!
                                                    Dignissimos fugiat quae ex, possimus corrupti ut temporibus voluptas quia, recusandae dolorem repellendus! Suscipit voluptas ea libero, culpa fugit tempore nemo odit sit voluptate illum, reprehenderit quasi sunt corrupti voluptatibus!
                                                    Perferendis reprehenderit accusantium illum quis animi libero sint? Fugit adipisci sunt dolores porro, quis sequi, corporis iste suscipit labore deleniti voluptatem pariatur illo modi odit dolorem error? Distinctio, ipsam accusamus!
                                                    Facilis sapiente sit exercitationem doloremque beatae excepturi placeat laboriosam, tempore, unde aperiam eum, laudantium repellat minima nisi distinctio neque! Velit eveniet maxime debitis eius rerum laboriosam at qui minima modi?
                                                    Ratione vero eaque quisquam velit a aperiam delectus? Nihil soluta laboriosam magnam eveniet similique inventore deserunt accusantium ipsam! Architecto ab adipisci commodi sunt consequuntur a placeat illo voluptatem alias nostrum!
                                                    Cupiditate nisi amet possimus? Aperiam optio temporibus obcaecati quidem, voluptatum dolorum ipsa totam voluptatem, repudiandae quos consequatur ex error, voluptatibus architecto quasi nulla similique dicta ullam recusandae esse. Non, architecto!
                                                    Distinctio dolor voluptate cumque voluptates, veniam, consequuntur saepe velit laborum assumenda molestiae maxime eum quod molestias suscipit libero et enim dignissimos modi odio? Repudiandae delectus sint exercitationem ullam quod veniam.
                                                    Assumenda suscipit fuga eaque laudantium maiores. Repellendus alias maiores ipsam incidunt eveniet ratione cupiditate ut deserunt iure consectetur, vitae, placeat corrupti cumque veritatis asperiores doloremque quae atque accusantium voluptate enim?
                                                    Repudiandae reiciendis expedita porro quaerat ut labore quidem nesciunt possimus recusandae ullam! Ratione ducimus excepturi et eveniet qui nisi facere, quasi soluta, iste amet nostrum quaerat voluptatem impedit? Ullam, nihil?
                                                    Quisquam placeat ab itaque laudantium dolorem sit, ratione illum iusto dicta exercitationem quibusdam, alias nihil odit. Sint, similique? Aliquid ipsa repudiandae odit quam, consequatur sapiente quas nemo adipisci architecto quaerat.
                                                    Consequuntur corporis explicabo reprehenderit ullam ipsa quia laboriosam? Beatae adipisci ipsam veniam! Iste repellat quibusdam dolore provident deleniti consequuntur, non, porro quaerat delectus, sed natus hic magni. Quasi, quam quas.
                                                    Quia nesciunt soluta, dolorum ab quisquam totam in dolores beatae, quos incidunt minus laudantium repellat? Saepe molestias est doloribus nam et quidem recusandae, at enim, magni, nisi pariatur mollitia commodi?
                                                    Quasi explicabo mollitia aliquid corrupti commodi esse labore animi laudantium, laborum quaerat totam aut dolores reprehenderit! Amet recusandae perferendis exercitationem doloremque doloribus error voluptatem soluta? Tempora corporis temporibus consequuntur dolorem!
                                                    Quod doloribus fugit temporibus et culpa quibusdam architecto consequatur possimus veritatis distinctio, nihil aspernatur corrupti sed odit eaque accusamus esse dolores repellat, similique facilis est! Nihil tempore est doloremque soluta!
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
            <div className={`flex flex-col ${showModal2 || showModal3 ? "lg:flex-col" : "lg:flex-row"} bg-white h-auto w-auto mx-4 my-6`}>
                {/* <div className='flex flex-col basis-1/2 lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-fit rounded-lgm m-4'>
                    <div className='rounded-lg mx-4 w-max-[100px]'>
                        <Image alt='' src={Trial} width={130} height={130} />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                        </div>
                    </div>
                </div> */}
                <div className={`flex flex-col lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-full rounded-lgm m-4 ${showModal2 ? "h-screen w-full " : "basis-1/2"}`}>
                    <div className='rounded-lg mx-4'>
                        <Image alt='' src={Trial} width={130} height={130} />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                            <button className='text-white font-bold ml-2' onClick={() => setShowModal2(true)}>Read More</button>
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
                                                    <p className="my-4 text-slate-500 text-base leading-relaxed">
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
                <div className={`flex flex-col lg:flex-row bg-pink-300/80 shadow-2xl backdrop-blur-3xl rounded-lg px-4 py-6 items-center justify-center w-full rounded-lgm m-4 ${showModal3 ? "h-screen w-full" : "basis-1/2"}`}>
                    <div className='rounded-lg mx-4'>
                        <Image alt='' src={Trial} width={130} height={130} />
                    </div>
                    <div className='flex flex-col lg:justify-start justify-center mx-4'>
                        <div className='text-xl text-pink-600 font-Lustria font-semibold lg:mb-2 my-3 lg:my-0 mx-auto lg:mx-0'>QUINCY</div>
                        <div className='text-base font-Quattrocento'>
                            Calling all pastry enthusiasts! The ultimate pastry competition awaits you! Show off your culinary skills and create mouthwatering masterpieces that will leave taste buds dancing.
                            <button className='text-white font-bold ml-2' onClick={() => setShowModal3(true)}>Read More</button>
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
                                                    <p className="my-4 text-slate-500 text-base leading-relaxed">
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

