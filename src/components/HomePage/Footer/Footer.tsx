import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SocialMedia from './SocialMedia';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="mt-16 bg-black text-white text-center md:text-left">
            <div className="lg:w-[80%] w-[90%] mx-auto py-16 flex justify-between flex-col md:flex-row gap-4">
                <div>
                    <Link href="/"><Image className='mx-auto' src="/static/sdc-logo-black.png" height={400} width={400} alt="" /></Link>
                    {/* <h2 className="py-4">Envisioning a Bharat where everyone and anyone can ignite a transformation</h2>
                    <p className="py-1">CARBON NEGATIVE SINCE 2021</p> */}
                </div>
                <div>
                    <h1 className="custom-color-text text-[1.1rem] font-semibold">Our Products</h1>
                    <p className="py-1">Education</p>
                    <p className="py-1">Training</p>
                    <p className="py-1">Testing</p>
                </div>
                <div>
                    <h1 className="custom-color-text text-[1.1rem] font-semibold">Our Products</h1>
                    <p className="py-1">Education</p>
                    <p className="py-1">Training</p>
                    <p className="py-1">Testing</p>
                </div>
                <div>
                    <h1 className="custom-color-text text-[1.1rem] font-semibold">Contact Us</h1>
                    <p className="py-1">Education</p>
                    <p className="py-1">Training</p>
                    <p className="py-1">Testing</p>
                </div>
            </div>
            <div className="pt-4 pb-2 lg:w-[80%] w-[90%] mx-auto flex justify-between">
                <h1 className="text-[1.2rem]">© 2023. All Rights Reserved.</h1>
                <div>
                    <SocialMedia href="" Icon={InstagramIcon} />
                    <SocialMedia href="" Icon={LinkedInIcon} />
                </div>

            </div>
        </div>
    )
}

export default Footer;