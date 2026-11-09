import { useState } from "react";
import gyms from "../utilis/gymCard";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../utilis/useTheme";

export default function ProgramCard() {
    const [category, setCategory] = useState("All");
    const [visibleCards, setVisibleCards] = useState(4);

    const categories = [
        "All",
        "Yoga",
        "Muscle mom",
        "Hit",
        "Cardio",
    ];

    // Filter cards
    const filteredGyms = gyms.filter((gym) => {
        return category === "All" || gym.category === category;
    });
    const { darkMode } = useTheme()
    return (
        <>
            <div className="mt-6 flex flex-wrap justify-center gap-3 px-3">
                {categories.map((item) => (
                    <motion.button
                        key={item}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setCategory(item); setVisibleCards(4); }} // Reset when category changes 
                        className={`rounded-full px-5 py-2 capitalize transition ${category === item
                            ? "bg-[#0058CB] text-white"
                            : "bg-red-800"} ${darkMode ?
                                "" : "bg-black text-white"
                            }`}> {item}
                    </motion.button>
                ))}
            </div >

            {/* Cards */}
            <section className="px-10 py-16 lg:px-24" >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {/* <AnimatePresence mode="wait"> */}
                    <AnimatePresence>

                        {filteredGyms
                            .slice(0, visibleCards)
                            .map((gym) => (
                                <motion.div
                                    key={gym.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.85, y: -20 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                    className="group relative h-[430px] cursor-pointer overflow-hidden rounded-xl shadow-xl" >
                                    <img
                                        src={gym.image}
                                        alt={gym.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />

                                    {/* Category */}
                                    <div className="absolute top-0 mt-2 w-full px-5">
                                        <span className="rounded-full bg-red-900 px-3 py-1 text-xs text-white">
                                            {gym.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 flex h-48 w-full flex-col bg-black/50 p-3">
                                        <h2 className="text-xl font-bold text-white">
                                            {gym.title}
                                        </h2>

                                        <p className="h-16 py-3 text-xs text-white overflow-hidden">
                                            {gym.description}
                                        </p>

                                        <Link to="/contact"><button className="mt-2 rounded-md bg-[#85A9FF] px-5 py-2 text-sm text-white transition hover:bg-blue-700">
                                            Contact  Us
                                        </button></Link>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>

                {/* View More / View Less */}
                {
                    filteredGyms.length > 5 && (
                        <div className="mt-12 flex justify-center">
                            {visibleCards < filteredGyms.length ? (
                                <button
                                    onClick={() => setVisibleCards((prev) => prev + 4)}
                                    className="rounded-full bg-[#85A9FF] px-8 py-3 font-semibold text-black transition hover:scale-105">
                                    View More
                                </button>
                            ) : (
                                <button
                                    onClick={() => setVisibleCards(4)}
                                    className="rounded-full border border-[#85A9FF] px-8 py-3 font-semibold text-black transition hover:bg-[#85A9FF] hover:text-black">
                                    View Less
                                </button>
                            )}
                        </div>
                    )
                }
            </section>
        </>
    );
}