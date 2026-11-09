// import { FaWhatsapp } from "react-icons/fa6";
import Footer from "../Component/Layout/footer";
import Navbar from "../Component/Layout/navbar";
import Sidebar from "../Component/Layout/sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import WhatsappButton from "../whatsappButton";

export default function SharedLayout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <>
                <Navbar setIsOpen={setIsOpen} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                <Outlet />
                <WhatsappButton />
                <Footer />
            </>

        </>
    )
}