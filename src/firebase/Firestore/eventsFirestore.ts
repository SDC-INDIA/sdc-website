import { database } from "../Firebase";
import { collection,  addDoc, getDocs } from "firebase/firestore";

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

