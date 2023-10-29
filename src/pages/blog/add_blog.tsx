import BlogForm from "@/src/components/BlogsPage/BlogForm"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/Auth/auth";
import Error from 'next/error'
import Head from "next/head";


const AddBlog = () => {
  const [user, loading] = useAuthState(auth);
  if (!user) {
    return <Error statusCode={404} />
  }
  return (
    <div>
      <Head>
          <title>Add Event</title>
      </Head>
      <BlogForm />
    </div>
  )
}

export default AddBlog