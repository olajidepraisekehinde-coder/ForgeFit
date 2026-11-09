import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero4 from "../assets/hero/hero4.jpeg"
import kitchen1 from "../assets/resturant/kitchen1.jpg"
import kitchen2 from "../assets/resturant/kitchen2.jpg"
import kitchen3 from "../assets/resturant/kitchen3.jpg"
import car1 from "../assets/carPark/car1.jpg"
import car2 from "../assets/carPark/car2.jpg"
import car3 from "../assets/carPark/car3.jpg"
import car5 from "../assets/carPark/car5.jpg"
import hall1 from "../assets/hall/hall1.jpg"
import hall2 from "../assets/hall/hall2.jpg"
import hall3 from "../assets/hall/hall3.jpg"
import hall4 from "../assets/hall/hall4.jpg"
import club1 from "../assets/bars/bar1.jpg"
import club2 from "../assets/bars/bar2.jpg"
import club3 from "../assets/bars/bar3.jpg"
import club4 from "../assets/bars/bar4.jpg"
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function Services() {
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
        hidden: { opacity: 0, x: -30 },
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

    const dining = [
        { id: 1, image: kitchen1 },
        { id: 2, image: kitchen2 },
        { id: 3, image: kitchen3 },
        { id: 4, image: hero4 }
    ]

    const carPark = [
        { id: 1, image: car1 },
        { id: 2, image: car2 },
        { id: 3, image: car3 },
        { id: 4, image: car5 }
    ]

    if (isLoading) {
        return (
            <section>
                <main className="relative h-screen bg-[#f3eee8]">
                    <SkeletonBlock className="h-full w-full rounded-none" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-16 text-center">
                        <SkeletonText className="h-5 w-52" />
                        <SkeletonText className="h-12 w-72 md:w-96" />
                        <SkeletonText className="h-5 w-64 md:w-80" />
                    </div>
                </main>

                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="space-y-3 py-8 text-center">
                        <SkeletonText className="mx-auto h-10 w-64" />
                        <SkeletonText className="mx-auto h-4 w-40" />
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonBlock key={index} className="h-72 w-full rounded-2xl" />
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 pb-12">
                    <div className="py-8">
                        <SkeletonText className="mx-auto h-10 w-72" />
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <SkeletonBlock key={index} className="h-72 w-full rounded-2xl" />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section>
            <motion.main
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className="relative h-screen">
                <motion.img
                    variants={fadeLeft}
                    src={hero4}
                    alt="hero"
                    className="w-full object-cover h-screen"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 md:px-16 space-y-4 text-center pt-24 md:pt-5">
                    <motion.h1 variants={fadeUp} className="text-sm font-bold italic capitalize">service and experience</motion.h1>
                    <motion.h1 variants={fadeUp} className="text-3xl md:text-6xl font-extrabold font-serif">Beyond the stay</motion.h1>

                    <motion.div variants={fadeUp} className="space-y-2 text-center">
                        <p className="text-xl font-bold uppercase font-serif">Discover the Nestora experience</p>
                        <p className="text-sm italic">Everything you need, thoughtfully arranged</p>
                    </motion.div>
                </div>
            </motion.main>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                id="resturants">
                <div className="max-w-7xl m-auto py-12 px-6">
                    <motion.div variants={fadeUp} className="py-8 text-center space-y-3">
                        <h1 className="text-3xl md:text-4xl font-extrabold  uppercase">Resturant and Culinary</h1>

                        <p>
                            Fine dining
                            Private Dining
                            In suite-dining</p>
                    </motion.div>

                    <div className="flex gap-8 md:gap-12 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-hidden">
                        {dining.map((list) => (
                            <motion.div key={list.id}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                className="shrink-0 overflow-hidden rounded-2xl">

                                <motion.img
                                    src={list.image}
                                    alt="dining"
                                    className="w-50 md:80 h-64 md:h-80 md:w-full object-cover transition duration-500"
                                    whileHover={{ scale: 1.08 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                id="valet">
                <div className="max-w-7xl m-auto pb-12 px-6">
                    <motion.div variants={fadeUp} className="py-8 text-center">
                        <h1 className="text-3xl md:text-4xl font-extrabold uppercase">private parking & valet</h1>

                    </motion.div>

                    <div className="flex gap-8 md:gap-12 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-hidden">
                        {carPark.map((list) => (
                            <motion.div key={list.id}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                className="shrink-0 overflow-hidden rounded-2xl">

                                <motion.img
                                    src={list.image}
                                    alt="dining"
                                    className="w-50 md:80 h-64 md:h-80 md:w-full object-cover transition duration-500"
                                    whileHover={{ scale: 1.08 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div >
                    <div className="max-w-7xl m-auto pb-12 px-6">

                        <motion.div variants={fadeUp} className="py-8 text-center space-y-3">
                            <h1 className="text-3xl md:text-4xl font-extrabold uppercase">The Nestora Hall</h1>
                            <p className="max-w-md m-auto capitalize">For weddings, priavte Celebrations, coporate events, galas and exclusive gathering</p>
                        </motion.div>
                        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-hidden">
                            {[hall1, hall2, hall3, hall4].map((hall, index) => (
                                <motion.div key={index}
                                    variants={fadeUp}
                                    whileHover={{ y: -6 }}
                                    className="shrink-0 overflow-hidden rounded-2xl">

                                    <motion.img
                                        src={hall}
                                        alt="dining"
                                        className="w-50 md:80 h-64 md:h-80 md:w-full object-cover transition duration-500"
                                        whileHover={{ scale: 1.08 }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                id="clubs">
                <div className="max-w-7xl m-auto pb-12 px-6">
                    <motion.div variants={fadeUp} className="py-8 text-center space-y-3">
                        <h1 className="text-3xl md:text-4xl font-extrabold uppercase">The Nestora Clubs</h1>
                        <p className="capitalize">Your private social/lounge experience</p>
                    </motion.div>

                    <div className="flex gap-8 md:gap-12 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-hidden">
                        {[club1, club2, club3, club4].map((hall, index) => (
                            <motion.div key={index}
                                variants={fadeUp}
                                whileHover={{ y: -6 }}
                                className="shrink-0 overflow-hidden rounded-2xl">

                                <motion.img
                                    src={hall}
                                    alt="dining"
                                    className="w-50 h-64 md:h-80 md:w-full object-cover transition duration-500"
                                    whileHover={{ scale: 1.08 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className='max-w-3xl m-auto px-4 text-center'>
                <motion.div variants={fadeUp} className="shadow-2xl px-10 py-12 bg-white/40 backdrop:backdrop-blur-3xl text-black rounded-4xl items-center">

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold capitalize">Bespoke experience</h1>
                        <p className="">If you can imagine it,</p>
                        <p>we can arrange it</p>
                        <p>[speak with concierges]</p>
                    </div>
                </motion.div>
            </motion.aside>
        </section >
    )
}
