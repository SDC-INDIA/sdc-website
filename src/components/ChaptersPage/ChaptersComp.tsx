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
                content='Welcome to the dynamic realm of SDC-SNIST, the epicenter of innovation at Sreenidhi Institute of Science and Technology. As the pioneer chapter of SDC across India, we unite tech enthusiasts, foster expertise in domains like web and app development, UI/UX, AI, and more. Engage in exhilarating hackathons, workshops, mentorship programs, and industry talks. Join us in sculpting the future of technology, where collaboration and creativity thrive. Ignite your potential with SDC-SNIST!'
            />
            <JoinChapter />
        </div>
    )
}

export default ChaptersComp