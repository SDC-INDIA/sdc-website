import { useState } from "react"



const BlogForm = () => {
    const [ image, setImage ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ tag, setTag ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div className="lg:w-[80%] w-[90%] mx-auto">
            <h1 className="custom-color-text w-fit mx-auto text-[2rem] font-semibold">Add an event</h1>
            <div className="rounded-2xl bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 shadow-2xl w-[500px] p-4 mx-auto my-4">
                <p className="text-[1.2rem] font-semibold">Title:</p>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="" />
                <p className="mt-4 text-[1.2rem] font-semibold">Image:</p>
                <input onChange={(e)=>setImage(e.target.value)} type="file" name="image" id="image" accept="image/x-png,image/gif,image/jpeg" />
                <p className="mt-4 text-[1.2rem] font-semibold">Tag:</p>
                <input onChange={(e) => setTag(e.target.value)} type="text" name="tag" id="" maxLength={40} />
                <p className="mt-4 text-[1.2rem] font-semibold">Description:</p>
                <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="" maxLength={40} />
                <br />
                <input onClick={handleSubmit} className="cursor-pointer bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l px-4 py-2 mt-3 rounded-xl text-white text-[1.2rem] font-semibold w-fit" type="submit" value="Submit" />
            </div>
        </div>
    )
}

export default BlogForm