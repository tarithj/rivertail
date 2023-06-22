import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import "./serviceCard.scss"
import { ReactSVG } from "react-svg";
  

export const ServicesCard = (props) => {
    const {iconURI, title, description} = props

    return (
        <motion.div className="card" transition={{ duration: 0.5 }} initial={{opacity: 0, y:15}} whileInView={{opacity: 1, y: 0}} viewport={{once:true}}>
        <span className="icon">
            <ReactSVG className="" src={iconURI}/>

        </span>
        <h4 className="text-xl">{title}</h4>
        <p className="text-lg "> 
            {description}
        </p>
        <div className="shine"></div>
        <div className="background">
          <div className="tiles">
            <div className="tile tile-1"></div>
            <div className="tile tile-2"></div>
            <div className="tile tile-3"></div>
            <div className="tile tile-4"></div>
    
            <div className="tile tile-5"></div>
            <div className="tile tile-6"></div>
            <div className="tile tile-7"></div>
            <div className="tile tile-8"></div>
    
            <div className="tile tile-9"></div>
            <div className="tile tile-10"></div>
          </div>
    
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </motion.div>
    )
}
  