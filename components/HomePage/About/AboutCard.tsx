import Image from "next/image"


const AboutCard = (props: any) => {
    const { image, title, content } = props;
    return (
        <div className="bg-slate-300 rounded-3xl shadow-2xl mb-12 p-6">
            <div className="relative w-24 h-24 float-left">
                <Image src={image} alt="" fill />
            </div>
            <h1 className="text-[2rem] font-semibold">{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default AboutCard