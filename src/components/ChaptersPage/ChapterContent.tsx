import Image from "next/image"

const ChapterContent = (props: any) => {
    const { image, imagePosition, title, content } = props;

    const imageAtLeft = imagePosition === "left";

    return (
        <div className={`flex justify-around lg:flex-row ${imageAtLeft ? 'flex-col' : 'flex-col-reverse'} flex-col gap-0 rounded-2xl shadow-xl mb-6 p-8 bg-slate-300`}>
            {
                imageAtLeft && <>
                    <div className="relative mr-4 lg:w-[1000px] lg:h-[350px] w-full h-[400px]">
                        <Image src={image} fill alt="" />
                    </div>
                </>
            }

            <div className="flex flex-col justify-center text-center my-2 max-md:items-center lg:text-left">
                <h1 className="mb-4 text-[2rem] font-bold custom-color-text w-fit">{title}</h1>
                <p className="lg:text-[1.2rem] text-[1rem] text-justify">{content}</p>
            </div>

            {
                !imageAtLeft && <>
                    <div className="relative ml-4 lg:w-[1000px] lg:h-[350px] w-full h-[400px]">
                        <Image src={image} fill alt="" />
                    </div>
                </>
            }
        </div>
    )
}

export default ChapterContent