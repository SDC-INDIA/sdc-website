import { database } from "../Firebase";
import { collection,  addDoc, getDocs } from "firebase/firestore";

const collectionRef = collection(database, "Events");

export const addEvent = (title: string, description: string, date: string, image: string) => {
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

export const getEvents = async (setEvents: Function) => {
    const docs = await getDocs(collectionRef);
    const events = docs.forEach((doc)=>{
        console.log(doc.data());
        setEvents((prev: Array<Object>)=>{
            [ ...prev, { id: doc.id, ...doc.data() } ]
        });
    })
    return events;
}

