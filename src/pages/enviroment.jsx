import interior from "../assets/interior.webp"
import sideImage from "../assets/sideImage.webp"
import interior6 from "../assets/interior6.webp"
import image from "../assets/image-29.webp"
import { FaAward, FaBookmark } from "react-icons/fa6"
import { RiVerifiedBadgeLine } from "react-icons/ri"
import { motion } from "framer-motion"
export default function Enviroment() {
    return (
        <>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-20 my-20 mx-3">
                    <motion.img
                        whileHover={{ scale: 1.02, y: -6 }}
                        transition={{ duration: 0.2 }}
                        src={interior}
                        alt="interior"
                        className="w-full h-80 lg:h-[750px] object-cover rounded-2xl border border-gray-200 transition duration-300 hover:-translate-y-3" />

                    <div className="grid grid-cols-2 gap-5 pt-5">

                        <img
                            src={sideImage}
                            alt="sideImage"
                            className="w-full  object-cover rounded-2xl border border-gray-200 transition duration-300 hover:-translate-y-3" />
                        <img
                            src={interior6}
                            alt="interior6"
                            className="w-full  object-cover rounded-2xl border border-gray-200 transition duration-300 hover:-translate-y-3" />

                        <div className="col-span-2">

                            <motion.img
                                whileHover={{ scale: 1.02, y: -6 }}
                                transition={{ duration: 0.2 }}
                                src={image}
                                alt="image"
                                className="w-full h-80 object-cover rounded-2xl border border-gray-200 transition duration-300 hover:-translate-y-3" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#1C1B1B] text-center md:max-w-7xl lg:mx-auto rounded-3xl border border-white/10 mx-4 py-12 px-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                    <div className="mx-auto">
                        <h1 className="text-2xl md:text-4xl md:text-5xl font-bold leading-tight ">Recognized Excellence</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:pt-16 max-w-2xl m-auto">
                            <div className=" ">
                                <FaAward className="m-auto text-4xl text-[#85A9FF] font-bold my-4" />
                                <p className="font-bold">Best Luxury Gym 2022</p>
                                <p>Global Fitness Awards</p>
                            </div>

                            <div>
                                <FaBookmark className="m-auto text-4xl text-[#85A9FF] font-bold my-4" />
                                <p className="font-bold">Innovation of the Year</p>
                                <p>HealthTech Summit</p>
                            </div>

                            <div>
                                <RiVerifiedBadgeLine className="m-auto text-4xl text-[#85A9FF] font-bold my-4" />
                                <p className="font-bold">Top Interior Design</p>
                                <p>Architectural Digest</p>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </>
    )
}