import BlogCard from "./BlogCard"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/Auth/auth";
import { motion } from "framer-motion";


const Blogs = (props: any) => {
    const { blogs } = props;
    const [user, loading] = useAuthState(auth);
    return (
        <div>
            <motion.div
                // transition={{ duration: 0.7 }}
                // initial={{ opacity: 0, x: "20%" }}
                // whileInView={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: "-20%" }}
            >
                <h1 className="custom-color-text get-center my-4 text-[3rem] font-semibold">Blogs from us!</h1>
                {
                    user &&
                    <div className="flex justify-center">
                        <Link href="/blog/add_blog" className="bg-orange-500 text-white hover:bg-orange-400 px-4 py-3 rounded-xl font-semibold">Add Blog</Link>
                    </div>
                }
            </motion.div>
            <div className="flex justify-center gap-4 lg:gap-8 flex-wrap items-center">
                <BlogCard
                    image="/static/mission.png"
                    title='Mastering JavaScript in 30 Days: A Comprehensive Guide for Success'
                    topic='Web Development'
                    date='Nov 8, 2022'
                    duration='5 min read'
                    user={user}
                />
                {
                    blogs.docs && blogs.docs.map((item: any, index: any) => {
                        const blog = item.data();
                        return <BlogCard
                            key={index}
                            id={item.id}
                            image={blog.image}
                            title={blog.title}
                            topic={blog.description}
                            date={blog.date}
                            duration={blog.tag}
                            user={user}
                        />
                    })
                }

            </div>
        </div>
    )
}

export default Blogs