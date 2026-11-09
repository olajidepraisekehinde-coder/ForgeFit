import { BsFillRocketTakeoffFill } from "react-icons/bs";
import sideImage from "../assets/sideImage.webp"
import { IoDiamondOutline, IoEyeOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { VscLightbulbEmpty } from "react-icons/vsc";
import { LuPentagon } from "react-icons/lu";
import Enviroment from "./enviroment";
import { useTheme } from "../utilis/useTheme";
import { motion } from "framer-motion";
export default function About() {
    const { darkMode } = useTheme()
    return (
        <>
            <div className={`pt-32 text-gray-300 2xl:max-w-7xl 2xl:mx-auto`} id="about">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`text-center leading-7 px-4 text-black ${darkMode ? "text-white" : "text-black"}`}>
                    <p className="text-sm text-[#85A9FF]">The Kinetic Philosophy</p>
                    <h1 className="md:text-4xl text-3xl font-bold py-3">Beyond Physical Limits.</h1>
                    <h1 className="md:text-4xl text-3xl font-bold text-[#85A9FF]">Pure Performance.</h1>

                    <div className="max-w-xl mx-auto py-5 leading-7 xs:text-justify">
                        <p>Founded on the principle that elite fitness should be an immersive experience. We don't just provide equipment, we curate transformation.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 md:px-6 lg:px-24 my-8 ${darkMode ? "text-white" : "text-black"}`}>
                    <div className="max-w-lg leading-7" id="story">

                        <h1 className="text-[#85A9FF] text-2xl font-bold py-3">The ForgeFit Story</h1>

                        <p className="pb-8">In 2014, ForgeFit was born from a singular vision: to bridge the gap between gritty athletic performance and high-end hospitality. Our founder, an endurance athlete and design enthusiast, felt that gyms were either too clinical or too uninspired.</p>
                        <p>We started in a refurbished industrial loft in downtown Seattle. Today, we are a global beacon for luxury fitness, where every square inch is engineered for focus, and every interaction is a step toward excellence. We represent the fusion of kinetic energy and refined aesthetic.</p>
                    </div>
                    <img
                        src={sideImage}
                        alt="side"
                        className="w-full h-96 object-cover rounded-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto max-w-7xl px- py-5">
                    <div className="bg-[#1C1B1B] mx-5 md:mx-12 rounded-3xl border border-white/10 px-4 pb-8 md:px-8 
                    transition-all duration-300 shadow-[0_0_35px_rgba(133,169,255,0.45)] hover:-translate-y-2">

                        <BsFillRocketTakeoffFill
                            className="text-3xl font-bold text-[#85A9FF] my-4" />

                        <h1 className="pb-2 font-bold text-3xl text-gray-300">Our Mission</h1>

                        <p>To empower the modern athlete through high-precision training environments and scientific recovery protocols, fostering a lifestyle of peak performance.</p>
                    </div>

                    <div className="bg-[#1C1B1B] mx-5 md:mx-12 rounded-3xl border border-white/10 px-4 pb-8 md:px-8 transition-all duration-300 shadow-[0_0_35px_rgba(133,169,255,0.45)] hover:-translate-y-2">

                        <IoEyeOutline
                            className="text-3xl font-bold text-[#85A9FF] my-4" />

                        <h1 className="pb-2 font-bold text-3xl text-gray-300">Our vision</h1>

                        <p>To redefine the global standard of fitness by harmonizing technical depth, elite coaching, and a sanctuary-like aesthetic into a singular training experience.</p>
                    </div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className={`mt-10 ${darkMode ? "text-white" : "text-black"}`} >

                    <h1 className="text-center text-4xl font-bold pt-5" id="value">Core Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-16 mx-auto px-16 md:px-20 max-w-6xl text-center">
                        <div>
                            <LuPentagon
                                className="text-2xl text-[#85A9FF] m-auto" />
                            <h1 className="font-bold text-sm py-3">DISCIPLINE</h1>
                            <p>The foundation of every achievement. We respect the grind.</p>
                        </div>

                        <div className="">
                            <FaPeopleGroup
                                className="text-2xl text-[#85A9FF] m-auto" />
                            <h1 className="font-bold text-sm py-3">COMMUNITY</h1>
                            <p>Strength is amplified when shared. We rise together.</p>
                        </div>

                        <div>
                            <VscLightbulbEmpty
                                className="text-2xl text-[#85A9FF] m-auto" />
                            <h1 className="font-bold text-sm py-3">INNOVATION</h1>
                            <p>Data-driven methods and cutting-edge tech integration..</p>
                        </div>

                        <div>
                            <IoDiamondOutline
                                className="text-2xl text-[#85A9FF] m-auto" />
                            <h1 className="font-bold text-sm py-3">INTEGRITY</h1>
                            <p>Uncompromising standards in every detail of our service.</p>
                        </div>
                    </div>
                </motion.aside>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="px-4 py-10 max-w-7xl mx-auto md:px-10 lg:px-20 md:py-16 mx-3">
                    <div className="relative bg-[#1C1B1B] shadow-2xl rounded-2xl p-6 md:p-16">

                        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            The Evolution
                        </h1>

                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 top-32 md:top-44 bottom-10 w-[2px] bg-gray-500 md:-translate-x-1/2"></div>

                        <div className="space-y-12 md:space-y-20">

                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="pl-14 md:pl-0 md:pr-16 md:text-right">
                                    <h2 className="text-2xl font-bold text-[#85A9FF]">2014</h2>
                                    <p className="font-semibold">Genesis</p>
                                    <p>
                                        First studio opens in Seattle, pioneering the
                                        "Boutique Performance" concept.
                                    </p>
                                </div>

                                {/* Circle */}
                                <div className="absolute left-6 md:left-1/2 top-3 md:top-1/2 w-4 h-4 rounded-full bg-blue-500 md:-translate-x-1/2 md:-translate-y-1/2"></div>

                                <div className="hidden md:block"></div>
                            </div>

                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="hidden md:block"></div>

                                <div className="pl-14 md:pl-16">
                                    <h2 className="text-2xl font-bold text-[#85A9FF]">2017</h2>
                                    <p className="font-semibold">Digital Expansion</p>
                                    <p>
                                        Launch of ForgeFit OS, our proprietary performance tracking
                                        software.
                                    </p>
                                </div>

                                {/* Circle */}
                                <div className="absolute left-6 md:left-1/2 top-3 md:top-1/2 w-4 h-4 rounded-full bg-blue-500 md:-translate-x-1/2 md:-translate-y-1/2"></div>
                                {/* absolute left-1/2 => places the vertical line exactly in the center.
                                -translate-x-1/2  => centers the line perfectly. */}
                            </div>


                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="pl-14 md:pl-0 md:pr-16 md:text-right">
                                    <h2 className="text-2xl font-bold text-[#85A9FF]">2021</h2>
                                    <p className="font-semibold">Global Flagship</p>
                                    <p>
                                        Opening of the London hub, featuring a world-class recovery
                                        suite and biomechanics lab.
                                    </p>
                                </div>

                                {/* Circle */}
                                <div className="absolute left-6 md:left-1/2 top-3 md:top-1/2 w-4 h-4 rounded-full bg-blue-500 md:-translate-x-1/2 md:-translate-y-1/2"></div>

                                <div className="hidden md:block"></div>
                            </div>

                            <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
                                <div className="hidden md:block"></div>
                                {/* The empty div represent the other column 2 of the grid you can also use col-span-2 or col-span-1 col-start-2 in the wrapper surronding your content, but col-sapn-1 is optional, even flex can be used as well  using justify-end/start/w-1/2*/}

                                <div className="pl-14 md:pl-16">
                                    <h2 className="text-2xl font-bold text-[#85A9FF]">2024</h2>
                                    <p className="font-semibold">Next Gen Fitness</p>
                                    <p>
                                        Re-imagining training for the hybrid athlete with
                                        AI-integrated coaching.
                                    </p>
                                </div>

                                {/* Circle */}
                                <div className="absolute left-6 md:left-1/2 top-3 md:top-1/2 w-4 h-4 rounded-full bg-blue-500 md:-translate-x-1/2 md:-translate-y-1/2"></div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="pb-16">
                    <h1 className={`text-center font-bold text-4xl ${darkMode ? "text-white" : "text-black"}`}>Elite Enviroments</h1>
                    <Enviroment />
                </motion.div>
            </div >
        </>
    )
}

