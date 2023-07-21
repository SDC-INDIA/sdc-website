import { motion } from "framer-motion";
import Image from "next/image"


const Card = (props: any) => {
    const { title, content, image } = props.data;

    return (
        <div className="flex justify-between items-center md:px-32 px-10 md:flex-row flex-col-reverse gap-8" >
            <motion.div animate={{ x: [-300, 0, 0] }} transition={{ ease: "easeOut", duration: 1.5 }} >
                <h1 className="w-fit text-[1.8rem] custom-color-text font-extrabold mb-8">{title}</h1>
                <p>{content}</p>
            </motion.div>
            <motion.div animate={{ x: [300, 0, 0] }} transition={{ ease: "easeOut", duration: 1.5 }}>
                <Image src={image} alt="" height={1000} width={1000} />
            </motion.div>
        </div>
    )
}

export default Card