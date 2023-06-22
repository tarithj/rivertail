import React from 'react'

export const Footer = (props) => {
    return (
  
      <div className="border-t-2 border-white border-opacity-10 pt-10 px-20 pb-10 flex flex-col gap-10">
        <div className="flex flex-row gap-10 ">
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Resources</p>
            <div>
              <p><a href=''/>Case Studies</p>
              <p><a href=''/>Documentation</p>
              <p><a href=''/>Early Access</p>
              <p><a href=''/>Technical Guide</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">Company</p>
  
            <div>
              <p><a href=''/>Case Studies</p>
              <p><a href=''/>Documentation</p>
              <p><a href=''/>Early Access</p>
              <p><a href=''/>Technical Guide</p>
            </div>
          </div>
        </div>
  
        <div className="h-1 w-full bg-white bg-opacity-5"></div>
        <div className="flex items-center gap-3">
          <img className="h-10 text-4xl font-semibold aspect-square" src="/rivertail_logo.svg"></img>
          
          <div className="flex flex-col">
            <span className="text-sm font-light">Copyright ©2023 Tarith Jayasooriya</span>
            <span className="text-sm font-light">Made for "the aiodyssey" webdev competition by The Visakha Vidyalaya Ict Society</span>
          </div>
        </div>
      </div>
    )
  }
  
  