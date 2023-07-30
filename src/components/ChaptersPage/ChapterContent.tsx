import Image from "next/image"

const ChapterContent = (props: any) => {
    const { image, imagePosition, title, content } = props;

    const imageAtLeft = imagePosition === "left";

    return (
        <div className={`flex justify-between lg:gap-10 lg:flex-row ${imageAtLeft ? 'flex-col' : 'flex-col-reverse'} flex-col gap-0 rounded-2xl shadow-xl mb-6 p-4 bg-slate-300`}>
            {
                imageAtLeft && <>
                    <div className="relative mx-auto lg:w-[2000px] lg:h-[500px] w-[300px] h-[400px]">
                        <Image src={image} fill alt="" />
                    </div>
                </>
            }

            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-4 text-[2rem] font-semibold custom-color-text">{title}</h1>
                <p className="lg:text-[1.2rem] text-[1rem]">{content}</p>
            </div>

            {
                !imageAtLeft && <>
                    <div className="relative mx-auto lg:w-[2000px] lg:h-[500px] w-[300px] h-[400px]">
                        <Image src={image} fill alt="" />
                    </div>
                </>
            }
        </div>
    )
}

export default ChapterContent