import about from "@/src/constants/About";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="lg:flex lg:justify-center lg:wrap lg:gap-40 pt-16" id="about">
            <motion.div
                className="lg:w-[70%] lg:mb-0 mb-8"
                transition={{ duration: 1 }}
                initial={{ opacity: 0, x: "100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
            >
                <h1 className="text-[3rem] custom-color-text font-extrabold mb-8">A brief about us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente, dolore cumque officiis non odit reprehenderit impedit porro ad, iure corrupti veniam hic voluptatum praesentium? Quis atque dolorum ea dolorem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut, corporis ad unde dolore officiis sed esse maiores doloribus nostrum corrupti praesentium ipsa omnis, vel quod cumque velit, assumenda optio.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur cumque molestias fuga eveniet dignissimos. Nam amet error ducimus similique animi, nostrum accusantium suscipit ex ipsa temporibus vitae consectetur in esse?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse ex rem, quod natus, expedita consectetur deleniti minima illum voluptatem inventore facilis, magnam impedit dolores? A ea nihil minima veniam.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio molestiae similique nihil sunt totam autem perspiciatis cum est quaerat eius doloremque facilis nam ullam voluptate accusantium, assumenda vero ut laboriosam.
                </p>
            </motion.div>
            <motion.div
                className=""
                transition={{ duration: 1 }}
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
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