import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="lg:w-[80%] w-[90%] flex md:flex-row flex-col justify-between mx-auto mt-12">
        <div className="flex flex-col justify-center">
            <h1 className="text-[40px] lg:text-[50px] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Welcome to Student Developers Community!</h1>
            <h2 className="text-xl font-semibold text-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Come fall in a loop of tech</h2>
            <Link href="" className="w-fit bg-orange-400 hover:bg-orange-300 my-4 px-5 py-2 text-white rounded-full">
              Get Started
            </Link>
        </div>
        <div className="">
            <Image src="/static/hero_image.png" alt="" height={800} width={800} />
        </div>
    </div>
  )
}

export default Hero