import domainData from "@/src/constants/Domain";
import Link from "next/link"
import { useState } from "react"
import Card from "./Card";
import cls from "classnames";
import styles from './Domain.module.css';
import { motion } from "framer-motion";


const Domain = () => {
    const [display, setDisplay] = useState(0);

    const isDisplay = (index: number) => {
        return true ? index === display : false;
    }

    return (
        <div className="mt-16 mb-12">
            <motion.div
            // transition={{ duration: 1 }}
            // initial={{ opacity: 0, y: "100%" }}
            // whileInView={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: "-100%" }}
            >
                <h1 className="text-[2.5rem] font-bold w-fit mx-auto custom-color-text mb-4">Our Domains</h1>
                {/* <div className="mx-auto w-fit my-12 flex justify-between lg:gap-4 gap-1 flex-wrap"> */}
                <div className="grid lg:grid-cols-5 grid-cols-3 gap-8">
                    {
                        domainData.map((data, index) => {
                            const currentStyle = isDisplay(index) ? styles.active : styles.normal;
                            const hiddenStyle = data.id === 'hidden' ? 'max-md:hidden' : '';
                            return (
                                <Link key={index} href={`#${data.id}`} onClick={() => setDisplay(index)} className={cls(currentStyle, hiddenStyle, "text-center text-[1rem] max-md:text-[0.8rem] p-4 rounded-lg font-semibold bg-orange-100")}>
                                    {data.title}
                                </Link>
                            )
                        })
                    }
                </div>
            </motion.div>

            {/* <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0, y: "-100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
            >
                {
                    domainData.map((domain, index) => {
                        if (isDisplay(index)) return <Card key={index} data={domain} />
                    })
                }
            </motion.div> */}

        </div>
    )
}

export default Domain