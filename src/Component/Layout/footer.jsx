import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="bg-black h-full pt-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row justify-between gap-5 px-12">
                    <div className="max-w-md text-gray-300">
                        <h2 className="text-2xl font-bold text-[#85A9FF] pb-5">ForgeFit</h2>
                        <p className="text-sm">Redefining high-performance living through architectural training environments and sports science.</p>


                        <div className="flex gap-5 py-4">
                            <a
                                href="https://www.tiktok.com/@HeraWaveCodes"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTiktok
                                    className="text-xl hover:text-[#85A9FF] transition duration-300" />
                            </a>
                            <a
                                href="https://x.com/@Heragoddessjuno"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaXTwitter
                                    className="text-xl hover:text-[#85A9FF] transition duration-300" />
                            </a>

                            <a
                                href="https://www.instagram.com/herawavecodes"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram
                                    className="text-xl hover:text-[#85A9FF] transition duration-300" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/olajide-praise-kehinde-610565411"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin
                                    className="text-xl hover:text-[#85A9FF] transition duration-300" />
                            </a>

                            <a
                                href="https://wa.me/2348086157432?text=Hi%20ForgeFit!%20I'm%20interested%20in%20joining%20your%20your%20gym."
                                target="_blank"
                                rel="noopener noreferrer">
                                {/* className="fixed bottom-6 right-6 z-50 bg-green-5000 tetx-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300" */}
                                <FaWhatsapp
                                    className="text-green-400 text-2xl font-bold" size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-base/10 text-gray-300">

                        <div>
                            <h1 className="text-lg font-bold text-[#85A9FF]">Company</h1>
                            <ul className="text-sm leading-8 pt-3">
                                <HashLink smooth to="/about#about"><li className="hover:text-[#85A9FF]/50 cursor-pointer">About</li></HashLink>
                                <HashLink smooth to="/about#value"><li className="hover:text-[#85A9FF]/50 cursor-pointer">Value</li></HashLink>
                                <HashLink smooth to="/about#story"><li className="hover:text-[#85A9FF]/50 cursor-pointer">Story</li></HashLink>

                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-[#85A9FF]">Traning</h1>
                            <ul className="text-sm leading-8 pt-3">
                                <li className="hover:text-[#85A9FF]/50 cursor-pointer">Hit</li>
                                <li className="hover:text-[#85A9FF]/50 cursor-pointer">Yoga</li>
                                <li className="hover:text-[#85A9FF]/50 cursor-pointer">CrossFit</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-[#85A9FF]">Resources</h1>
                            <ul className="text-sm leading-8 pt-3">
                                <HashLink smooth to="/membership#faq" ><li className="hover:text-[#85A9FF]/50 cursor-pointer">FAQ</li></HashLink>
                                <HashLink smooth to="/#bmi" ><li className="hover:text-[#85A9FF]/50 cursor-pointer">BMI Calculator</li></HashLink>
                                <li className="hover:text-[#85A9FF]/50 cursor-pointer">Blog</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-[#85A9FF]">Contact</h1>
                            <ul className="text-sm leading-8 pt-3">
                                <a
                                    href="https://www.tiktok.com/@HeraWaveCodes"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <li className="hover:text-[#85A9FF]/50 cursor-pointer">Support</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mt-12 pb-4 text-sm text-gray-300">
                    <p>&copy; {year} <span className="text-[#85A9FF] font-bold">ForgeFit.</span> Kinetic Luxury Fitness.</p>
                </motion.div>
            </div>
        </>
    )
}