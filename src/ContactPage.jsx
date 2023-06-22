import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer"
import { DescriptionButton } from "./DescriptionButton";
import { FadeIn } from "./FadeIn";


const ContactsPageBody = () => {
    return (        
      <div className="h-full pt-20 flex text-left items-end justify-start w-3/4 lg:w-2/4">
          <div>

          <h1 className="font-medium text-black text-3xl lg:text-6xl">
            Contacts Rivertail
          </h1>
          <p className="pl-0.5 text-black text-opacity-80 text-lg">
            Get answers to questions about products, sales, support, training and services, and more.
          </p>
          </div>

          
          


      </div>
    )
}


const MainBanner = () => {
    return (
      <div className="w-screen bg-fixed bg-[url(/mesh_1.png)] brightness-75 bg-no-repeat bg-cover" style={{  backgroundPosition: "0 0"}}>
      <div className="px-10 bg-[rgba(241, 241, 241, 0.07)] w-full h-full" style={{backdropFilter: "blur(10px)"}}>
        <div className="h-full flex flex-col place-content-between pb-20">
            <Header/>
            <FadeIn delay={4} duration={0.3}>
            <ContactsPageBody/>
            </FadeIn>
        </div>
      </div>
    </div>  
    )
}

const SalesContactEntry = (props) => {
  const { location, phone_no } = props
  return (
    <div>
    <div className="flex justify-between py-3">
      <span>
        {location}
      </span>
      <span className="font-sans">
        {phone_no}
      </span>
    </div>
    <div className="h-[1px] w-full bg-white bg-opacity-20"/>
    </div>
  )
}


export const ContactPage = (props) => {
    const {} = props

    return (
      <div>
        <MainBanner/>

        <div className="grid grid-cols-1 lg:grid-cols-2">
        
          <div className="p-10">
            <h1 className="text-3xl font-semibold">
              Common Contact Numbers
            </h1>

            <div className="pt-5">
              <SalesContactEntry location="Australia" phone_no="+61 339 72 5429"/>
              <SalesContactEntry location="Germany" phone_no="+49 136 245 84 246"/>
              <SalesContactEntry location="Mexico" phone_no="+51 432 7524 133"/>
              <SalesContactEntry location="UK" phone_no="+44 542 352 2534"/>
              <SalesContactEntry location="Rest of World" phone_no="+44 634 323 1254"/>
            </div>
          </div>

          <div className="p-10 flex flex-col gap-10">

            <div>
              <h1 className="text-3xl">
                Technical assistance
              </h1>
              <p className="text-lg font-medium text-white text-opacity-60">
                Our support team offers support for managed infrastructure and software, use the contact number of the corresponding 
                location our software development services were provided to you from for a better experience.
              </p>
            </div>

            <div>
              <h1 className="text-3xl">
                Press and analyst enquires
              </h1>
              <p className="text-lg font-medium text-white text-opacity-60">
                Please contact <a href="mailto://pr@rivertail.com" className="underline-offset-2 underline opacity-90 hover:opacity-95">pr@rivertail.com</a>
              </p>
            </div>


          </div>

        </div>


        <div className="p-10">
            <h1 className="text-3xl font-semibold">
              Office Locations
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 pt-5">
              <DescriptionButton title="Rivertail Corporation" description={[
              "Rivertail (Pvt) Ltd.",
              <br/>,
              "789 Galle Road,",
              <br/>,
              "Colombo 00100,",
              <br/>,
              "Sri Lanka",
              ]}/>

              <DescriptionButton title="Rivertail Japan K.K" description={[
              "1-2-3 Minato-ku,",
              <br/>,
              "Tokyo 123-4567,",
              <br/>,
              "Japan,"
              ]}/>


              <DescriptionButton title="Rivertail GmbH" description={[
              "Musterstraße 123,",
              <br/>,
              "12345 Berlin,",
              <br/>,
              "Germany"
              ]}/>


            </div>
          </div>


        <Footer/>
      </div>
    )
}