import { deleteEvent } from "@/src/firebase/Firestore/eventsFirestore";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";



const EventCard = (props: any) => {
    const { image, title, description, date, user, id } = props;

    return (
        <motion.div
            className="my-6 flex lg:w-[80%] w-[90%] mx-auto flex-wrap shadow-xl p-6 rounded-lg bg-slate-200" whileHover={{ scale: 1.05 }}
            // transition={{ duration: 1 }}
            // initial={{ opacity: 0, x: "50%" }}
            // whileInView={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: "-50%" }}
        >
            <div className="flex flex-col justify-center flex-center">
                <div className="relative md:w-[500px] md:h-[300px] w-[300px] h-[200px] mx-auto">
                    <Image src={image} fill alt="" className="object-cover rounded-lg shadow-md" />
                </div>
            </div>
            <div className="flex justify-center md:w-[40%] w-fit mx-auto">
                <div className="flex flex-col justify-center my-8 text-center" >
                    <h1 className="text-[1.5rem] custom-color-text font-bold">{title}</h1>
                    <p className="text-[1.2rem] text-black text-justify">{description}</p>
                    {/* <p className="text-[1rem] text-black">{date}</p> */}
                    {
                        user && <button onClick={() => deleteEvent(id)} className="my-4 bg-orange-500 hover:bg-orange-400 rounded py-2 px-4 w-fit text-white mx-auto">Delete</button>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default EventCard