import Image from "next/image"
import { motion } from 'framer-motion';
import HeroIcons from "./HeroIcons";
import heroData from "@/src/constants/Hero";


const Hero = () => {
  return (
    <div className="">
      <div className=" flex md:flex-row flex-col justify-between mt-12" >
        <motion.div
          className="flex flex-col justify-center"
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
        >
          <h1 className="text-[40px] lg:text-[50px] font-bold custom-color-text">Welcome to Student Developers Community!</h1>
          <h2 className="text-xl font-semibold text-left custom-color-text">Come fall in the loop of tech</h2>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
        >
          <motion.div
            className=""
            transition={{ repeat: Infinity, duration: 3 }}
            whileInView={{ y: [0, -15, 0] }}
          >
            <Image src="/static/hero_image.png" alt="" height={500} width={500} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="flex lg:justify-between justify-around gap-x-5 flex-wrap"
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
      >
        {
          heroData.map((data, index) => {
            return <HeroIcons key={index} data={data} />
          })
        }
      </motion.div>
    </div>
  )
}

export default Hero