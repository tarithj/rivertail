import {React} from "react"
import {motion} from "framer-motion"

export const FadeIn = (props) => {
    const {children, delay, duration} = props
    return (
        <motion.div transition={{ duration: duration, delay: delay }} initial={{opacity: 0, y:15}} whileInView={{opacity: 1, y: 0}} viewport={{once:true}}>
            {children}
        </motion.div>
    )
}