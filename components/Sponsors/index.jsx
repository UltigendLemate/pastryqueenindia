import React from 'react'
import Marquee from "react-fast-marquee";
import Image from "next/image"
import Diamond from "../../public/diamond.png"
import ReactReadMoreReadLess from "react-read-more-read-less";
import Trial from "../../public/trial.png"

export default function Sponsors() {
    return (
        <div className='bg-white text-black flex items-center flex-col'>

            <div className='flex flex-col items-center justify-center my-4 w-fit pr-4 rounded-lgm mx-4'>
                <div className='rounded-lg'>
                    <Image alt='' src={Trial} width={120} height={200} />
                </div>
                <div className='flex flex-col align-middle text-center justify-center mx-4'>
                    <div className='text-3xl my-4 text-[#e100c5] font-RobotoCondensed font-bold'>TATA LG</div>
                    <div className='text-base text-center my-2 '>
                        <p className='font-BebasNeue'>this is a test</p>
                        <ReactReadMoreReadLess
                            charLimit={160}
                            readMoreText={"Read more ▼"}
                            readLessText={"Read less ▲"}
                            className="font-BebasNeue"
                        >
                            {"Are you ready to embark on a mouthwatering journey filled with heavenly aromas and irresistible flavors? We are thrilled to announce the most anticipated event of the year - the Pastry Extravaganza! Get ready to satisfy your sweet tooth and explore a world of delightful pastries like never before. Hosted by [Company Name], a renowned purveyor of culinary delights, the Pastry Extravaganza promises to be an unforgettable experience for all pastry enthusiasts. Whether you are a seasoned connoisseur or a budding pastry lover, this event will cater to your every craving and leave you craving for more. Date: [Event Date] Time: [Event Time] Venue: [Event Venue] Immerse yourself in the enchanting atmosphere as the aroma of freshly baked pastries fills the air. Our team of expert pastry chefs, renowned for their mastery of the art, will be showcasing their finest creations. From delicate French pastries to decadent chocolate treats, there will be a wide array of delicacies to tempt your taste buds. Discover the flakiest croissants, meticulously layered and baked to perfection, transporting you to the streets of Paris. Savor the rich creaminess of luscious éclairs, filled with velvety custard and topped with glossy chocolate ganache. Delight in the intricate beauty of macarons, with their vibrant colors and delicate shells encasing tantalizing flavors. But the Pastry Extravaganza is not just about indulging in classic favorites. Our innovative pastry chefs will be pushing the boundaries of creativity, presenting unique and unexpected flavor combinations that will surprise and delight your senses. Prepare to be amazed by intriguing fusion desserts that blend cultural influences and redefine the art of pastry-making. In addition to the extraordinary selection of pastries, the event will feature live demonstrations by renowned chefs, sharing their tips and techniques to inspire your own culinary adventures. From mastering the art of pastry dough to creating stunning decorations, you'll have the opportunity to learn from the best and take your baking skills to new heights. As you explore the various stalls, don't forget to visit our curated marketplace, where you can purchase specialty ingredients, baking tools, and recipe books, ensuring you can continue your pastry journey long after the event concludes. Tickets for this extraordinary event are limited, so be sure to secure your spot early. Whether you come alone, with friends, or as a family, the Pastry Extravaganza promises an experience that will leave you with cherished memories and a newfound appreciation for the art of pastry. Join us at the Pastry Extravaganza and immerse yourself in a world of unparalleled sweetness and culinary delights. This is an event you simply cannot afford to miss. Reserve your tickets today and prepare yourself for a gastronomic adventure unlike any other! [Company Name] - Celebrating the Art of Pastry"}
                        </ReactReadMoreReadLess>
                    </div>
                </div>
            </div>
        </div>
    )
}

