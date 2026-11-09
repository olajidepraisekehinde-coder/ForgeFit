import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsShieldCheck } from "react-icons/bs";
import Hero from "../component/hero";
import { FaGem, FaLandmark } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { HiSparkles } from "react-icons/hi";
import { IoLockClosed, } from "react-icons/io5";
import TestimonialCard from "../component/testimonialCard";
import Numbers from "../component/numbers";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const fadeUp = {
        hidden: { opacity: 0, y: 28 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
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
    }, []);

    if (isLoading) {
        return (
            <div>
                <section className="relative h-screen overflow-hidden bg-[#f3eee8]">
                    <SkeletonBlock className="absolute inset-0 h-full w-full rounded-none" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 pt-30 text-white">
                        <SkeletonText className="h-12 w-64 md:w-80" />
                        <SkeletonText className="mt-4 h-8 w-60 md:w-72" />
                        <div className="mt-6 max-w-3xl space-y-3">
                            <SkeletonText className="h-5 w-full" />
                            <SkeletonText className="h-5 w-11/12" />
                            <SkeletonText className="h-5 w-10/12" />
                        </div>
                    </div>
                </section>

                <div className="my-12 mx-10">
                    <SkeletonText className="mx-auto h-12 w-72" />
                    <div className="mx-auto mt-8 max-w-xl space-y-3 text-center">
                        <SkeletonText className="mx-auto h-4 w-full" />
                        <SkeletonText className="mx-auto h-4 w-11/12" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 text-center">
                                <SkeletonBlock className="h-12 w-20" />
                                <SkeletonText className="h-4 w-28" />
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <SkeletonText className="mx-auto h-12 w-52" />
                        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-[#B9A38B]/80 rounded-br-2xl rounded-tl-4xl px-8 py-5 shadow-xl">
                                    <SkeletonBlock className="mx-auto h-10 w-10 rounded-full" />
                                    <SkeletonText className="mx-auto mt-5 h-8 w-4/5" />
                                    <div className="mt-5 space-y-3">
                                        <SkeletonText className="h-4 w-full" />
                                        <SkeletonText className="h-4 w-full" />
                                        <SkeletonText className="h-4 w-11/12" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section>
            <Hero />
            <motion.div
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="my-12 mx-5">
                <motion.h1 variants={fadeUp} className="text-center text-4xl font-extrabold text-[#B9A38B]">Our Quiet Dominance</motion.h1>

                <motion.div variants={fadeUp} className="max-w-md text-md px-5 py-8 m-auto text-center">
                    <h1>We do not cater to billionaires simply because of their wealth,
                        but because we understand the rare loneliness of extraordinary success.
                        Here, you are not a guest; you are the sole inheritor of a silence most will never know.</h1>
                </motion.div>

                <motion.div variants={fadeUp}>
                    <Numbers />
                </motion.div>

                <section className="">
                    <motion.h1 variants={fadeUp} className="text-center text-4xl font-extrabold text-[#B9A38B]">Core value</motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 max-w-6xl m-auto">
                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10 space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <BsShieldCheck
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">Silence Beyond Luxury</p>
                            <p>
                                True luxury is not measured by gold, marble, or chandeliers,
                                it is measured by peace. At Nestora, privacy is sacred.
                                Every guest is given the freedom to disconnect from the noise of the world and
                                reconnect with what truly matters</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10  space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <FaGem
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">Crafted for the Extraordinary</p>
                            <p>
                                Nestora was never designed for the ordinary traveler. Every suite, every meal,
                                and every experience is carefully curated for visionaries, innovators, and
                                those who expect nothing less than perfection</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10  space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <LuCrown
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">Timeless Elegance</p>
                            <p>
                                Trends fade, but elegance endures. Nestora combines timeless architecture with
                                modern sophistication, creating spaces that remain beautiful and
                                relevant for generations.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10  space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <HiSparkles
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">Service Without Boundaries</p>
                            <p>
                                Luxury is found in the details that guests never have to request.
                                Anticipating needs, exceeding expectations, and delivering
                                unforgettable moments are at the heart of every interaction</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10  space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <FaLandmark
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">A Legacy of Belonging</p>
                            <p>
                                More than a destination, Nestora is a place where stories are created,
                                milestones are celebrated, and memories become part of a lasting legacy.</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="bg-[#B9A38B] rounded-br-2xl rounded-tl-4xl w-full shadow-xl flex flex-col items-center px-6 py-8 pb-16 md:py-10  space-y-5 transition-all duration-500 hover:-translate-y-3">

                            <span>
                                <IoLockClosed
                                    className="text-3xl font-bold text-[#2C1F33]" />
                            </span>

                            <p className="text-3xl font-bold text-center text-[#2C1F33]">The Art of Privacy</p>
                            <p>
                                For those who shape the world, privacy is priceless.
                                Nestora is built on trust, discretion, and
                                the belief that true exclusivity comes from making every guest feel secure and respected.</p>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
            <TestimonialCard />
        </section>
    )
}
