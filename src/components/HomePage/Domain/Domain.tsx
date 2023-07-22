import domainData from "@/src/constants/Domain";
import Link from "next/link"
import { useState } from "react"
import Card from "./Card";
import cls from "classnames";
import styles from './Domain.module.css';


const Domain = () => {
    const [display, setDisplay] = useState(0);

    const isDisplay = (index: number) => {
        return true ? index === display : false;
    }

    return (
        <div className="mt-16 mb-12">
            <h1 className="text-[2.5rem] font-bold w-fit mx-auto custom-color-text">Domains Supported by us!</h1>
            <div className="mx-auto w-fit my-12 flex justify-between lg:gap-4 gap-1 flex-wrap">
                {
                    domainData.map((data, index) => {
                        const currentStyle = isDisplay(index) ? styles.active : styles.normal;
                        return <Link key={index} href={`#${data.id}`} onClick={() => setDisplay(index)} className={cls(currentStyle, "text-[1rem] p-4 rounded-lg font-semibold")}>{data.title}</Link>
                    })
                }
            </div>

            {
                domainData.map((domain, index) => {
                    if (isDisplay(index)) return <Card key={index} data={domain} />
                })
            }

        </div>
    )
}

export default Domain