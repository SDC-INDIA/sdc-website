import { database } from "../Firebase";
import { collection,  addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const collectionRef = collection(database, "Events");

export const addEvent = (title: string, description: string, date: string, image: any) => {
    addDoc(collectionRef, {
        title,
        description,
        date,
        image
    })
        .then(() => {
            alert("Data added");
            window.location.href = "/events"
        })
        .catch((err) => {
            alert(err);
        });
}

export const getEvents = async () => {
    const response = await getDocs(collectionRef);
    return response;
    // console.log("response", response.docs[0].data());
    
    // getDocs(collectionRef)
    // .then((response) => {
    //     // response.docs.map((item)=>{
    //     //     console.log(item.data());
    //     // })
    //     return response;
    // })
}

export const deleteEvent= async (id: string) => {
    await deleteDoc(doc(database, "Events", id));
    // console.log("Event deleted");
}
