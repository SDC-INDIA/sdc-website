import Image from "next/image"
import { motion } from 'framer-motion';
// Icons
import HeroIcons from "./HeroIcons";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HandshakeIcon from '@mui/icons-material/Handshake';

const Hero = () => {
  return (
    <div>
      <div className=" flex md:flex-row flex-col justify-between  mt-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-[40px] lg:text-[50px] font-bold custom-color-text">Welcome to Student Developers Community!</h1>
          <h2 className="text-xl font-semibold text-left custom-color-text">Come fall in a loop of tech</h2>
        </div>
        <motion.div
          className=""
          transition={{ repeat: Infinity, duration: 3 }}
          animate={{ y: [0, -15, 0] }}
        >
          <Image src="/static/hero_image.png" alt="" height={500} width={500} />
        </motion.div>
      </div>
      <div className="flex justify-between gap-x-5 flex-wrap">
        <HeroIcons
          href="#about"
          Icon={CardMembershipIcon}
          color="orange"
          text="Our Chapters"
        />
        <HeroIcons
          href="#about"
          Icon={AutoStoriesIcon}
          color="indigo"
          text="Blog"
        />
        <HeroIcons
          href="#about"
          Icon={CalendarMonthIcon}
          color="cyan"
          text="Events"
        />
        <HeroIcons
          href="#about"
          Icon={LocalGroceryStoreIcon}
          color="pink"
          text="Store"
        />
        <HeroIcons
          href="#about"
          Icon={HandshakeIcon}
          color="red"
          text="Careers"
        />
        <HeroIcons
          href="#about"
          Icon={ArrowDownwardIcon}
          color="purple"
          text="Get Started"
        />
      </div>
    </div>
  )
}

export default Hero