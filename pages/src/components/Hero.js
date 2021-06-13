import { motion } from 'framer-motion'
import React from 'react'


function Hero() {

    const variants = {
        visible:{ocacity:1},
        hidden:{opacity:0},
    }
    return (
        <div className="flex flex-col mt-20 space-y-5" >
        <div className="flex flex-col text-5xl space-y-3 font-medium">
        <motion.div
    animate={{ x:50}}
    transition={{ duration: 2 }}
    

  >
            <h1> Welcome To</h1>
            <h1>My Personal Portfolio</h1>
            </ motion.div > 
        </div> 
               
         <p className="text-gray-400 text-left leading-8 ">Hi there! I am Amrit Ghimire! You might also know me as Amrit. I've been coding for over 1 years now. As a React Js  developer I've been doing awesome project with react js , next js and redux. Currently, I'm studying the computer science.</p>
        
         <button className="bg-gradient-to-r from-blue-600 to-blue-300 py-2 px-12 rounded-full font-medium focus:outline-none sm:w-56 ">
             Learn More
         </button>
         

       
        
         
        </div>
    )
}

export default Hero
