import { getBlogs } from "@/src/firebase/Firestore/blogsFirestore";
import Blogs from "../../components/BlogsPage/Blogs";


const blog = () => {

  return (
    <div className="">
      <Blogs />
    </div>
  )
}

export default blog