import Image from "next/image"


const AboutCard = ({ data }: any) => {
    const { image, title, content } = data;
    return (
        <div className="bg-slate-300 rounded-3xl shadow-2xl mb-12 md:mt-8 p-6 w-[90%]">
            <div className="relative w-24 h-24 float-left md:mb-4 mb-8">
                <Image src={image} alt="" fill />
            </div>
            <h1 className="text-[1.1rem] font-semibold">{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default AboutCard