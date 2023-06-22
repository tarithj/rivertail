import { React } from 'react'

export const DescriptionButton = (props) => {
    const {title, description} = props

    return (
        <div className="hover:bg-blue-200 hover:bg-opacity-5 text-left flex flex-col justify-between gap-3 text-xl font-medium w-full h-full bg-white bg-opacity-5 p-6 border-white border-2 border-opacity-5">
        <div className="flex flex-col gap-3">  
           <h1 className="text-2xl font-semibold">{title}</h1>
           <p className="text-lg font-medium text-opacity-90 text-white">
           {description}
           </p>
        </div>
        <div className="flex justify-end w-full gap-2 items-center">
           <img src="/icons/arrow-right.svg" className="invert h-full"></img>
        </div>
       </div>

    )
}