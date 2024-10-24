import React from 'react';
import MakeupPng from "../../assets/makeupset.png";
import Blusher from "../../assets/blusher.png";
import bottle from "../../assets/bottle.png";
import Leaf from "../../assets/leaf.png";
import { IoCartOutline } from 'react-icons/io5';
import { animate, motion } from 'framer-motion';


export const SlideUp = (delay) => {
    return {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
            },
        },
    };
};

const Hero = () => {
  return (
    <main >
        <div className="container min-h-[600px] flex justify-center relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2
            gap-12 lg:gap-24 place-items-center justify-between">

                {/* text content here */}
                <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">

                    <motion.h1
                     variants={SlideUp(0.5)}
                     initial="hidden"
                     whileInView="show"
                    className="relative text-5xl lg:text-7xl xl:text-8xl
                     font-bold uppercase text-outline text-transparent">
                        Beauty
                    <img  
                    src={Leaf} alt="" 
                    className="absolute w-[70px] top-0
                     right-0 md:right-[170px]"
                    />
                </motion.h1>
                <motion.h1
                variants={SlideUp(1)}
                 initial="hidden"
                 whileInView="show"
                className=" text-5xl lg:text-7xl xl:text-8xl
                     font-bold uppercase">
                    In Power
                </motion.h1>  


                <motion.p variants={SlideUp(1.5)}
                 initial="hidden"
                 whileInView="show" 
                className="text-sm">
                Discover Your Perfect Look! Shop the latest in beauty, skincare, and makeup essentials at unbeatable prices. 
                Explore our wide range of premium cosmetics for every skin type and occasion. Glow with confidence—shop now!
                </motion.p>


                <motion.button
                variants={SlideUp(2)}
                 initial="hidden"
                 whileInView="show"
                 className="btn-primary inline-block !mt-10">
                  <IoCartOutline className="inline mr-2"/>
                  Order Now
                </motion.button>

                </div>
                {/* Images here here */}
                <div className="relative">

                <motion.img initial={{ opacity: 0 , rotate:130, x:200, y:100}} 
                whileInView={{ opacity: 1 , rotate: 0, x: 0, y: 0 }}
                transition={{ duration: 0.9 }}
                 src={MakeupPng} alt=""
                  className="w-[450px] img-shadow rotate-[75deg]" /> 
                  
                </div>   
                          
            </div>
        </div>

         {/* purple background */}
            <motion.div 
                initial={{ opacity: 0, rotate: 60, x: -200, y: 100 }} // Adjust x for correct direction
                whileInView={{ opacity: 1, rotate: 40, x: 0, y: 0 }}
                className="w-[2500px] h-[2500px] rounded-3xl bg-lightPerple absolute top-[-30%] left-[70%] z-0"
                />

    </main>
  )
}

export default Hero
