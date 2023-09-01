import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialMedia from './SocialMedia';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="mt-16 bg-black text-white text-center md:text-left">
            <div className="lg:w-[75%] w-[90%] mx-auto py-16 flex justify-between flex-col md:flex-row gap-4">
                <div>
                    <Link href="/"><Image className='' src="/static/sdc-logo-black.png" height={400} width={400} alt="" /></Link>
                    {/* <h2 className="py-4">Envisioning a Bharat where everyone and anyone can ignite a transformation</h2>
                    <p className="py-1">CARBON NEGATIVE SINCE 2021</p> */}
                </div>
                {/* <div>
                    <h1 className="custom-color-text text-[1.5rem] font-semibold">Home</h1>
                    <p className="py-1 text-[1.1rem]">Education</p>
                    <p className="py-1 text-[1.1rem]">Training</p>
                    <p className="py-1 text-[1.1rem]">Testing</p>
                </div>
                <div>
                    <h1 className="custom-color-text text-[1.5rem] font-semibold">Events</h1>
                    <p className="py-1 text-[1.1rem]">Education</p>
                    <p className="py-1 text-[1.1rem]">Training</p>
                    <p className="py-1 text-[1.1rem]">Testing</p>
                </div> */}

                <div className="">
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">J</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">O</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">I</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">N</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">-</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">U</h1>
                    <h1 className="custom-color-text max-md:hidden text-[1.2rem] font-bold">S</h1>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <Link href="/" className="custom-color-text text-[1.5rem] w-fit font-semibold">Home</Link>
                    <Link href="/events" className="custom-color-text text-[1.5rem] w-fit font-semibold">Events</Link>
                    <Link href="/" className="custom-color-text text-[1.5rem] w-fit font-semibold">Contact Us</Link>
                    {/* <p className="py-1 text-[1.1rem]">Education</p>
                    <p className="py-1 text-[1.1rem]">Training</p>
                    <p className="py-1 text-[1.1rem]">Testing</p> */}
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