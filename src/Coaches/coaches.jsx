// import { error } from "node:console";
// import { useTheme } from "@/utilis/useTheme";
import trainers from "../utilis/trainersCard";
import { CiShare2 } from "react-icons/ci";

export default function Coaches() {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "ForgeFit Elite Gym",
                    text: "Check out ForgeFit Elite Gym!",
                    url: window.location.href,
                });
            } catch { }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    //  const { darkMode } = useTheme()
    return (
        <section>
            <div className="py-10 text-center">
                <h1 className="text-3xl">
                    ELITE <span className="text-[#85A9FF]">COACHES</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-5">
                {trainers.map((trainer) => (
                    <div
                        key={trainer.id}
                        className="relative group rounded-xl overflow-hidden">
                        <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="w-full h-96 object-cover transition duration-500 group-hover:scale-110"/>

                        <div className="absolute left-0 bottom-0 w-full px-5 py-2 bg-white/10 backdrop-blur-xl">
                            <p className="text-white">{trainer.name}</p>

                            <p className="text-sm text-[#85A9FF]">
                                {trainer.role}
                            </p>

                            <div className="absolute bottom-3 right-5 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                                <CiShare2
                                    onClick={handleShare}
                                    className="text-xl font-bold cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}