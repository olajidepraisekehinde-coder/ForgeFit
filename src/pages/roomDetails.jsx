import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { FaCheck, FaArrowLeft } from "react-icons/fa6";
import rooms from "../utilis/room";
import NotFound from "./notFound";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function RoomDetails() {
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const fadeUp = {
        hidden: { opacity: 0, y: 22 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -36 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 36 },
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
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [slug]);

    const room = rooms.find((item) => item.slug === slug);

    if (!room) {
        return (
            <NotFound />
        );
    }

    if (isLoading) {
        return (
            <main className="min-h-screen bg-[#2C1F33] text-[#B9A38B]" id="details">
                <section className="px-6 pt-28 md:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                            <SkeletonBlock className="h-[420px] w-full rounded-4xl md:h-[520px]" />
                            <div className="py-8">
                                <SkeletonText className="h-5 w-28" />
                                <SkeletonText className="mt-4 h-14 w-72 md:h-16 md:w-80" />
                                <div className="mt-7 space-y-3">
                                    <SkeletonText className="h-4 w-full" />
                                    <SkeletonText className="h-4 w-full" />
                                    <SkeletonText className="h-4 w-3/4" />
                                </div>
                                <div className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-7 md:grid-cols-4">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div key={index} className="space-y-2">
                                            <SkeletonText className="h-3 w-14" />
                                            <SkeletonText className="h-5 w-20" />
                                        </div>
                                    ))}
                                </div>
                                <div className="my-5 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                                    <div className="space-y-2">
                                        <SkeletonText className="h-4 w-24" />
                                        <SkeletonText className="h-8 w-32" />
                                    </div>
                                    <SkeletonBlock className="h-14 w-48 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-24 bg-[#2C1F33] px-6 py-20 text-white shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] md:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <SkeletonText className="h-5 w-52" />
                        <SkeletonText className="mt-4 h-12 w-80" />
                        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="flex items-center gap-4 border-b border-white pb-5">
                                    <SkeletonBlock className="h-8 w-8 rounded-full" />
                                    <SkeletonText className="h-4 w-40" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className="bg-[#2C1F33] text-[#B9A38B] min-h-screen" id="details">

            <section className="pt-28 px-6 md:px-10 lg:px-16">
                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={stagger}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-2">

                        <motion.div variants={fadeLeft} className="overflow-hidden rounded-4xl shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                            <motion.img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-80 md:h-137.5 lg:h-162.5 object-cover"
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </motion.div>

                        <motion.div variants={fadeRight} className="py-8">

                            <motion.p variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#B9A38B] font-semibold">
                                {room.category}
                            </motion.p>

                            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight">
                                {room.name}
                            </motion.h1>

                            <motion.p variants={fadeUp} className="mt-7 text-[#B9A38B]/70 leading-8 max-w-xl">
                                {room.description}
                            </motion.p>

                            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/10 py-7 mt-10">

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#B9A38B]/50">
                                        Size
                                    </p>
                                    <p className="font-semibold mt-2">
                                        {room.size}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#B9A38B]/50">
                                        Guests
                                    </p>
                                    <p className="font-semibold mt-2">
                                        {room.guests}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#B9A38B]/50">
                                        Bed
                                    </p>
                                    <p className="font-semibold mt-2">
                                        {room.bed}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#B9A38B]/50">
                                        View
                                    </p>
                                    <p className="font-semibold mt-2">
                                        {room.view}
                                    </p>
                                </div>

                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 my-5">

                                <div>
                                    <p className="text-sm text-[#B9A38B]/50">
                                        Starting from
                                    </p>

                                    <p className="text-3xl font-bold text-[#B9A38B]">
                                        ${room.price}
                                        <span className="text-sm text-[#B9A38B]/60 font-normal">
                                            {" "} / {room.currency}
                                        </span>
                                    </p>
                                </div>

                                <div>
                                    <Link
                                        // to={`/booking/${room.slug}`}
                                        to="/booking"
                                        className="border border-white/10 text-white px-8 py-4 rounded-full text-center font-semibold hover:bg-[#B9A38B] hover:text-[#2C1F33] transition duration-300">
                                        Reserve This Suite
                                    </Link>
                                </div>

                            </motion.div>

                        </motion.div>
                    </motion.div>

                    <div className="py-3">
                        <Link
                            to="/room"
                            className="inline-flex items-center gap-2 text-sm text-[#B9A38B]/70 hover:text-[#B9A38B] transition mb-8">
                            <FaArrowLeft />
                            Back to Rooms
                        </Link>
                    </div>
                </div>
            </section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="mt-24 bg-[#2C1F33] text-white px-6 md:px-10 lg:px-16 py-20 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]">

                <div className="max-w-7xl mx-auto">

                    <motion.div variants={fadeUp} className="max-w-2xl">
                        <p className="uppercase tracking-[0.3em] text-sm text-[#B9A38B]">
                            The Nestora Standard
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-4">
                            Everything you need.
                            <br />
                            Nothing overlooked.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mt-12">

                        {room.amenities.map((amenity, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-center gap-4 border-b border-white pb-5">
                                <span className="w-8 h-8 rounded-full border border-[#B9A38B] flex items-center justify-center text-[#B9A38B] text-xs">
                                    <FaCheck />
                                </span>

                                <p className="text-gray-300">
                                    {amenity}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
                className="px-4 py-24 text-center">

                <motion.p variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#B9A38B]">
                    Your Nestora Experience
                </motion.p>

                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mt-4">
                    Your suite awaits.
                </motion.h2>

                <motion.p variants={fadeUp} className="max-w-xl mx-auto mt-5 text-gray-200 leading-7">
                    Step into a world of refined comfort, exceptional service
                    and complete privacy.
                </motion.p>

                <motion.div variants={fadeUp}>
                    <Link
                        to="/booking"
                        className="inline-block mt-6 md:mt-10 border bg-[#2C1F33] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B9A38B] hover:text-[#2C1F33] transition duration-300">
                        Reserve Your Stay
                    </Link>
                </motion.div>

            </motion.section>

        </main>
    );
}