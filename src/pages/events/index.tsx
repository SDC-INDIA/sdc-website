import Events from "@/src/components/EventsPage/Events"
import { getEvents } from "@/src/firebase/Firestore/eventsFirestore"
import { useState } from "react"


const EventsPage = () => {
  const [ data, setData ] = useState({});
  let response = getEvents();
  response.then((res)=>{
    setData(res);
    console.log("data", data);
    
  })
  return (
    <div>
        <Events events={data} />
    </div>
  )
}

export default EventsPage