import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import boss from "../assets/boss.jpg"
import girl from "../assets/girl.jpg"
import girl2 from "../assets/girl2.jpg"
import girl3 from "../assets/girl3.jpg"
import Don from "../assets/Don1.jpg"
import Don2 from "../assets/Don2.jpg"

const testimonials = [
    {
        name: "Alexander Morgan (Entrepreneur)",
        text: `From the moment I arrived, Nestora exceeded every expectation.
        The attention to detail, exceptional service, and breathtaking atmosphere made my stay truly unforgettable.`,
        image: boss
    },
    {
        name: "David Reynolds (Investor)",
        text: `I've traveled to some of the world's finest destinations,
    but Nestora stands in a class of its own. The privacy and sophistication are unmatched.`,
        image: Don
    },
    {
        name: "Sophia Laurent (Fashion Executive)",
        text: `Nestora perfectly combines elegance and comfort. Every suite,
    every meal, and every interaction reflected a level of luxury I've rarely experienced anywhere else.`,
        image: girl
    },
    {
        name: "Michael Thompson (Business Consultant)",
        text: `Whether for business or relaxation, Nestora provides an extraordinary experience.
        The staff anticipated every need before I even had to ask.`,
        image: Don2
    },
    {
        name: "Isabella Moretti ( Interior Designer)",
        text: `The architecture and interior design are simply magnificent.
    Nestora is more than a hotel it's a masterpiece crafted for those who appreciate beauty and excellence.`,
        image: girl2
    },
    {
        name: "Olivia Bennett (Travel Enthusiast)",
        text: `Nestora transformed my vacation into a memory I'll cherish forever.
       The luxurious atmosphere and world-class hospitality made every moment special.`,
        image: girl3
    },
];

export default function TestimonialCard() {
    return (
        <section className="mx-4">
            <h1 className="text-4xl font-extrabold text-center uppercase mb-12">
                Testimonials
            </h1>

            <div className="bg-[#B9A38B] w-full px-3 py-8 md:p-10 lg:p-20 rounded-3xl max-w-7xl mx-auto shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6, scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            className="bg-[#2C1F33] rounded-3xl px-6 py-8 flex flex-col h-full shadow-[-8px_-8px_16px_rgba(72,52,82,0.6),8px_8px_16px_rgba(0,0,0,0.5)]">
                            <span className="flex justify-center gap-1 text-yellow-500 mb-6">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </span>

                            <div className="m-auto">
                                <motion.img
                                    src={item.image}
                                    alt={item.name}
                                    whileHover={{ scale: 1.08, rotate: 3 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                                    className="w-16 h-16 mb-3 rounded-full object-cover object-top border-4 border-[#B9A38B] shadow-2xl"
                                />
                            </div>

                            <p className="leading-8 flex-1 text-white">
                                {item.text}
                            </p>

                            <p className="mt-8 text-xl font-bold text-[#B9A38B] tex-center">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}