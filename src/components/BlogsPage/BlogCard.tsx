import { deleteBlog } from "@/src/firebase/Firestore/blogsFirestore";
import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';


const BlogCard = (props: any) => {
    const { image, title, topic, date, duration, user, id } = props;

    return (
        <Tilt>
            <motion.div
                className="rounded-2xl shadow-2xl bg-slate-300 w-[300px] min-h-[500px] py-6 px-8 mt-6 cursor-pointer" whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "20%" }}
            >
                <div className="relative w-[250px] h-[200px]">
                    <Image src={image} fill alt="" className="rounded-xl shadow-md object-center object-cover" />
                </div>
                <h1 className="text-[1.1rem] font-bold mt-6 mb-2">{title}</h1>
                <p className="my-4 border-white uppercase bg-red-200 text-red-700 text-[0.8rem] w-fit p-2 font-semibold">{topic}</p>
                {
                    user &&
                    <div className="my-2">
                        <button onClick={() => { deleteBlog(id) }} className="bg-orange-500 hover:bg-orange-400 rounded py-2 px-4 w-fit text-white mx-auto">Delete</button>
                    </div>
                }
                <p>{date} · {duration} read</p>
            </motion.div>
        </Tilt>
    )
}

export default BlogCard