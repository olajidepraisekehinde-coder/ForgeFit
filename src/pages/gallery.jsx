import { BsCamera } from "react-icons/bs";
import GalleryCard from "../GalleryCard/galleryCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTiktok } from "react-icons/fa";
import { useTheme } from "../utilis/useTheme";

export default function Gallery() {
    const [category, setCategory] = useState("all");

    const categories = [
        "all",
        "equipment",
        "interior",
        "class",
        "community",
    ];
    const filteredGallery =
        category === "all"
            ? GalleryCard
            : GalleryCard.filter((card) => card.category === category);

    const { darkMode } = useTheme()
    return (
        <>
            <div>
                <div className="pt-32 2xl:max-w-7xl 2xl:mx-auto ">
                    <div className={`mx-auto max-w-2xl px-5 text-center ${darkMode ? "text-white" : "text-black"}`}>
                        <p className="text-[#0058CB]">Visual Excellence</p>

                        <h1 className="py-4 text-5xl font-bold">The Kinetic{" "}
                            <span className="text-[#0058CB]">Sanctuary</span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-lg leading-7">Experience the intersection of high-performance engineering and luxury aesthetics. Every frame captures the intensity and refinement of ForgeFit.</p>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {categories.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCategory(item)}
                                className={`rounded-full px-6 py-2 capitalize transition ${category === item
                                    ? "bg-[#0058CB] text-white"
                                    : "bg-red-800"} ${darkMode ?
                                        "" : "bg-black text-white"
                                    }`} >{item}
                            </motion.button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-5 px-10 py-16 md:grid-cols-2 lg:grid-cols-4">
                        <AnimatePresence mode="wait">
                            {filteredGallery.map((card) => (
                                <motion.div
                                    key={card.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.85, y: -20 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                    className="overflow-hidden rounded-xl">
                                    <img
                                        src={card.image}
                                        alt={card.category}
                                        className="h-64 w-full object-cover transition duration-500 hover:scale-110"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="my-16 mx-5">
                    <div className={`m-auto text-center space-y-4 max-w-2xl rounded-2xl px-5 py-10 md:px-20 md:py-20
                    ${darkMode ? "bg-white/10 backdrop-blur-xl" : "bg-black/40 backdrop-blur-xl border"}`}>
                        <div className="text-center space-y-4 ">
                            <BsCamera
                                className="m-auto font-bold text-5xl text-[#0058CB]" />
                            <h1 className="text-2xl font-bold">Be part of the aesthetic</h1>
                        </div>
                        <p className="max-w-md m-auto leading-7">Tag your journey with #ForgeFitElite and join our digital community of high-performers.</p>

                        <a
                            href="https://www.tiktok.com/@HeraWaveCodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#85A9FF] px-6 py-3 font-semibold text-black transition hover:scale-105">
                            Follow Us on TikTok
                            <FaTiktok />
                        </a>
                    </div>
                </div>

            </div >
        </>
    )
}