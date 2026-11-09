import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok, } from "react-icons/fa6";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {

    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }
    return (
        <footer className="bg-[#1B1420] text-white">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 mt-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

                    <div className="lg:col-span-2">
                        <Link to="/" className="text-4xl font-extrabold tracking-[0.2em] text-[#B9A38B]">
                            NESTORA
                        </Link>

                        <p className="mt-6 max-w-md text-gray-400 leading-8">
                            A private world of extraordinary hospitality, refined
                            experiences, and timeless elegance. Nestora is where
                            exceptional service meets absolute discretion.
                        </p>

                        <Link
                            to="/booking"
                            className="inline-block mt-8 border border-[#B9A38B] text-[#B9A38B] px-7 py-3 rounded-full uppercase tracking-widest text-sm hover:bg-[#B9A38B] hover:text-[#1B1420] transition duration-300">
                            Reserve Your Stay
                        </Link>
                    </div>

                    <div>
                        <h3 className="text-[#B9A38B] font-bold uppercase tracking-widest mb-6">
                            Explore
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link to="/about" className="hover:text-white transition">
                                    About Nestora
                                </Link>
                            </li>

                            <li>
                                <Link to="/room" className="hover:text-white transition">
                                    Rooms & Suites
                                </Link>
                            </li>

                            <li>
                                <Link to="/service" className="hover:text-white transition">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <HashLink smooth to="/service#resturants" className="hover:text-white transition">
                                    Restaurants
                                </HashLink>
                            </li>

                            <li>
                                <Link to="/booking" className="hover:text-white transition">
                                    Book a Stay
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#B9A38B] font-bold uppercase tracking-widest mb-6">
                            Experiences
                        </h3>

                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <HashLink smooth to="/service#clubs" className="hover:text-white transition">
                                    Clubs
                                </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/service#bars" className="hover:text-white transition">
                                    Bars & Lounges
                                </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/service#pools" className="hover:text-white transition">
                                    Pools
                                </HashLink>
                            </li>

                            <li>
                                <HashLink smooth to="/service#valet" className="hover:text-white transition">
                                    valet
                                </HashLink>
                            </li>

                            <li>
                                <Link to="/founder" className="hover:text-white transition">
                                    Founder
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#B9A38B] font-bold uppercase tracking-widest mb-6">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-400 leading-7">
                            <p>
                                1 Nestora Boulevard
                                <br />
                                Victoria Island, Lagos
                            </p>

                            <p>
                                <a
                                    href="tel:+2348000000000"
                                    className="hover:text-white transition">
                                    +234 800 000 0000
                                </a>
                            </p>

                            <p>
                                <a
                                    href="mailto:reservations@nestora.com"
                                    className="hover:text-white transition">
                                    reservations@nestora.com
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-y border-white/10 mt-16 py-10  gap-8">

                    <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

                        <p className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} Nestora. All rights reserved.
                        </p>

                        <div className="flex items-center gap-5">


                            <a
                                href="https://www.tiktok.com/@HeraWaveCodes"
                                target="_blank"
                                aria-label="Tiktok"
                                rel="noopener noreferrer">
                                <FaTiktok
                                    className="text-gray-400 hover:text-[#B9A38B] transition" />
                            </a>
                            <a
                                href="https://x.com/@Heragoddessjuno"
                                target="_blank"
                                aria-label="Twitter"
                                rel="noopener noreferrer">
                                <FaXTwitter
                                    className="text-gray-400 hover:text-[#B9A38B] transition" />
                            </a>

                            <a
                                href="https://www.instagram.com/herawavecodes"
                                target="_blank"
                                aria-label="Instagram"
                                rel="noopener noreferrer">
                                <FaInstagram
                                    className="text-gray-400 hover:text-[#B9A38B] transition" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/olajide-praise-kehinde-610565411"
                                target="_blank"
                                aria-label="Linkedin"
                                rel="noopener noreferrer">
                                <FaLinkedin
                                    className="text-gray-400 hover:text-[#B9A38B] transition" />
                            </a>

                        </div>

                        <div className="flex gap-5 text-sm text-gray-500">
                            <HashLink
                                smooth
                                to="/service#privacy"
                                className="hover:text-white transition">
                                Privacy
                            </HashLink>

                            <HashLink
                                smooth
                                to="/service#terms"
                                className="hover:text-white transition">
                                Terms
                            </HashLink>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
