import Image from "next/image"
import Link from "next/link"

const JoinChapter = () => {
    return (
        <div className="w-[80%] mx-auto ">
            <h1 className=" get-center text-[3rem] font-semibold my-8">Join Us</h1>
            <div className=" flex justify-center items-center lg:gap-32 lg:flex-row flex-col">
                <div className="">
                    <Image src='/static/join.jpg' alt="" width={300} height={300} />
                </div>
                <div className="flex flex-col justify-center gap-1 items-center">
                    <p className="text-[1.5rem] font-bold">To Apply:</p>
                    <Link href='https://forms.gle/GgTUcLNVs6gHKD726' target="_blank" className="bg-green-400 text-white rounded-2xl text-[1rem] font-semibold p-4 mt-4 w-fit">Click Here!</Link>
                </div>
            </div>
        </div>
    )
}

export default JoinChapter