// import { useState } from "react"
// import { Link } from "react-router-dom"
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setIsOpen, isOpen }) {
    return (
        <>
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-[55] lg:hidden"></div>
            )}

            <div className={`fixed top-0 left-0 h-full w-64 md:w-96 text-white shadow-2xl bg-black p-5 md:px-20 lg:hidden z-[60] transition-transform duration-300  ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {isOpen && (
                    <div >
                        <LiaTimesSolid className="text-4xl"
                            onClick={() => setIsOpen(false)} />
                    </div>
                )}

                <nav className="flex justify-center text-center text-xl flex-col gap-6 p-6 font-bold mx-auto">

                    <NavLink onClick={() => setIsOpen(false)} to="/" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Home
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/program" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Program
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/trainers" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Trainers
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/membership" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Membership
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/about" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>About
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/contact" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Contact
                    </NavLink>

                    <NavLink onClick={() => setIsOpen(false)} to="/gallery" className={({ isActive }) =>
                        isActive
                            ? "text-[#85A9FF]"
                            : "text-white hover:text-[#85A9FF]"}>Gallery
                    </NavLink>
                    <Link to="/membership"> <button className="bg-[#85A9FF] md:hidden font-bold text-lg px-10 md:px-6 py-2 rounded-lg md:rounded-full text-black ">Join Now</button></Link>

                </nav>
            </div>
        </>
    )

}