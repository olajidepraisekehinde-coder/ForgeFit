import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import Button from "./buttons";

import { FaInfoCircle, FaPhone } from "react-icons/fa";
import { TbBell } from "react-icons/tb";
import { MdEventAvailable, MdHotel } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";

export default function Sidebar({ isOpen, setIsOpen }) {
    const links = [
        {
            name: "Rooms",
            path: "/room",
            icon: <MdHotel />,
        },
        {
            name: "About",
            path: "/about",
            icon: <FaInfoCircle />,
        },
        {
            name: "Services",
            path: "/service",
            icon: <TbBell />,
        },
        {
            name: "Founder",
            path: "/founder",
            icon: <FaUserTie />,
        },
        {
            name: "Booking",
            path: "/booking",
            icon: <MdEventAvailable />,
        },
        {
            name: "Contact",
            path: "/contact",
            icon: <FaPhone />,
        },
    ];

    return (
        <>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
                />
            )}

            <aside
                className={`lg:hidden group overflow-x-hidden overflow-y-auto fixed top-0 left-0 h-full z-[60] bg-[#B9A38B] shadow-2xl flex flex-col transition-all duration-300 ease-in-out w-20 hover:w-64 ${isOpen? "translate-y-0"  : "-translate-y-full"}`} >

                <div className="h-20 flex items-center justify-center mt-20 mb-5">

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-3xl bg-[#2C1F33]/50 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        <LiaTimesSolid />
                    </button>

                </div>

                <nav className="flex flex-col gap-5 px-3 space-y-2">

                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="group flex items-center gap-5 h-12 px-2 rounded-xl py-5 hover:bg-black/10 hover:text-[#6C1F33] transition" >

                            <span className="text-3xl min-w-[40px] flex justify-center text-[#2C1F33] group-hover:text-[#6C1F33]"> 
                                {link.icon}
                            </span>

                            <span className="opacity-0 group-hover:opacity-100 ml-4 whitespace-nowrap transition-opacity duration-200">
                                {link.name}
                            </span>

                        </Link>
                    ))}

                </nav>

                <div
                    className="mt-auto px-5 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Button />
                </div>

            </aside>
        </>
    );
}