import { Link } from "react-router-dom";
import Button from "./buttons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ setIsOpen }) {

    return (
        <div className="">
            <nav className="fixed text-[#2C1F33] z-100 top-0 left-0 w-full lg:px-10 px-4 py-4 bg-[#B9A38B] flex justify-between items-center shadow-2xl">

                <button
                    onClick={() => setIsOpen(true)}
                    className="lg:hidden text-4xl text-center" >

                    <GiHamburgerMenu
                    />
                </button>

                <div className="tracking-wide m-auto lg:m-1">
                    <Link to="/"><h1 className="text-3xl uppercase font-extrabold tracking-[4px]">Nestora</h1></Link>
                </div>

                <div className="hidden lg:block">
                    <div className="flex gap-6 items-center text-lg font-medium ">

                        <Link className="hover:text-[#6C1F33]" to="/room">Rooms</Link>
                        <Link className="hover:text-[#6C1F33]" to="/about">About</Link>
                        <Link className="hover:text-[#6C1F33]" to="/service">Services</Link>
                        <Link className="hover:text-[#6C1F33]" to="/founder">Founder</Link>
                        <Link className="hover:text-[#6C1F33]" to="/booking">Booking</Link>
                        <Link className="hover:text-[#6C1F33]" to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Button />
                </div>
            </nav>

        </div>
    )
}
