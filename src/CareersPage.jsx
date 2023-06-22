import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DescriptionButton } from "./DescriptionButton";
import { FadeIn } from "./FadeIn";

const CareersPageBody = () => {
    return (        
      <div className="h-full pt-20 flex text-left items-end justify-start w-3/4 lg:w-2/4">
          <p className="font-medium text-black text-3xl lg:text-6xl">
            Find your dream career, At Rivertail.
          </p>
      </div>
    )
}


const MainBanner = () => {
    return (
      <div className="w-screen bg-fixed bg-[url(/rivertale_hq.jpg)] bg-no-repeat bg-cover" style={{  backgroundPosition: "0 0"}}>
      <div className="px-10 bg-[rgba(241, 241, 241, 0.07)] w-full h-full" style={{backdropFilter: "blur(10px)"}}>
        <div className="h-full flex flex-col place-content-between pb-20">
            <Header/>
            <FadeIn delay={4} duration={0.3}>
            <CareersPageBody/>
            <div className="pt-8 flex gap-5">
                <button className="text-left px-4 py-2 text-xl rounded-full inline-flex items-center justify-center gap-3 bg-black hover:bg-slate-950 duration-100 ease-in-out">
                    See Openings <img src="/icons/arrow-right.svg" className="invert"></img>
                </button>
            </div>
            </FadeIn>
        </div>
      </div>
    </div>  
    )
}


export const CareersPage = () => {
    return (
        <div>
            <MainBanner/>


            <div className="py-20 px-10 flex flex-col text-center items-center gap-10">
                <div>
                    <h1 className="text-4xl font-semibold">Rivertail makes the 10 Best Companies to Work For</h1>
                    <p className="text-xl font-medium text-white text-opacity-40 font-body">For the fifth year in a row, we've made the list of World's best employers.</p>
                </div>

                <div>
                    <img className="h-52" src="/best_place_to_work_for.png">
                    </img>

                </div>
            </div>

            <div className="pt-32 pb-28 px-10 gap-5 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-semibold">
                        A place for your passion
                    </h1>
                    <p className="text-2xl text-white text-opacity-80 font-medium pr-4">
                        You'll solve and help build solutions for the hardest problems in the world, Health care to Fintech. Social media to robotics. We get
                        the most diverse clients which opens up new opportunities to everyone everyday. Join us and you will see how Rivertale isn't like any place you worked for before
                    </p>
                </div>
                <div >
                    <img className="p-2" src="/pexels_corp.jpg"/>
                </div>
            </div>



            <div className="px-10 pb-10 flex flex-col gap-10">
                <div>
                    <h1 className="text-5xl font-semibold">
                        Help us transform entire industries
                    </h1>

                </div>
                

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    <DescriptionButton title="AI" description="
                    Help companies of all sizes embrace industry-changing technologies like RAPIDS to analyze massive amounts of data to make better,
                    faster business decisions, and create solutions for automating manual time consuming tasks through AI.
                    "/>
                    <DescriptionButton title="UI/UX" description="
                    Build user experiences and interfaces for AI models (ex: utilities, mobile apps, desktop apps, dashboards) that makes them more accessible to be used by anyone.
                    "/>
                    <DescriptionButton title="Hardware" description="
                    Research and develop new hardware to accelerate and aid in AI and ML both for training and for model execution
                    "/>
                    <DescriptionButton title="Data Center" description="
                    Setup and maintain the ever growing number of machines in our data centers to provide reliable and secure AI and ML services for clients.
                    "/>
                </div>
            </div>


            <Footer/>

            
        </div>
    )
}