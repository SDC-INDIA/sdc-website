import blogData from "@/src/constants/Blogs"
import BlogCard from "./BlogCard"
import Link from "next/link"


const Blogs = () => {
    return (
        <div>
            <h1 className="custom-color-text get-center my-4 text-[3rem] font-semibold">Blogs from us!</h1>
            <div className="flex justify-center">
                <Link href="/blog/add_blog" className="bg-orange-500 text-white hover:bg-orange-400 px-4 py-3 rounded-xl font-semibold">Add Blog</Link>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8 flex-wrap items-center">
                <BlogCard
                    image="/static/mission.png"
                    title='Mastering JavaScript in 30 Days: A Comprehensive Guide for Success'
                    topic='Web Development'
                    date='Nov 8, 2022'
                    duration='5 min read'
                />
                {
                    blogData.map((data, index) => {
                        return <BlogCard
                            key={index}
                            image={data.image}
                            title={data.title}
                            topic={data.topic}
                            date={data.date}
                            duration={data.duration}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default Blogs