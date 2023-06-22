import { motion } from "framer-motion"
import React from "react"
export const PortofolioCard = (props) => {
    const {href, title, category} = props
    return (
      <motion.div transition={{ duration: 0.5 }} initial={{opacity: 0, y:15}} whileInView={{opacity: 1, y: 0}} viewport={{once:true}} onClick={()=>{document.location.pathname = "/amazon_case_study"}} className="cursor-pointer relative bg-[#e8e34ede] hover:opacity-90 duration-100 rounded-2xl text-black overflow-clip pt-2 flex flex-col gap-40">
        <div className="flex flex-col justify-between pb-20">
          <div className=" flex justify-between p-4">
            <span className={`font-semibold px-2 rounded-full border-2 border-black`}>{category}</span>
            <img src="/icons/triangle.svg" className="aspect-square h-7"></img>
          </div>
          <div className="h-70 flex flex-col items-center justify-center">
            <p className="p-4 font-semibold text-7xl text-center">Completed</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center pb-4 px-4">
              <p className="text-lg  align-middle">{title}</p>
              <img src="/icons/arrow-right-circle.svg" className="aspect-square h-7 invert"></img>
        </div>

      </motion.div>
    )
  }
  

export const PortofolioCardWorkInProgress = (props) => {
    const {title, category, variant} = props
  
    let bgcolor
    let borderEnabled = false
    switch (variant) {
      case "1": 
        bgcolor = "#8F8F8F"
        break
      case "2":
        bgcolor = "#171717"
        borderEnabled = true
        break
      default:
        bgcolor = "#00000"
        break
    }
  
  
    return (
      <motion.div transition={{ duration: 0.5 }} initial={{opacity: 0, y:15}} whileInView={{opacity: 1, y: 0}} viewport={{once:true}} style={{backgroundColor: bgcolor, borderWidth: borderEnabled? "2px" : 0, borderColor: "#f1f1f1"}} className="rounded-2xl relative marker:last:rounded-2xl overflow-clip pt-2 flex flex-col gap-40">
            <div className="flex flex-col justify-between pb-20">
              <div className=" flex justify-between p-4">
                <span className={`font-semibold px-2 rounded-full border-2 border-[${borderEnabled? "white": "black"}]`}>{category}</span>
                <img src="/icons/triangle.svg" className="aspect-square h-7 invert"></img>
              </div>
              <div className="h-70 flex flex-col items-center justify-center">
                <p className="p-4 font-semibold text-8xl text-center">Ongoing</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-center pb-4 px-4">
              <p className="text-lg text-white align-middle">{title}</p>
            </div>
        </motion.div>
    )
  }
  