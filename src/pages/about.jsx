import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero5 from "../assets/hero/hero5.jpeg";
import video from "../assets/hero/video.mp4"
import History from "../component/history";
import { Link } from "react-router-dom";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function About() {
    const [isLoading, setIsLoading] = useState(true)

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
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

    const fadeRight = {
        hidden: { opacity: 0, x: 32 },
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

    if (isLoading) {
        return (
            <div>
                <section className="relative min-h-screen overflow-hidden bg-[#efeae2]">
                    <SkeletonBlock className="absolute inset-0 h-full w-full rounded-none" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 md:px-16 lg:px-24 lg:py-24">
                        <div className="space-y-6 text-center">
                            <SkeletonText className="mx-auto h-4 w-48" />
                            <SkeletonText className="mx-auto h-20 w-72 md:w-[32rem]" />
                            <SkeletonText className="mx-auto h-4 w-80" />
                        </div>
                    </div>
                </section>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
                    <SkeletonBlock className="h-[600px] w-full rounded-2xl" />
                    <div className="space-y-6">
                        <SkeletonText className="mx-auto h-12 w-48" />
                        <SkeletonText className="h-4 w-full" />
                        <SkeletonText className="h-4 w-full" />
                        <SkeletonText className="h-4 w-11/12" />
                        <SkeletonText className="h-4 w-full" />
                        <SkeletonText className="h-4 w-10/12" />
                    </div>
                </div>

                <div className="space-y-6 px-6 pb-4">
                    <SkeletonText className="mx-auto h-10 w-72" />
                    <SkeletonText className="mx-auto h-4 w-48" />
                    <SkeletonText className="mx-auto h-4 w-3/4" />
                </div>

                <div className="px-7 pb-10 md:px-12">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonBlock key={index} className="h-64 w-full rounded-lg" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className="relative min-h-screen overflow-hidden">
                <motion.img
                    variants={fadeLeft}
                    src={hero5}
                    alt="Nestora luxury interior"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 min-h-screen flex justify-center items-center px-6 py-16 md:px-16 lg:px-24 lg:py-24">
                    <motion.div variants={fadeUp} className="text-center">

                        <div className="text-center pt-10">
                            <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.35em] text-white/80">
                                Our Story
                            </motion.p>
                        </div>

                        <div className="max-w-5xl">
                            <motion.h1 variants={fadeUp} className="text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                                More than
                                <span className="block font-medium text-[#B9A38B]">
                                    a hotel.
                                </span>
                            </motion.h1>
                        </div>

                        <div className="mt-10 flex flex-col border-t border-white/20 pt-6 gap-10">

                            <motion.p variants={fadeUp} className="max-w-md text-sm leading-7 text-white/75">
                                A private world crafted for those who value discretion,
                                precision, and extraordinary service.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex justify-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70">
                                <span>Discover Nestora</span>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 px-6 max-w-7xl m-auto">
                <motion.div variants={fadeLeft} className="">

                    <video
                        controls autoPlay muted loop playsInline
                        src={video} type="video/mp4"
                        className="w-full h-[600px] object-cover rounded-2xl" />
                </motion.div>

                <motion.div variants={fadeRight} className="space-y-7 px-3 lg:px-4">

                    <motion.h1 variants={fadeUp} className="text-4xl text-center uppercase font-extrabold text-[#B9A38B]">About Us</motion.h1>

                    <motion.div variants={stagger} className="leading-10">

                        <motion.p variants={fadeUp}>
                            Nestora was founded in 1998, Nestora began as the dream of a visionary entrepreneur
                            who believed that true luxury lies not only in comfort but in extraordinary experiences.</motion.p>
                        <motion.p variants={fadeUp}>What started as an exclusive private resort for global leaders and influential personalities has
                        grown into one of the world's most prestigious hospitality destinations.</motion.p>

                        <motion.p variants={fadeUp}>For over twenty-eight years, Nestora has welcomed billionaires, royalty, celebrities, diplomats,
                            and business executives from every corner of the world.</motion.p>
                        <motion.p variants={fadeUp}>Built on the principles of excellence, privacy, and sophistication, Nestora has become a symbol of prestige and luxury.</motion.p>
                        <motion.p variants={fadeUp}>Today, our mission remains unchanged: to create unforgettable experiences in an environment where comfort meets elegance.</motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="space-y-5 px-6">
                <motion.h1 variants={fadeUp} className="text-center uppercase text-2xl md:text-3xl font-extrabold text-[#B9A38B]">The Nestora Philosophy</motion.h1>
                <motion.p variants={fadeUp} className="text-sm text-center">True luxury is felt, not displayed.</motion.p>

                <motion.div variants={fadeUp} className="max-w-xl m-auto text-md leading-10 px-2 text-justify">
                    <p>Nestora was created around a simple belief, true luxury is not measured by what is displayed, but by what is experienced.
                        From the moment a guest arrives, every detail is carefully considered. </p>

                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="pt-10 md:pt-16">
                <motion.h1 variants={fadeUp} className="text-3xl uppercase font-extrabold text-center text-[#B9A38B]">Our Principle</motion.h1>

                <div className="max-w-6xl m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-7 md:px-12">
                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                        <div class="flex p-2 gap-1">
                            <div class="" className="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Absolute Discretion</p>
                            <div className="leading-8">
                                <p>Your privacy is never an afterthought. From private arrivals to discreet service,</p>
                                <p> Nestora is designed to provide an environment where guests can move freely, comfortably and without interruption.</p>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                        <div class="flex p-2 gap-1">
                            <div class="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Exceptional Hospitality</p>
                            <p className="leading-8">We believe extraordinary service begins with anticipation. Our team is attentive without being intrusive, ensuring that every need is met with precision, warmth and complete professionalism..</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                        <div class="flex p-2 gap-1">
                            <div class="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Personalised Experiences</p>
                            <p className="leading-8">No two guests experience Nestora in quite the same way. From bespoke dining to carefully arranged experiences, every stay is shaped around individual preferences and expectations.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]">
                        <div class="flex p-2 gap-1">
                            <div class="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Architectural Excellence</p>
                            <p className="leading-8">Nestora's spaces are designed to be experienced, not simply admired. Every residence, restaurant and retreat combines refined materials, thoughtful proportions and timeless design.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                        <div class="flex p-2 gap-1">
                            <div class="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Attention to Detail</p>
                            <p className="leading-8">Luxury lives in the details. From the way a room is prepared to the smallest elements of a guest's experience, nothing is considered insignificant.</p>
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} class="bg-[#2C1F33] rounded-lg px-4 py-5 pb-12 shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)] ">
                        <div class="flex p-2 gap-1">
                            <div class="">
                                <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div class="circle">
                                <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>

                        </div>

                        <div class="card__content" className="space-y-8">
                            <p className="text-xl font-bold uppercase">Bespoke Experiences</p>
                            <p className="leading-8">No two stays should feel the same. From private dining to curated experiences, every detail can be shaped around the individual guest.</p>
                        </div>
                    </motion.div>

                </div>
            </motion.div>

            <History />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className="px-6 py-24 text-center">

                <motion.p variants={fadeUp} className="uppercase tracking-[0.3em] text-sm text-[#B9A38B]">
                    Your Nestora Experience
                </motion.p>

                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mt-4">
                    Your suite awaits.
                </motion.h2>

                <motion.p variants={fadeUp} className="max-w-xl mx-auto mt-5 text-[#B9A38B] leading-7 italic">
                    Step into a world of refined comfort, exceptional service
                    and complete privacy.
                </motion.p>

                <motion.div variants={fadeUp}>
                    <Link to="/booking"
                        className="inline-block mt-8 border bg-[#2C1F33] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#B9A38B] hover:text-[#2C1F33] transition duration-300">
                        Reserve Your Stay
                    </Link>
                </motion.div>

            </motion.div>

        </section>

    );
}