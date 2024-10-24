import React from 'react';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import { delay, motion } from 'framer-motion';
import {SlideUp} from  "../Hero/Hero";

const ItemsData = [
    {
        id: 1,
        img: image1,
        name: "Product 1",
        price: "LKR 800.00",
       delay: 0.4
    },
    {
        id: 2,
        img: image2,
        name: "Product 2",
        price: "LKR 1200.00",
       delay: 0.8
    },
    {   id: 3,
        img: image3,
        name: "Product 3",
        price: "LKR 1500.00",
       delay: 1.2
    },
    
]


const Items = () => {
  return <section>
    <div>
        <div className="container py-12">
            {/* Heading Section */}
            <h3 className="text-2xl font-semibold uppercase text-darkPurple py-8">
            Product 1
            </h3>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ItemsData.map((item) => {
                return (
                    <motion.div 
                    variants={SlideUp(item.delay)}
                    initial="hidden"
                    whileInView="show"
                    key={item.id} 
                    className="group bg-white/50 shadow-md p-3 flex item-center gap-3" > 
                        <img 
                            src={item.img} 
                            alt="" 
                            className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">{item.name}  </h3>
                            <p className="text-xl text-purple-500"> {item.price} </p>
                        </div>
                    </motion.div>
                );
            })}
         </div>


    </div>

    </div>
    </section>
}

export default Items
