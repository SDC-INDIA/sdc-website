import { getBlogs } from "@/src/firebase/Firestore/blogsFirestore";
import Blogs from "../../components/BlogsPage/Blogs";
import { useState } from "react";


const Blog = () => {
  const [blogData, setBlogData] = useState({});

  let data = getBlogs();
  data.then((response)=>{
    // console.log("data", response);
    setBlogData(response);
    console.log("data", blogData);
  })
  // console.log("Data", data.then(response=>response));
  
  
  // const fetchData = async () => {
  //   const response = await getBlogs();
  //   return response;
  // }
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const response = await getBlogs();
  //     // console.log(response.docs);
  //     if(response){
  //       setData(response.docs);
  //       console.log(data);
  //     }
  //   }
  //   fetchData();
  // }, [])
  return (
    <div className="">
      <Blogs blogs={blogData} />
    </div>
  )
}

export default Blog