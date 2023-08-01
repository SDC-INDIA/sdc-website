import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase";

export const uploadImage = (image: any, folder: string) => {
    const imageRef = ref(storage, `${folder}/${image.name}`);
    uploadBytes(imageRef, image)
        .then(() => {
            alert("Image uploaded")
        }).catch((err) => {
            console.log(err);
        })
}

export const getImages = (folder: string) => {
    const imageFolderRef = ref(storage, `${folder}/`);
    listAll(imageFolderRef)
        .then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item)
                    .then((url) => {
                        console.log(url);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            });
        })
}