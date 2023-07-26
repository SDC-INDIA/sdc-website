import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';


const BlogCard = (props: any) => {
    const { image, title, topic, date, duration } = props;
    return (
        <Tilt>
            <motion.div className="rounded-2xl shadow-2xl bg-slate-300 w-[300px] py-6 px-8 mt-6 cursor-pointer" whileHover={{ scale: 1.1 }}>
                <Image src={image} height={200} width={300} alt="" />
                <h1 className="text-[1.1rem] font-bold">{title}</h1>
                <p className="my-4 border-white uppercase bg-red-200 text-red-700 text-[0.8rem] w-fit p-2 font-semibold">{topic}</p>
                <p>{date} · {duration} read</p>
            </motion.div>
        </Tilt>
    )
}

export default BlogCard