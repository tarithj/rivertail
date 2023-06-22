import { motion, LayoutGroup } from "framer-motion"
import React, { useState } from 'react'

export const LoadingWrapper = (props) => {
    const {ele, noLoading, title} = props
  
    if (noLoading) {
      return ele
    }
    const [scrollEnable, setScrollEnable] = useState(false)
    return (
      <div className={`relative h-screen w-screen ${!scrollEnable? "overflow-hidden": "overflow-scroll"}`}>
        <div hidden={scrollEnable} className="absolute z-10 top-0 left-0">
          <LoadingScreen title={title} onDone={()=>{setScrollEnable(true)}}/>
        </div>
        {ele}
      </div>
    )
  }

  export const LoadingScreen = (props) => {
    const {onDone, title} = props
    return (
      <LayoutGroup>
      <motion.div
      layout
      initial={{ opacity: "1" }}
      animate={{ opacity: "0" }}
      onAnimationComplete={onDone}
      transition={{ duration: 1, delay: 3, layout: { duration: 0.3 } }}
      className="bg-black w-screen h-screen gap-2 flex flex-col items-center justify-center">
        <motion.img 
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ times: [0, 0.4, 3.3], duration: 0.52, delay: 1.4, layout: { duration: 0.3 } }}
  
        className="h-14 aspect-square" src="/rivertail_logo.svg"></motion.img>
          
  
        
        <motion.img 
        initial={{ visibility: "visible", opacity: "0" }}
        animate={{  opacity: "1" }}
        transition={{ duration: 1, delay: 1.41 }}
  
        className="h-4 aspect-square invert" style={{visibility: "none"}} src="/icons/loading_blocks.svg"></motion.img>
  
        <motion.p 
        initial={{ display: "block", opacity: "0" }}
        animate={{ opacity: "1" }}
        transition={{ duration: 1, delay: 1.5 }}
  
        className="">{title}</motion.p>
  
  
      </motion.div>
      </LayoutGroup>
    )
  }
  
  