import Image from "next/image"
import { motion } from 'framer-motion';
import HeroIcons from "./HeroIcons";
import heroData from "@/constants/Hero";


const Hero = () => {
  return (
    <div className="">
      <div className=" flex md:flex-row flex-col justify-between mt-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-[40px] lg:text-[50px] font-bold custom-color-text">Welcome to Student Developers Community!</h1>
          <h2 className="text-xl font-semibold text-left custom-color-text">Fall in the loop of tech</h2>
        </div>
        <motion.div
          className=""
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [0, -15, 0] }}
        >
          <Image src="/static/hero_image.png" alt="" height={500} width={500} />
        </motion.div>
      </div>
      <div className="flex lg:justify-between justify-around gap-x-5 flex-wrap">
        {
          heroData.map((data, index)=>{
            return <HeroIcons key={index} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default Hero