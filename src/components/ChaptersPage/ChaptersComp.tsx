import ChapterContent from "./ChapterContent"
import JoinChapter from "./JoinChapter"


const ChaptersComp = () => {
    return (
        <div className="lg:w-[80%] w-[90%] mx-auto">
            <h1 className="custom-color-text get-center my-4 text-[3rem] font-semibold">More About SDC</h1>
            <ChapterContent 
                image='/static/hero_image.png'
                imagePosition='left'
                title='SDC Hyderabad'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias totam suscipit enim eligendi. Dolorem ad itaque accusantium, totam tempore iusto vero soluta excepturi enim voluptates officiis assumenda? Nesciunt, eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias totam suscipit enim eligendi. Dolorem ad itaque accusantium, totam tempore iusto vero soluta excepturi enim voluptates officiis assumenda? Nesciunt, eum?'
            />
            <ChapterContent 
                image='/static/hero_image.png'
                imagePosition='right'
                title='SDC SNIST'
                content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias totam suscipit enim eligendi. Dolorem ad itaque accusantium, totam tempore iusto vero soluta excepturi enim voluptates officiis assumenda? Nesciunt, eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias totam suscipit enim eligendi. Dolorem ad itaque accusantium, totam tempore iusto vero soluta excepturi enim voluptates officiis assumenda? Nesciunt, eum?'
            />
            <JoinChapter />
        </div>
    )
}

export default ChaptersComp