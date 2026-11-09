import { useEffect, useState } from "react";
import { Carouselimages } from '../utilis/carouselmage'
import { journey } from "../utilis/journey"
import images5 from "../assets/videos/images5.jpeg"
import studying from "../assets/videos/studying.jpg"
import { SkeletonBlock, SkeletonText } from "../component/skeleton";
import { motion } from "framer-motion";

export default function Founder() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <div className="mx-auto max-w-6xl px-4 pt-34">
                <SkeletonText className="mx-auto h-12 w-80" />
                <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 md:py-16">
                    <SkeletonBlock className="h-[500px] w-full rounded-4xl" />
                    <div className="space-y-6 pt-10">
                        <SkeletonText className="mx-auto h-9 w-48" />
                        <SkeletonText className="mx-auto h-16 w-40" />
                        <SkeletonText className="mx-auto h-4 w-44" />
                        <div className="space-y-3">
                            <SkeletonText className="h-4 w-full" />
                            <SkeletonText className="h-4 w-full" />
                            <SkeletonText className="h-4 w-11/12" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-20 px-4 md:grid-cols-2 md:py-8">
                    <div className="space-y-5">
                        <SkeletonText className="h-10 w-52" />
                        <SkeletonText className="h-4 w-full" />
                        <SkeletonText className="h-4 w-full" />
                        <SkeletonText className="h-4 w-11/12" />
                    </div>
                    <SkeletonBlock className="h-[400px] w-full rounded-4xl" />
                </div>

                <div className="pt-12">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="space-y-3">
                                <SkeletonBlock className="h-80 w-full rounded-br-4xl rounded-tl-4xl" />
                                <SkeletonText className="h-4 w-32" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl m-auto pt-30 px-4">
            <h1 className='text-3xl md:text-4xl uppercase font-extrabold text-center'>Who Is Behind Nestora?</h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 md:py-16">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.9,
                                ease: "easeOut",
                            },
                        },
                    }}
                    className="row-start-2 lg:row-start-1 px-2 md:px-8 overflow-hidden rounded-4xl">
                    <motion.img
                        src={images5}
                        alt="hero"
                        className="w-full h-84 md:h-150 object-cover rounded-4xl"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.9,
                                ease: "easeOut",
                            },
                        },
                    }}
                    className="space-y-6 pt-3 text-center" >
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6 },
                            },
                        }}
                        className="text-3xl uppercase font-extrabold">
                        The founder
                    </motion.h1>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="text-6xl font-serif uppercase text-[#B9A38B]">
                        Praise
                    </motion.h1>

                    <div>
                        <p className="uppercase">Founder & visionary</p>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 40 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-[#A8A29A] h-px m-auto my-2"
                        />
                    </div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { duration: 0.7 },
                            },
                        }}
                        className="text-md max-w-xs m-auto italic">
                        Behind every exceptional experience is a vision that refuse to be
                        ordinary
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8 },
                            },
                        }}
                        className="px-4 py-8 leading-10 text-justify max-w-3xl m-auto lg:px-1">
                        <p>
                            Behind the name is Praise, a young creative and technology,
                            driven founder with a deep fascination for design, digital
                            experiences, architecture, and the art of creating something
                            from nothing.
                        </p>

                        <p>
                            Long before Nestora became a vision for luxury hospitality and
                            real estate, there was a simple desire: to build something
                            meaningful something that could stand beyond its creator and
                            become a symbol of excellence. That desire became the
                            foundation of Nestora.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:py-5">

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut",
                            },
                        },
                    }}
                    className="px-4 text-justify leading-10 max-w-3xl text-md m-auto lg:px-1">
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.7 },
                            },
                        }}
                        className="font-extrabold text-[#A8A29A] uppercase text-5xl py-6 text-center">
                        My story
                    </motion.h1>

                    <p>
                        The journey to Nestora was not built from certainty. It was built
                        through learning, experimenting, designing, failing, starting again,
                        and constantly asking a simple question{" "}
                        <span className="underline text-sm font-bold">
                            How can this be better?
                        </span>
                    </p>

                    <p>
                        My journey through technology and web development became an
                        important part of that process. Learning to build digital
                        experiences from scratch created an appreciation for the details
                        that most people overlook, the interaction, the atmosphere, the
                        presentation, and the emotion behind an experience. That same
                        attention to detail became the philosophy behind Nestora.
                        Nestora was envisioned not simply as another luxury brand, but as
                        a world where architecture, hospitality, technology, and
                        exceptional service come together.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.9,
                                ease: "easeOut",
                            },
                        },
                    }}
                    className="px-2 md:px-4 overflow-hidden rounded-4xl">
                    <motion.img
                        src={studying}
                        alt="studying"
                        className="w-full h-80 md:h-140 object-cover rounded-4xl"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </motion.div>
            </motion.div>

            <div className="pt-12">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col justify-end space-y-7 px-4">

                    <h1 className="text-sm">Behind The Vision</h1>

                    <p className="italic font-serif font-bold text-3xl max-w-sm">
                        A glimpse into the process personality
                    </p>
                </motion.div>

                <div className="px-2 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {journey.map((imgs, index) => (
                        <motion.div
                            key={imgs.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -8 }}>
                            <div className="overflow-hidden rounded-br-4xl rounded-tl-4xl">
                                <motion.img
                                    src={imgs.images}
                                    alt="journey"
                                    className="w-full h-80 object-cover"
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <p className="font-bold text-sm text-[#B9A38B] mt-3">
                                {imgs.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>


            <div className="md:py-16 py-8">

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-extrabold text-center text-[#B9A38B] uppercase">
                    Founder Gallery
                </motion.h1>

                <div className="px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-7 py-10 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl max-w-md italic font-serif">
                        <p>Moment that inspire the mission</p>
                    </motion.div>

                    {Carouselimages.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="overflow-hidden rounded-2xl">
                            <motion.img
                                src={img.image}
                                alt={`Founder ${index + 1}`}
                                className="w-full aspect-[4/5] object-cover"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div >
    )
}

// #F4F0E8
// 171717
// D8C7A3
// A8A29A