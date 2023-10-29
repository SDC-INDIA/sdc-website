import ChaptersComp from "../components/ChaptersPage/ChaptersComp"
import Head from "next/head"

const chapters = () => {
  return (
    <div className="">
        <Head>
          <title>Chapters</title>
        </Head>
        <ChaptersComp />
    </div>
  )
}

export default chapters