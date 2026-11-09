import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappButton() {
    return (
        <>
            <div className="fixed bottom-6 right-6 z-50 group">
                <span className=" absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm text-black opacity-0
                 transition-opacity duration-300 group-hover:opacity-100">
                    Chat with us
                </span>
                <a
                    href="https://wa.me/2348086157432?text=Hi%20Nestora!%20I'm%20interested%20in%20joining%20your%20hotel%20reservation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110">
                    <FaWhatsapp
                        className="font-bold" size={30} />
                </a>
            </div>
        </>
    )
}