import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroIcons = (props: any) => {
    const { color, text, Icon, href } = props;
    return (
        <motion.div className={`w-fit mb-8 cursor-pointer bg-gradient-to-r from-${color}-500 to-${color}-700 hover:text-transparent bg-clip-text`} whileHover={{ translateY: -8 }}>
            <Link href={href}>
                <div className={`bg-gradient-to-r from-${color}-500 to-${color}-700 shadow-2xl w-[100px] h-[100px] rounded-3xl text-white flex justify-center items-center`}>
                    <Icon className='text-[40px]' />
                </div>
                <h1 className='mx-auto w-fit font-bold mt-2 text-[16px]'>{text}</h1>
            </Link>
        </motion.div>
    )
}

export default HeroIcons;