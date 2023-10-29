import Image from "next/image"


const AboutCard = ({ data }: any) => {
    const { image, title, content } = data;
    return (
        <div className="md:ml-auto md:mr-0 bg-slate-300 rounded-3xl shadow-2xl mb-12 md:mt-8 p-6 w-full md:w-[90%] flex justify-center">
            {/* <div className="flex flex-col justify-center"></div> */}
            <div className="relative lg:w-56 lg:h-24 w-full h-40 my-auto">
                <Image src={image} alt="" fill />
            </div>
            <div className="">
                <h1 className="text-[1.1rem] font-semibold">{title}</h1>
                <p className="text-[0.8rem] lg:text-[1rem]">{content}</p>
            </div>
        </div>
    )
}

export default AboutCard