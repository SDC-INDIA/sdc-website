import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialMedia from './SocialMedia';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="mt-16 bg-black text-white text-center md:text-left">
            <div className="lg:w-[75%] w-[90%] mx-auto pt-8 flex justify-between flex-col md:flex-row gap-4">
                <div>
                    <Link href="/"><Image className='' src="/static/sdc-logo-black.png" height={400} width={400} alt="" /></Link>
                </div>
                <div className="flex justify-around gap-28 lg:gap-60">
                    <div className='flex flex-col gap-4 mt-4 justify-center'>
                        <Link href="#" className="custom-color-text text-[1.5rem] w-fit font-semibold">Home</Link>
                        <Link href="/events" className="custom-color-text text-[1.5rem] w-fit font-semibold">Events</Link>
                    </div>
                    <div className="flex flex-col gap-2 justify-center">
                        <Link href="#" className="custom-color-text text-[1.5rem] w-fit font-semibold">Contact Us:</Link>
                        <p className="custom-color-text text-[1rem] w-fit font-semibold">+917277744777</p>
                        <p className="custom-color-text text-[1rem] w-fit font-semibold">hello@sdcindia.tech</p>
                    </div>
                </div>
            </div>


            <div className="pt-4 pb-2 lg:w-[75%] w-[90%] mx-auto flex justify-between">
                <h1 className="text-[1.3rem]">© 2023. All Rights Reserved.</h1>
                <div>
                    <SocialMedia href="" Icon={InstagramIcon} />
                    <SocialMedia href="" Icon={LinkedInIcon} />
                </div>

            </div>
        </div>
    )
}

export default Footer;