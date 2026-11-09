import ProgramCard from "./programCard";
import { motion } from "framer-motion";

export default function Program() {
    // const [isExpanded, setIsExpanded] = useState(false);
    // const content =
    //     "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly. It allows developers to rapidly build modern websites without leaving their HTML.";

    // // Limit preview length
    // const previewLength = 100;
    // const [search, setSearch] = useState("")

    return (
        <>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="pt-32 2xl:max-w-7xl 2xl:mx-auto">
                    <div className="max-w-xl px-6  md:px-16">
                        <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-300">Forge Your Path</h1>
                        <p className="py-4">Curated high-performance training programs designed for precision and results. Filter by your goals and start your transformation today.</p>
                    </div>
                    <ProgramCard />
                </motion.div>
            </div>
        </>
    )
}




// Example long text

