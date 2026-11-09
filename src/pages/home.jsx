import { IoMdCheckmark } from "react-icons/io";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import image from "../assets/Hero.webp";
import hero2 from "../assets/hero2.webp"

import { GoArrowBoth } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import { GiThreeLeaves } from "react-icons/gi";
import Card from "../Component/card";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Calculator from "../Component/Calculator";
import Coaches from "../Coaches/coaches";
import muscle from "../assets/muscle.jpg";
import muscle2 from "../assets/muscle2.webp";
import lift2 from "../assets/lift2.jpg";
import lift from "../assets/lift.webp";
import interior from "../assets/interior.webp";
import body from "../assets/body.webp";
import { Link } from "react-router-dom";
import { useTheme } from "../utilis/useTheme";
import { motion } from "framer-motion";

export default function Home() {
    const { darkMode } = useTheme()
    return (
        <section>
            <motion.section
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative min-h-screen md:h-screen w-full overflow-hidden py-12 flex items-center">

                {darkMode ? (

                    <img
                        src={image}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover" />

                ) : (
                    <img
                        src={hero2}
                        alt="Hero"
                        className="absolute inset-0 w-full h-full object-cover" />
                )}
                
                <div className={`absolute 
                        ${darkMode ? "inset-0 bg-black/50" : "opacity-0"}`}>

                </div>

                <div className="relative z-10 flex h-full items-center justify-left 2xl:justify-center px-5 md:px-12">
                    <div className="max-w-xl mt-20 md:m-0">
                        <p className="text-[#85A9FF] pt-6 md:pt-0">Elite Athletic Performance</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white shadow-xl leading-tight">
                            FORGE YOUR <span className="text-[#568DFF]">LIMITS</span>
                        </h1>

                        <p className="mt-4 text-lg md:text-sm text-white">
                            Experience the next level of kinetic luxury. Our state-of-the-art facilities and elite trainers are here to transform your potential into power.
                        </p>

                        <div className="flex justify-center gap-4 mb-16 md:mb-2">

                            <Link to="/contact"><button className="mt-8 rounded-lg md:rounded-full text-sm bg-[#85A9FF] px-5 md:px-8 py-3 font-semibold text-black transition">
                                Join Now
                            </button></Link>

                            <Link to="/program"><button className="mt-8 rounded-lg bg-[#1A1C1C] text-sm rounded-full px-6 py-3 font-semibold text-white transition hover:bg-[#313030]">
                                Explore Program
                            </button></Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center animate-[bounce_2s_infinite]">
                    <p className="text-sm text-gray-300">
                        Scroll to Discover
                    </p>

                    <MdKeyboardDoubleArrowDown
                        className="mt-2 text-3xl text-[#85A9FF]" />

                </div>

            </motion.section>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`w-full py-20 flex justify-center md:flex-row flex-col gap-20 shadow-2xl ${darkMode ? "bg-[#000000]" : "bg-[#FDF6EC]"}`}>
                <div className="flex flex-col items-center md:border-0 border-b border-gray-500 mx-10 md:mx-0 pt-4">
                    <p className="text-[#85A9FF] font-bold text-2xl">5000+</p>
                    <p>Members</p>
                </div>

                <div className="flex flex-col items-center md:border-0 border-b border-gray-500 mx-10 md:mx-0 pt-4">
                    <p className="text-[#85A9FF] font-bold text-2xl">50+</p>
                    <p>Certified Trainers</p>
                </div>

                <div className="flex flex-col items-center md:border-0 border-b border-gray-500 mx-10 md:mx-0 pt-4">
                    <p className="text-[#85A9FF] font-bold text-2xl">100+</p>
                    <p>Weekly Classes</p>
                </div>

                <div className="flex flex-col items-center md:border-0 border-b border-gray-500 mx-10 md:mx-0 pt-4">
                    <p className="text-[#85A9FF] font-bold text-2xl">10</p>
                    <p>Years Experience</p>
                </div>
            </motion.div>


            <div className="2xl:max-w-7xl 2xl:mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#121311] text-white p-6 md:p-10 shadow-2xl leading-7">
                    <p className="text-[#85A9FF] py-3">The ForgeFit Advantage</p>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            WHY CHOOSE <span className="text-blue-700">US</span>
                        </h2>

                        <p className="max-w-md text-gray-300">
                            We blend advanced sports science with high-end luxury to create a training
                            environment that inspires results.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">

                        <div className="bg-[#1C1B1B] rounded-xl shadow-2xl shadow-black/50 p-6 min-h-[220px]">
                            <div className="text-[#85A9FD] bg-[#85A9FF]/50 my-3 shadow-xl w-12 h-12 flex items-center justify-center rounded-lg">
                                <GoArrowBoth className="" />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">Modern Equipment</h3>
                            <p className="text-gray-300">
                                Access to premium Italian-engineered strength and cardio machines
                                featuring AI tracking.
                            </p>
                        </div>

                        <div className="bg-[#1C1B1B] rounded-xl shadow-2xl shadow-black/50 p-6 min-h-[220px]">

                            <div className="text-[#85A9FD] bg-[#85A9FF]/50 my-3 shadow-xl w-12 h-12 flex items-center justify-center rounded-lg">
                                <FaGraduationCap />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">Expert Trainers</h3>
                            <p className="text-gray-300">
                                Elite coaches with backgrounds in professional sports and medical
                                science to guide your journey.
                            </p>
                        </div>

                        <div className="bg-[#1C1B1B] rounded-xl shadow-2xl shadow-black/50 p-6 min-h-[220px]">

                            <div className="text-[#85A9FD] bg-[#85A9FF]/50 my-3 shadow-xl w-12 h-12 flex items-center justify-center rounded-lg">
                                <BsJournalText />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">Flexible Schedules</h3>
                            <p className="text-gray-300">
                                24/7 access for premium members and a wide range of classes from
                                sunrise to night.
                            </p>
                        </div>

                        <div className="bg-[#1C1B1B] rounded-xl shadow-2xl shadow-black/50 p-6 min-h-[220px]">

                            <div className="text-[#85A9FD] bg-[#85A9FF]/50 my-3 shadow-xl w-12 h-12 flex items-center justify-center rounded-lg">
                                <GiThreeLeaves />
                            </div>

                            <h3 className="text-xl font-semibold mb-3">Premium Amenities</h3>
                            <p className="text-gray-300">
                                Luxury locker rooms, steam sauna, ice baths, and a high-performance
                                juice bar.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }} >
                    <Card />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-around flex-col md:flex-row gap-5 p-7 md:p-10 bg-[#1C1B1B] shadow-2xl text-gray-200/50">
                    <div className="max-w-sm my-20">
                        <div className="text-base/10">
                            <p className="text-[#85A9FF] text-sm">Join The Elite</p>
                            <p className="text-xl font-bold py-3">CHOOSE YOUR{" "}
                                <span className="text-[#85A9FF]">ASCENSION</span></p>
                        </div>
                        <p>Unlock unlimited potential with our flexible membership tiers designed to fit the lifestyle of the high-performance individual.</p>

                        <div className="text-base/10 mt-5">
                            <div className="flex gap-3 items-center">
                                <IoCheckmarkCircleOutline
                                    className="text-[#85A9FF] text-lg font-bold" />

                                <p>Unlimited Global Access</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <IoCheckmarkCircleOutline
                                    className="text-[#85A9FF] text-lg font-bold" />

                                <p>Complimentary Recovery Session</p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <IoCheckmarkCircleOutline
                                    className="text-[#85A9FF] text-lg font-bold" />

                                <p>Biometric Analysis & Tracking</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#121311] mb-10 border border-[#787776] shadow-2xl shadow-[#85A9FF] rounded-xl text-base/10">
                        <div className="px-10 py-8">
                            <h2 className="text-2xl font-bold">Elite Performance</h2>
                            <p className="text-sm"><span className="text-[#85A9FF] text-4xl font-bold">$199</span>
                                <sub>/month</sub></p>

                            <div className="mt-8 text-md">
                                <div className="flex justify-between items-center border-b-2 border-[#1C1B1B]">
                                    <p>All Classes Access</p>
                                    <IoMdCheckmark className="text-[#85A9FF] text-md" />
                                </div>

                                <div className="flex justify-between items-center border-b-2 border-[#1C1B1B]">
                                    <p>Personalized Nutrition Plan</p>
                                    <IoMdCheckmark className="text-[#85A9FF] text-md" />
                                </div>

                                <div className="flex justify-between items-center border-b-2 border-[#1C1B1B]">
                                    <p>24/7 Premium Lounge</p>
                                    <IoMdCheckmark className="text-[#85A9FF] text-md" />
                                </div>

                                <div className="flex justify-between items-center border-b-2 border-[#1C1B1B]">
                                    <p>Guest Passes (2/mo)</p>
                                    <IoMdCheckmark className="text-[#85A9FF] text-md" />
                                </div>

                            </div>
                            <div className="flex justify-center text-white">
                                <Link to="/membership"><button className="text-center px-6 lg:px-20 py-1 mt-5 bg-[#85A9FF] rounded-xl">Start Your Journey</button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    id="bmi">
                    <Calculator />
                </motion.section>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}>
                    <Coaches />
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="my-20 rounded-3xl bg-white/10 px-6 py-10 md:px-10 lg:px-12 mx-3 md:mx-8 shadow-2xl">

                    {/* Header */}
                    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <h2 className="text-2xl font-bold">@ForgeFit_Elite_Gym</h2>
                        <a
                            href="https://www.tiktok.com/@HeraWaveCodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[#85A9FF] transition
                             ${darkMode ? "hover:text-white" : "hover:text-black"}`}>
                            Follow Us →
                        </a>

                    </div>

                    {/* Images */}

                    <div
                        className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
                        {[muscle, muscle2, lift2, lift, interior, body].map((image, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="group shrink-0 overflow-hidden rounded-2xl">
                                <img
                                    src={image}
                                    alt="ForgeFit"
                                    className="h-44 w-40 md:h-48 md:w-full object-cover transition-all duration-500 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
