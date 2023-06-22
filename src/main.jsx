import React, { useState, useRef } from 'react'
import {createRoot} from 'react-dom/client'
import './main.css'
import { motion, useInView, LayoutGroup } from "framer-motion"
import "./gradient.scss"
import { ServicesCard } from './ServiceCard';
import { PortofolioCard, PortofolioCardWorkInProgress } from './PortofolioCard';
import { Footer } from "./Footer";
import { Header } from './Header';
import { TitleMarque } from './TitleMarque';
import { LoadingWrapper } from './LoadingScreen'
import { CareersPage } from './CareersPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { InvestorsPage } from './InvestorsPage'
import { ContactPage } from './ContactPage'
import { AmazonCaseStudyPage } from './AmazonCaseStudyPage'
import { FadeIn } from './FadeIn'





const HomePageBody = () => {
  return (     
    <FadeIn delay={4} duration={0.6}>
      <div className="h-full pt-20 flex text-left items-end justify-start w-3/4 lg:w-2/4">
          <p className="font-medium text-3xl lg:text-6xl text-black">
            Fast, reliable and specialized Software Development with Integrated AI.
          </p>
      </div>

    </FadeIn>
  )
}


const MainBanner = () => {
  return (
    <div className="w-screen bg-[url(/mesh_2.png)] brightness-75 bg-no-repeat bg-cover" style={{  backgroundPosition: "0 0"}}>
    <div className="px-10 bg-[rgba(241, 241, 241, 0.07)] w-full h-full" style={{backdropFilter: "blur(1000px)"}}>
      <div className="h-full flex flex-col place-content-between pb-20">
          
          <Header/>
          <HomePageBody/>
      </div>
    </div>
  </div>

  )
}


const App = () => {

  return (
    <div className="w-screen h-screen overflow-x-clip">
      <MainBanner/>
      

      <div className="flex flex-col gap-20 my-32">
        <div className="hidden lg:flex items-center justify-center">
          <img src="/users.svg" className="w-4/12"></img>
        </div>
        <p className='font-medium px-10 w-10/12 text-white text-3xl'>
          At Rivertail, we specialize in developing mission-critical AI software. Despite the cutting-edge nature of AI technology,
          our team excels at creating robust and reliable solutions for high-stakes environments.
          We leverage our expertise to engineer AI software that seamlessly integrates with complex systems, ensuring optimal performance and delivering impactful results.
        </p>
      </div>


      <div>
        <TitleMarque title="Services"/>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 my-10">
        <ServicesCard 
          iconURI="/icons/message-circle.svg" 
          title="Natural Language Processing"
          description="
            We specialize in NLP technologies, enabling software to understand and interact with human language,
            facilitating chatbots, language translation, sentiment analysis, and more.
          "/>
        <ServicesCard 
          iconURI="/icons/target.svg" 
          title="Machine Learning Algorithms"
          description="
          Our expertise lies in developing and optimizing machine learning algorithms that power intelligent systems and enable data-driven decision making.
        "/>
        <ServicesCard 
          iconURI="/icons/users.svg" 
          title="AI Consulting and Strategy"
          description="
          Our experts provide guidance and strategic consultation to help organizations identify AI opportunities, formulate AI strategies, and navigate the complexities of AI implementation
        "/>
        <ServicesCard 
          iconURI="/icons/eye.svg" 
          title="Computer Vision"
          description="
          Our team creates advanced computer vision applications, empowering systems to interpret and analyze visual data, including image recognition, object detection, and video analytics.        "/>
      </div>



      <div>
        <TitleMarque title="Portofolio"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-10 my-10">
        <PortofolioCard imageURI="/amazon_casestudy_image.png" title="Reliable AI assisted items returns processing for Amazon" category="E-COMMERCE"/>
        <PortofolioCardWorkInProgress title="On-device Harassment Filter for Whatsapp" cardNumber="1" variant="1" category="SOCIAL MEDIA"/>
        <PortofolioCardWorkInProgress title="Suspicious activity detection for Google Cloud" cardNumber="2" variant="2" category="SECURITY"/>
      </div>




      <div className="px-10 py-20 flex flex-col gap-3">
        <p className="text-3xl">
          "River Tail's AI software has been a game-changer for our business. The intuitive user experience and seamless interface have empowered our entire team, even those without technical backgrounds. By automating manual tasks, their integrated AI models have saved us valuable time. River Tail has revolutionized our decision-making process with fast, data-driven insights. I highly recommend Rivertail to any organization seeking to harness the power of AI technology."
        </p>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-12 bg-white"></div>
          Chief Technical Officer, Amazon
        </div>
      </div>


      <div className="relative w-full  flex flex-col ">
        <div className="absolute -top-20 right-0 z-10 gradient w-full h-full">
        </div>
        <p className="text-5xl font-semibold pt-10 px-10">
          Have a project?<br/> 
          We would love to work on it.
        </p>
        <button className="mx-10 mt-4 hover:opacity-80 duration-100 rounded-full border-white border-2 max-w-fit px-5 py-2 text-xl">Contact an expert</button>
        <div className="pt-32"/>
        <Footer/>
      </div>


    </div>
  )
}




const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingWrapper noLoading={false} title="HOME" ele={<App/>}/>,
  },
  {
    path: "/investors",
    element: <LoadingWrapper noLoading={false} title="INVESTORS" ele={<InvestorsPage/>}/>
  },
  {
    path: "/careers",
    element: <LoadingWrapper noLoading={false} title="CAREERS" ele={<CareersPage/>}/>
  },
  {
    path: "/contact",
    element: <LoadingWrapper noLoading={false} title="CONTACT" ele={<ContactPage/>}/>
  },
  {
    path: "/amazon_case_study",
    element: <LoadingWrapper noLoading={false} title="AMAZON CASE STUDY" ele={<AmazonCaseStudyPage/>}/>

  }
]);

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
