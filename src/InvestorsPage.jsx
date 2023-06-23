import "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { DetailButton } from "./DetailButton"
import { FadeIn } from "./FadeIn"

const InvestorsPageBody = () => {
    return (        
      <div className="h-full pt-20 flex text-left items-end justify-start w-3/4 lg:w-2/4">
          <p className="font-medium text-3xl lg:text-6xl text-black">
            Rivertail is leading the software development industry through AI.
          </p>
      </div>
    )
  }
  

  
const MainBanner = () => {
    return (
      <div className="w-screen bg-[url(/mesh_3.png)] brightness-75 bg-no-repeat bg-cover" style={{  backgroundPosition: "0 0"}}>
      <div className="px-10 bg-[rgba(241, 241, 241, 0.07)] w-full h-full" style={{backdropFilter: "blur(1000px)"}}>
        <div className="h-full flex flex-col place-content-between pb-20">
            <Header/>
            <FadeIn delay={4} duration={0.6}>
            <InvestorsPageBody/>
            <div className="pt-8 flex flex-col lg:flex-row gap-5">
                <div>
                    <button className="text-left px-4 py-2 text-md lg:text-xl rounded-full inline-flex items-center justify-center gap-3 bg-black hover:bg-slate-950 duration-100 ease-in-out">
                        See 1Q 2022 Earning Announcement <img src="/icons/arrow-right.svg" className="invert"></img>
                    </button>
                </div>
                <div>
                    <button className="text-left text-black px-4 py-2 text-md lg:text-xl rounded-full inline-flex items-center justify-center gap-3 border-2 border-black hover:bg-slate-950 duration-100 ease-in-out">
                        Explore 2022 Annual Report <img src="/icons/arrow-right.svg"></img>
                    </button>

                </div>
            </div>
            </FadeIn>
        </div>
      </div>
    </div>
  
    )
  }

  
export const InvestorsPage = () => {
    return (
        <div>
            <MainBanner/>
            <div className="w-full grid lg:grid-cols-2 items-center py-12 px-4 lg:px-12 justify-between gap-10">
                
                <div>
                    <img className="w-full p-5" src="/stock_info.png"/>
                    <desc className="pl-5 text-opacity-40 text-white">Updates every 16 miniutes, data provided by fintac.</desc>  
                </div>
                <div className="h-full p-3 items-start flex flex-col">
                    <h1 className="text-3xl font-medium">Earnings & Financials</h1>

                    <div className="pt-6 w-full">
                        <div className="grid w-full gap-1 justify-center grid-cols-1 lg:grid-cols-3">
                            <DetailButton title="Financial Reporting"/>
                            <DetailButton title="Latest annual report"/>
                            <DetailButton title="Dividends"/>
                            <DetailButton title="Stock charts"/>
                            <DetailButton title="Stock history"/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
