import { database, storage } from "../Firebase";
import { collection,  addDoc, getDocs } from "firebase/firestore";
import { uploadImage, getImages } from "./imagesFirestore";

const FOLDER = "Blogs";
const collectionRef = collection(database, FOLDER);

export const addBlog = (title: string, description: string, date: string, image: string, tag: string) => {
    uploadImage(image, FOLDER);
    getImages(FOLDER);
    // addDoc(collectionRef, {
    //     title,
    //     description,
    //     date,
    //     image,
    //     tag
    // })
    //     .then(() => {
    //         alert("Data added");
    //     })
    //     .catch((err) => {
    //         alert(err);
    //     });
}

