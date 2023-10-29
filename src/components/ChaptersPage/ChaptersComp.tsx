import ChapterContent from "./ChapterContent"
import JoinChapter from "./JoinChapter"


const ChaptersComp = () => {
    return (
        <div className="lg:w-[80%] w-[90%] mx-auto">
            <h1 className="custom-color-text get-center my-4 text-[2.5rem] font-semibold">Our Chapters</h1>
            <ChapterContent 
                image='/static/charminar.png'
                imagePosition='left'
                title='SDC HYDERABAD CHAPTER'
                content='The SDC Hyderabad Chapter is the central hub for overseeing all college chapters and organizing tech events in the Hyderabad region. With a dedicated team of 12+ board members comprising both students and tech professionals, we work tirelessly to cultivate a thriving tech community that greatly benefits students.'
            />
            <ChapterContent 
                image='/static/snist.jpg'
                imagePosition='right'
                title='SDC SNIST CHAPTER'
                content='The SDC Chapter at Sreenidhi Institute of Science and Technology inaugurated on 5th may 2023 and the chapter is a shining example of our commitment to fostering a thriving tech community within educational institutions. With over 15 dedicated board members, our chapter is recognized as one of the most active and influential chapters in the college, known for its exceptional work in spreading knowledge about technology and educating students in this dynamic field.'
            />
            <JoinChapter />
        </div>
    )
}

export default ChaptersComp