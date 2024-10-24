import React from 'react';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import { delay, motion } from 'framer-motion';
import {SlideUp} from  "../Hero/Hero";
import Items from '../Items/Items';

const PopularItemsData = [
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
    
];



const PopularItems = () => {
  return (
    <section>
    <div className="container py-24">
      <motion.h3
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"show"}
        className="text-4xl text-center font-league font-semibold uppercase py-8">
        {" "}Our Popular Items
      </motion.h3>
  
      {/* card section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {PopularItemsData.map((item) => {
          return (
            <div key={item.id} className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">

              <img src={item.img} alt={item.name} className="w-44 mx-auto img-shadow 
              group-hover:scale-x-110 
              group-hover:translate-y-[-50px]
              group-hover:translate-x-10
              group-hover:rotate-[50deg] 
              transition-all 
              duration-500" />

              <button className="btn-primary group-hover:mb-3
               opacoty-0 group-hover:opacity-100">
                Buy Now</button>

              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-xl font-bold text-purple-500">{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  
  );
};

export default PopularItems
