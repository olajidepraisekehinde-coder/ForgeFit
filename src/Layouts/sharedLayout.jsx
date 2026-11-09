import { useState } from 'react';
import Navbar from '../component/navbar'
import Sidebar from '../component/sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer';
import NotFound from '../pages/notFound';
import rooms from "../utilis/room";
import WhatsappButton from '../component/whatsapp';


export default function SharedLayout() {
    const [isOpen, setIsOpen] = useState(false);

    if (!rooms) {
        return (
            <NotFound />
        );
    }
    return (
        <div>
            <Navbar setIsOpen={setIsOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <WhatsappButton />
            <Outlet />
            <Footer />
        </div>
    )
}
