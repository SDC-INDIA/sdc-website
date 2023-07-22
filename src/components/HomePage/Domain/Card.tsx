import Image from "next/image"


const Card = (props: any) => {
    const { title, content, image } = props.data;

    return (
        <div className="flex justify-between items-center md:px-32 px-10 md:flex-row flex-col-reverse gap-8" >
            <div >
                <h1 className="w-fit text-[1.8rem] custom-color-text font-extrabold mb-8">{title}</h1>
                <p>{content}</p>
            </div>
            <div>
                <Image src={image} alt="" height={1000} width={1000} />
            </div>
        </div>
    )
}

export default Card