/* eslint-disable react/no-unescaped-entities */
import about from "@/src/constants/About";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="lg:flex lg:justify-around  lg:wrap pt-16" id="about">
            <motion.div
                className="lg:w-[100%] lg:mb-0 mb-8"
                // transition={{ duration: 1 }}
                // initial={{ opacity: 0, x: "100%" }}
                // whileInView={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: "-100%" }}
            >
                <h1 className="text-[4.5rem] custom-color-text font-extrabold mb-4">About us</h1>
                <p className="text-[1.2rem] text-justify">
                Student Developer Community is the nucleus of tech enthusiasts across India, igniting innovation and learning throughout the nation. <br></br>As a united force of tech enthusiasts, we ignite innovation and learning across the nation. <br></br><br></br>Our mission transcends boundaries, connecting students from every corner of India with immersive experiences. From hands-on technical workshops encompassing software development, data science, and AI, to electrifying hackathons that challenge and inspire. At SDC India, the possibilities are boundless. Together, let's code the future, create connections, and revolutionize technology. Welcome to the heartbeat of India's tech innovation.
                </p>
            </motion.div>
            <motion.div
                className=" "
                // transition={{ duration: 1 }}
                // initial={{ opacity: 0, x: "-100%" }}
                // whileInView={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: "100%" }}
            >
                {
                    about.map((content, index) => {
                        return <AboutCard key={index} data={content} />
                    })
                }
            </motion.div>
        </div>
    )
}

export default About