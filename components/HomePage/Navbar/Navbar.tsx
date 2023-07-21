import { useState } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav className="flex items-center justify-between py-4 lg:w-[80%] w-[90%] mx-auto">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="logo">
                    <h1 className="text-3xl font-bold">SDC</h1>
                </div>
                <div className={`md:w-auto hidden lg:flex items-center justify-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li className="text-xl font-semibold"><Link className="hover:text-gray-500" href="">Our chapters</Link></li>
                        <li className="text-xl font-semibold"><Link className="hover:text-gray-500" href="">Blog</Link></li>
                        <li className="text-xl font-semibold"><Link className="hover:text-gray-500" href="">Events</Link></li>
                        <li className="text-xl font-semibold"><Link className="hover:text-gray-500" href="">Store</Link></li>
                        <li className="text-xl font-semibold"><Link className="hover:text-gray-500" href="">Careers</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-orange-400 hover:bg-orange-300 px-5 py-2 text-white rounded-full">Log in</button>
                    {
                        toggle ?
                            <MenuIcon onClick={handleToggle} className="text-3xl cursor-pointer lg:hidden" />
                            :
                            <CloseIcon onClick={handleToggle} className="text-3xl cursor-pointer lg:hidden" />
                    }
                    <div className={`${toggle ? "hidden" : "flex"} bg-white bg-gradient-to-r from-orange-400 via-orange-300 to-red-400 lg:hidden p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            <li className="font-semibold text-white"><Link className="hover:text-gray-500" href="">Our chapters</Link></li>
                            <li className="font-semibold text-white"><Link className="hover:text-gray-500" href="">Blog</Link></li>
                            <li className="font-semibold text-white"><Link className="hover:text-gray-500" href="">Events</Link></li>
                            <li className="font-semibold text-white"><Link className="hover:text-gray-500" href="">Store</Link></li>
                            <li className="font-semibold text-white"><Link className="hover:text-gray-500" href="">Careers</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar