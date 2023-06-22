import { motion, useInView } from "framer-motion"
import Marquee from "react-fast-marquee";
import React, { useRef } from 'react'

export const TitleMarque = (props) => {
    const {title} = props;
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
  
    const text = (
      <div>
        <span className='text-white text-3xl px-2'>{title}</span>
        <span className="text-4xl">•</span>
      </div>
    )
    return (
      <div className="relative" ref={ref}>
          <motion.div
            initial={{ opacity: "1" }}
            animate={isInView? { opacity: "0" }: {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex items-center justify-center absolute top-0 left-0 z-[1] w-full h-full bg-[#16161A]">
            <motion.span 
              initial={{ opacity: "1" }}
              animate={isInView? { opacity: "1" }: {}}
              transition={{ duration: 0.1, delay: 1, ease: "easeInOut"}}
              className='flex items-center justify-center absolute top-0 left-0 z-[1] w-full h-full bg-[#16161A]'>
              <span className="text-4xl">{title}</span>
            </motion.span>
          </motion.div>
          <div 
            className="bg-white py-4 bg-opacity-5" onMouseOver={()=>{setHovered(true)}} onMouseOut={()=>{setHovered(false)}} >
            <Marquee autoFill={true} speed={30} className="opacity-80">
              {text}
            </Marquee>
            <Marquee autoFill={true} speed={20} className="opacity-70">
              {text}
            </Marquee>
            <Marquee autoFill={true} speed={10}  className="opacity-60">
              {text}
            </Marquee>
        </div>
  
      </div>
    )
  }
  