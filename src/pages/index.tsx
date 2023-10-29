import About from "@/src/components/HomePage/About/About"
import Domain from "@/src/components/HomePage/Domain/Domain"
import Hero from "@/src/components/HomePage/Hero/Hero"
import Difference from "../components/HomePage/Difference/Difference"
// import Events from "@/src/components/EventsPage/Events"
// import { getEvents } from "@/src/firebase/Firestore/eventsFirestore"
// import { useState } from "react"

export default function Home() {
  // const [ data, setData ] = useState({});
  // let response = getEvents();
  // response.then((res)=>{
  //   setData(res);
  //   // console.log("data", data);
    
  // })
  return (
    <div>
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <Hero />
        <About />
        <Difference />
        <Domain />
        {/* <Events events={data} /> */}
      </div>
    </div>
  )
}
