import { motion } from 'framer-motion';
import Link from 'next/link';
import cls from 'classnames';

const HeroIcons = (props: any) => {
    const { color, text, Icon, href } = props.data;
    const colorClass = `bg-gradient-to-r from-${color}-500 to-${color}-700`
    return (
        <motion.div className={cls(colorClass, "w-fit mb-8 cursor-pointer hover:text-transparent bg-clip-text")} whileHover={{ translateY: -8 }}>
            <Link href={href}>
                <div className={cls(colorClass, "shadow-2xl w-[100px] h-[100px] rounded-3xl text-white flex justify-center items-center")}>
                    <Icon className='text-[40px]' />
                </div>
                <h1 className='mx-auto w-fit font-bold mt-2 text-[16px]'>{text}</h1>
            </Link>
        </motion.div>
    )
}

export default HeroIcons;