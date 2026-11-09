import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Loading() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 400);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex  justify-center items-center h-screen gap-5">

                <AiOutlineLoading3Quarters className="animate-spin text-5xl font-bold text-[#8193BD]" />
                <h1 className="text-3xl font-bold">
                    ForgeFit
                </h1>

                <p className="text-gray-400 text-3xl">
                    Loading{dots}
                </p>
            </div>
        </>
    )
}