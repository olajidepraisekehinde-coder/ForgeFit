import { useTheme } from "../utilis/useTheme";
import trainers from "../utilis/trainersCard"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Trainers() {
    const { darkMode } = useTheme()
    return (
        <>
            <div className={`pt-32 2xl:max-w-7xl 2xl:mx-auto 
                ${darkMode ? "text-gray-300" : "text-white"}`}>
                    
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`max-w-xl mx-auto text-center px-7 
                     ${darkMode ? "text-gray-300" : "text-black"}`}>
                    <h1 className="py-5 text-4xl md:text-5xl font-bold">
                        Meet Our Expert Trainers
                    </h1>

                    <p>
                        Elite performance is guided by elite expertise. Our certified
                        professionals are dedicated to sculpting your potential through
                        precision, science, and luxury care.
                    </p>
                </motion.div>


                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6 }}
                    className="px-10 py-8 lg:px-20 my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-10">

                    {trainers.map((trainer) => (
                        <motion.div
                            key={trainer.id}
                            whileHover={{ scale: 1.03, y: -6 }}
                            transition={{ duration: 0.25 }}
                            className="group relative overflow-hidden rounded-2xl">

                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="h-96 w-full object-cover backdrop-blur-xl bg-white/50 transition duration-500 group-hover:scale-110" />


                            {/* Dark Overlay */}
                            {/* <div className=" absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100"></div> */}

                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

                            {/* Middle Content */}
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 translate-y-8 transition-all
                              duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                <p className="text-[#85A9FF] font-bold text-2xl py-4"> {trainer.role}</p>
                                <h2 className="px-4 text-gray-300">{trainer.content}</h2>
                            </div>

                            {/* Bottom Content */}
                            <div className="absolute bottom-0 left-0 flex h-52 w-full flex-col bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-3 leading-7 transition-opacity duration-300 group-hover:opacity-0">

                                <div className="flex h-12 flex-wrap gap-2 mb-5">
                                    {trainer.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-sm rounded-full border border-white px-3 py-2 my-3 bg-[#85A9FF] text-center">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold">
                                    {trainer.name}
                                </h2>

                                <p className="text-[#85A9FF]">
                                    {trainer.role}
                                </p>

                                <p className="flex-1 text-md">
                                    {trainer.experience}
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </motion.section>


                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl lg:mx-auto mx-5 my-20 rounded-3xl border border-white/10 bg-black px-10 py-12 md:px-16 md:py-16 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold max-w-md leading-tight text-white">
                                Ready to Begin Your Transformation?
                            </h1>

                            <p className="mt-5 max-w-md text-gray-400 leading-7">
                                Experience the ForgeFit standard with a complimentary expert evaluation and discover a personalized path toward your fitness goals.
                            </p>
                        </div>

                        <Link to="/membership"><button className="rounded-full bg-[#85A9FF] px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Book a Trial Session
                        </button></Link>

                    </div>

                </motion.div>
            </div>
        </>
    );
}