import React from 'react';
import image4 from "../../assets/image4.png";
import {motion} from "framer-motion";
import { SlideUp } from '../Hero/Hero';

const Testimonial = () => {
  return (
    <section> 
    <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">

            {/* Text content section */}
         <div className="space-y-5 lg:max-w-[400px]">
          <motion.p 
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-xl font-serif relative z-10">
          "Indulge in high-end beauty essentials without breaking the bank. Explore our wide 
          range of cosmetics that combine quality with value"
          </motion.p>
          
         </div>
         
          
          <div className="relative">
            <motion.img

            initial={{
              opacity: 0,
              x: -100,
              y: 100,
            }}
           whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            whileHover={{
              scale:1.2,
              rotate: 15,
              x: 50,
              y: -50,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              scale: {duration: 0.5 },
            }}
            src={image4} alt="" 
            className="relative z-10 w-full lg:max-w-[350px] img-shadow"/>

            <motion.div
            initial={{opacity: 0 }} whileInView={{opacity: 1 }}
            transition={{duration: 0.6, delay: 0.5 }}
            className=" absolute top-[50%] right-[50%] 
            transform translate-x-[50%] translate-y-[-50%] h-[380px] w-[380px] md:h-[450px] md:w-[450px] bg-lightPerple rounded-full">

            </motion.div>
        </div>
          </div>


         </div> 
  </section>
  )
}

export default Testimonial
