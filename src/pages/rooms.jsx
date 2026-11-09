import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import hero1 from "../assets/hero/hero1.jpg";
import { IoIosArrowRoundDown } from "react-icons/io";
import rooms from "../utilis/room";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function Rooms() {
    const [category, setCategory] = useState("all")
    const [isLoading, setIsLoading] = useState(true)

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -32 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    const categories = [
        "all",
        ...new Set(rooms.map((room) => room.category))]

    const data = rooms.filter(
        (room) => category === "all" || room.category === category
    )

    if (isLoading) {
        return (
            <>
                <section className="relative h-screen w-full overflow-hidden bg-[#efeae2]">
                    <SkeletonBlock className="absolute inset-0 h-full w-full rounded-none" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-20">
                        <SkeletonText className="h-4 w-40 md:w-52" />
                        <SkeletonText className="mt-4 h-14 w-72 md:h-20 md:w-[32rem]" />
                        <SkeletonText className="mt-6 h-5 w-80 md:w-[32rem]" />
                    </div>
                </section>

                <div className="px-4 pb-12">
                    <div className="pt-12 text-center md:pt-20">
                        <SkeletonText className="mx-auto h-12 w-48" />
                    </div>

                    <section className="px-4 py-8 text-center">
                        <SkeletonText className="mx-auto h-4 w-52" />
                        <SkeletonText className="mx-auto mt-5 h-12 w-80 md:w-[38rem]" />
                        <SkeletonText className="mx-auto mt-6 h-5 w-2/3 md:w-[34rem]" />

                        <div className="mt-6 flex flex-wrap justify-center gap-3 px-3 pt-5">
                            {categories.map((_, index) => (
                                <SkeletonBlock key={index} className="h-10 w-28 rounded-full" />
                            ))}
                        </div>
                    </section>

                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="h-[500px] rounded-2xl bg-[#B9A38B]/80 p-0 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]">
                                <SkeletonBlock className="h-80 w-full rounded-t-2xl" />
                                <div className="space-y-4 px-6 py-5">
                                    <SkeletonText className="mx-auto h-8 w-2/3" />
                                    <SkeletonText className="h-4 w-full" />
                                    <SkeletonText className="h-4 w-full" />
                                    <SkeletonText className="h-4 w-3/4" />
                                    <div className="flex gap-6 pt-2">
                                        <SkeletonText className="h-4 w-20" />
                                        <SkeletonText className="h-4 w-20" />
                                        <SkeletonText className="h-4 w-20" />
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <div className="space-y-2">
                                            <SkeletonText className="h-3 w-24" />
                                            <SkeletonText className="h-6 w-24" />
                                        </div>
                                        <SkeletonBlock className="h-12 w-28 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
                className="relative h-screen w-full overflow-hidden">

                <motion.img
                    variants={fadeLeft}
                    src={hero1}
                    alt="Luxury Nestora suite"
                    className="absolute inset-0 h-full w-full object-cover object-center" />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-20">

                    <motion.p variants={fadeUp} className="text-[#B9A38B] uppercase tracking-[0.3em] text-sm">
                        Rooms & Suites
                    </motion.p>

                    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 text-[#B9A38B] font-serif">
                        Designed For
                        <br />
                        Extraordinary Stays

                    </motion.h1>

                    <motion.p variants={fadeUp} className="max-w-2xl mt-6 text-gray-200 text-sm md:text-base leading-7">
                        Discover spaces crafted for comfort, privacy and exceptional luxury.
                    </motion.p>

                    <div className="flex flex-col justify-center items-center text-center px-6 md:px-20">
                        <HashLink
                            smooth to="#room"
                            className="absolute bottom-8 flex flex-col items-center gap-2 text-[#B9A38B] uppercase tracking-widest text-sm hover:text-white transition">
                            <span>Explore Rooms</span>
                            <span className="text-xl animate-bounce">
                                <IoIosArrowRoundDown />
                            </span>
                        </HashLink>
                    </div>
                </div>


            </motion.section>
            <div className="">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center text-4xl font-extrabold uppercase pt-12 md:pt-20 text-[#B9A38B]" id="room">Rooms</motion.h1>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={stagger}
                    className="text-center py-8 px-4">
                    <motion.p variants={fadeUp} className="uppercase text-[#B9A38B] tracking-[0.35em] text-xs md:text-sm font-semibold">The Art Of Staying</motion.p>
                    <motion.p variants={fadeUp} className="text-3xl md:text-5xl font-extrabold mt-5 px-5">A space that feels entirely yours</motion.p>

                    <motion.div variants={fadeUp}>
                        <p className="mt-6 text-[#B9A38B]/60 leading-8 max-w-2xl m-auto">Every Nestora residence has been thoughtfully designed to create an atmosphere of quiet luxury,
                            complete privacy and effortless comfort</p>
                    </motion.div>

                    <div className="mt-6 flex flex-wrap justify-center gap-3 px-3 pt-5">
                        {categories.map((item) => (
                            <motion.button
                                key={item}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setCategory(item)}
                                className={`rounded-full px-5 py-2 capitalize border border-[#B9A38B] transition-all duration-300 ${category === item
                                    ? "bg-[#B9A38B] text-[#2C1F33]"
                                    : "bg-transparent"
                                    }`}>
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl m-auto py-10 px-5 lg:px-10">
                    {data.map((room) =>
                        <motion.div key={room.id}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            className="group relative overflow-hidden bg-[#B9A38B] rounded-2xl pb-5 flex flex-col h-full shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(133,169,255,0.35)]">
                            <motion.img
                                src={room.image}
                                alt={room.title}
                                className="w-full object-cover h-64 rounded-t-2xl text-gray-200"
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />

                            <div className="absolute bg-[#2C1F33] px-5 py-2 rounded-r-2xl border border-[#B9A38B]">
                                <p>{room.category}</p>
                            </div>

                            <div className="px-4 md:px-6 py-5 space-y-4 flex flex-col flex-1">
                                <p className="text-2xl font-bold text-[#2C1F33] text-center">{room.name}</p>
                                <p className="leading-7">{room.description}</p>

                                <ul className="flex gap-8 list-disc px-5 text-sm">
                                    <li>{room.size}</li>
                                    <li>{room.guests}</li>
                                    <li>{room.bed}</li>
                                </ul>

                                <div className="mt-auto pt-7">
                                    <div className="flex items-end justify-between gap-3">
                                        <div>

                                            <p className="uppercase text-xs tracking-widest text-[#2C1F33]/40">Starting From</p>
                                            <p className="text-xl font-bold mt-1">${room.price}</p>
                                            <span className="text-sm font-normal text-[#2C1F33]/50">{" "} /{room.currency}</span>
                                        </div>

                                        <Link to={`/room/${room.slug}`}>
                                            <motion.button
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.97 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                                                className="px-4 md:px-8 py-4 bg-[#2C1F33] rounded-full group-hover:bg-[#2C1F33]/90 hover:scale-105 transition-all duration-300 text-sm">View Suites </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </>
    );
}