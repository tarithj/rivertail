import "react"
import { HomeOnlyHeader, Header } from "./Header"
import { Footer } from "./Footer"
import { FadeIn } from "./FadeIn"


const AmazonCaseStudyPageBody = () => {
    return (        
      <div className="h-full pt-20 flex text-left items-end justify-start w-3/4 lg:w-2/4">
          <div>

          <h1 className="font-medium text-black text-3xl lg:text-6xl">
            Amazon Case Study
          </h1>
          </div>

          
          


      </div>
    )
}


const MainBanner = () => {
    return (
      <div className="w-screen invert bg-fixed bg-[url(/mesh_1.png)] brightness-75 bg-no-repeat bg-cover" style={{  backgroundPosition: "0 0"}}>
      <div className="px-10 bg-[rgba(241, 241, 241, 0.07)] w-full h-full" style={{backdropFilter: "blur(10px)"}}>
        <div className="h-full flex flex-col place-content-between pb-20">
            <HomeOnlyHeader/>
            <FadeIn delay={4} duration={0.3}>
            <AmazonCaseStudyPageBody/>
            </FadeIn>
        </div>
      </div>
    </div>  
    )
}

export const AmazonCaseStudyPage = () => {
    const HeadingClassName = "text-4xl font-semibold"
    const ParagraphClassName = "pt-3 text-xl text-white text-opacity-95 "
    return (
        <div>
            <MainBanner/>
            <div className="p-10 flex flex-col gap-10">
                <div className="w-11/12">
                    <h1 className={HeadingClassName}>Introduction</h1>
                    <p className={ParagraphClassName}>
                        In this case study, we explore how Rivertale,
                        revolutionized returns processing for Amazon, enhancing efficiency, accuracy, and customer satisfaction.
                        By leveraging cutting-edge AI technology, Rivertale developed a comprehensive solution that transformed the returns process into a seamless and hassle-free experience.
                    </p>
                </div>
                <div className="w-11/12">
                    <h1 className={HeadingClassName} >Challenge</h1>
                    <p className={ParagraphClassName}>
                    Amazon faced significant challenges in handling the high volume of returns, which resulted in delays, errors, and dissatisfied customers.
                    The existing manual system struggled to keep up with the pace of returns, leading to inefficiencies, increased costs, and a negative impact on the customer experience.
                    </p>
                </div>

                <div className="w-11/12">
                    <h1 className={HeadingClassName}>Solution</h1>
                    <p className={ParagraphClassName}>
                    Rivertale deployed advanced AI technology to create a reliable and efficient returns processing system for Amazon.
                    The solution incorporated intelligent automation, machine learning algorithms, and natural language processing capabilities to streamline the entire process.
                    
                        <ol className="list-decimal list-inside">
                            <li className="pt-5">
                                Efficiency Boost
                            </li>
                            <p className="pl-5 pt-3">
                                The AI-driven automation reduced processing time by 50%, allowing Amazon to handle a larger volume of returns efficiently.
                            </p>

                            <li className="pt-5">
                                Enhanced Accuracy
                            </li>
                            <p className="pl-5 pt-3">
                                The intelligent product assessment and routing algorithms resulted in a 30% reduction in errors and improved decision-making accuracy.
                            </p>

                            <li className="pt-5">
                                Cost Reduction
                            </li>
                            <p className="pl-5 pt-3">
                                The streamlined process and optimized inventory management minimized waste and reduced operational costs by 20%.
                            </p>

                            <li className="pt-5">
                                Customer Satisfaction
                            </li>
                            <p className="pl-5 pt-3">
                                With proactive and informative communication, customer satisfaction scores rose by 15%. Customers appreciated the improved transparency and faster resolution times.With proactive and informative communication, customer satisfaction scores rose by 15%. Customers appreciated the improved transparency and faster resolution times.
                            </p>
                        </ol>
                        
                    </p>

                    <h1 className={HeadingClassName + " pt-10"}>Conclusion</h1>
                    <p className={ParagraphClassName}>
                        Rivertale's integrated AI solution revolutionized returns processing for Amazon, addressing challenges related to efficiency, accuracy, and customer satisfaction. By leveraging advanced technologies, Rivertale transformed the returns process into a reliable, seamless, and cost-effective operation. With these improvements, Amazon solidified its reputation as a customer-centric e-commerce platform, driving continued growth and success.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}