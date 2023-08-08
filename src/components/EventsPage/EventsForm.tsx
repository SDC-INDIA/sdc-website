import { useState } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/src/firebase/Firebase";
import { addEvent } from "@/src/firebase/Firestore/eventsFirestore";



const EventsForm = () => {
    const [image, setImage] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleImage = (e: any) => {
        if (e.target.files) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = (data: any, e:React.FormEvent) => {
        e.preventDefault();
        const imageRef = ref(storage, `Events/${data.name}`);
        const uploadTask = uploadBytesResumable(imageRef, data);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const url = downloadURL;
                    addEvent(title, description, "0123465", url);
                    alert("Event submitted");
                });
            }
        )
    }

    return (
        <div className="lg:w-[80%] w-[90%] mx-auto">
            <h1 className="custom-color-text w-fit mx-auto text-[2rem] font-semibold">Add an event</h1>
            <div className="rounded-2xl bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-2xl w-[500px] p-4 mx-auto my-4">
                <form onSubmit={(e)=>handleSubmit(image,e)}>
                    <p className="text-[1.2rem] font-semibold">Title:</p>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="" required />
                    <p className="mt-4 text-[1.2rem] font-semibold">Image:</p>
                    <input onChange={(e) => handleImage(e)} type="file" name="image" id="image" accept="image/x-png,image/gif,image/jpeg" required />
                    <p className="mt-4 text-[1.2rem] font-semibold">Description:</p>
                    <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="" maxLength={40} required />
                    <br />
                    <input className="cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l px-4 py-2 mt-3 rounded-xl text-white text-[1.2rem] font-semibold w-fit" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default EventsForm