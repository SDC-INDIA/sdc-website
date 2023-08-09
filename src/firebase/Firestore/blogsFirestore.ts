import { database } from "../Firebase";
import { collection,  addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const FOLDER = "Blogs";
const collectionRef = collection(database, FOLDER);

export const addBlog = (title: string, description: string, date: string, image: any, tag: string) => {
    addDoc(collectionRef, {
        title,
        description,
        date,
        image,
        tag
    })
        .then(() => {
            alert("Data added");
            window.location.href = "/blog"
        })
        .catch((err) => {
            alert(err);
        });
}

export const getBlogs = async () => {
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

export const deleteBlog = async (id: string) => {
    await deleteDoc(doc(database, FOLDER, id));
    // console.log("Blog deleted");
}