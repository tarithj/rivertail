import React from 'react'
import {useLocation} from 'react-router-dom'
import { FadeIn } from './FadeIn'

const goTo = (path) => {
  document.location.pathname = path
}

export const HomeOnlyHeader = (props) => {
  return (
    <FadeIn delay={4} duration={0.3}>
    <div className="py-10 flex flex-col lg:flex-row w-full lg:justify-between items-center">
      <img onClick={()=>{window.location.pathname = "/"}} className="cursor-pointer h-14 text-4xl font-semibold aspect-square invert" src="/rivertail_logo.svg"></img>
    </div>
    </FadeIn>
  )
}

export const Header = () => {
    const location = useLocation()
    return (
      <FadeIn delay={4} duration={1}>
      <div className="py-10 flex flex-col lg:flex-row w-full lg:justify-between items-center">
      <img onClick={()=>{window.location.pathname = "/"}} className="cursor-pointer h-14 text-4xl font-semibold aspect-square invert" src="/rivertail_logo.svg"></img>
        <div className='flex text-lg lg:text-2xl gap-2 text-black'>
          <button className={`hover:opacity-90 duration-100 underline-offset-4 ${location.pathname == "/"? "underline" : "opacity-75"}`} onClick={()=>{goTo("/")}}>
            Home  
          </button>
          <span className="text-4xl">•</span>
          <button className={`hover:opacity-90 duration-100 underline-offset-4 ${location.pathname == "/investors"? "underline" : "opacity-75"}`}  onClick={()=>{goTo("investors")}}>
            Investors  
          </button>
          <span className="text-4xl">•</span>
          <button className={`hover:opacity-90 duration-100 underline-offset-4 ${location.pathname == "/careers"? "underline" : "opacity-75"}`}  onClick={()=>{goTo("careers")}}>
            Careers  
          </button>  
          <span className="text-4xl">•</span>
          <button className={`hover:opacity-90 duration-100 underline-offset-4 ${location.pathname == "/contact"? "underline" : "opacity-75"}`}  onClick={()=>{goTo("contact")}}>
            Contact  
          </button>  
        </div>
      </div>
      </FadeIn>
    )
  }
  