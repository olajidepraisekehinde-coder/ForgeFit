import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../utilis/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar({ setIsOpen, search, setSearch }) {
    const [showSearch, setShowSearch] = useState(false);
    // const [name, setName] = useState("")
    const { darkMode, toggleTheme } = useTheme()
    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`flex justify-between items-center gap-5 fixed px-3 w-full md:px-5 h-20 py-5 fixed z-[55] bg-[#121311] shadow-2xl border-b border-gray-500 w-full"
                ${darkMode ? "bg-black" : "bg-black"}`}>

                {!showSearch && (
                    <div className="flex items-center justify-center gap-6 lg:hidden cursor-pointer px-1">

                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden text-4xl text-center" >

                            <GiHamburgerMenu
                                className="flex items-center justify-center text-white" />
                        </button>

                        <h1 className="text-3xl font-bold hover:text-[#0058CB] pointer-cursor md:hidden text-[#85A9FF]">ForgeFit</h1>
                    </div>
                )}

                <h1 className="text-3xl font-bold hover:text-[#0058CB] pointer-cursor hidden md:block text-[#85A9FF]">ForgeFit</h1>

                <div className="lg:block hidden">
                    <div className="flex gap-5 items-center text-md ">

                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Home
                        </NavLink>

                        <NavLink to="/program" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Program
                        </NavLink>

                        <NavLink to="/trainers" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Trainers
                        </NavLink>

                        <NavLink to="/membership" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Membership
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>About
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Contact
                        </NavLink>

                        <NavLink to="/gallery" className={({ isActive }) =>
                            isActive
                                ? "text-[#85A9FF] font-semibold"
                                : "text-white hover:text-[#85A9FF]"}>Gallery
                        </NavLink>

                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    {!showSearch ? (
                        <button className="py-2 rounded-lg w-9 h-9 flex items-center justify-center rounded-full hover:white/10 transition">
                            <CiSearch
                                onClick={() => setShowSearch(true)}
                                className="text-3xl text-white font-bold" />
                        </button>
                    ) : (
                        <div className="flex gap-2 items-center">

                            <input
                                type="text"
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="rounded-sm px-2 py-1" />

                            <LiaTimesSolid
                                className="text-xl"
                                onClick={() => setShowSearch(false)} />
                        </div>
                    )}

                    <button onClick={toggleTheme}
                        className=" py-2 rounded-lg w-9 h-9 flex lg:hidden items-center justify-center rounded-full hover:white/10 transition">
                        {darkMode ? (
                            <FiMoon
                                className=" text-[#85A9FF] text-3xl font-bold" />
                        ) : (<FiSun
                            className=" text-[#85A9FF] text-3xl font-bold" />)}
                    </button>

                    <button onClick={toggleTheme}
                        className=" py-2 rounded-lg hidden lg:block">
                        {darkMode ? (
                            <FiMoon
                                className=" text-[#85A9FF] text-2xl font-bold" />
                        ) : (<FiSun
                            className=" text-[#85A9FF] text-2xl font-bold" />)}
                    </button>

                    <Link to="/membership"> <button className="bg-[#85A9FF] hidden md:block font-bold text-md px-5 md:px-6 py-2 rounded-lg md:rounded-full text-black ">Join Now</button></Link>
                </div>

            </motion.nav>
        </>
    )
}

export default Navbar