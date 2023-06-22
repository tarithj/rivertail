import {React} from 'react'

export const DetailButton = (props) => {
    const {title} = props
    return (
        <button className="hover:bg-blue-200 hover:bg-opacity-5 flex items-center justify-center gap-3 text-xl font-medium w-full h-full bg-white bg-opacity-5 p-6 border-white border-2 border-opacity-5">
        {title}
        <img src="/icons/arrow-right.svg" className="invert"></img>
        </button>
    )
}
