import { useTheme } from "@/utilis/useTheme";
import { useState } from "react";

export default function Calculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [status, setStatus] = useState("");
    const [bmi, setBmi] = useState(null);

    const BmiCalculator = () => {
        if (!weight || !height) {
            alert("Please enter both weight and height");
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        let bmiStatus = "";

        if (bmiValue < 18.5) {
            bmiStatus = "Underweight";
        } else if (bmiValue < 24.9) {
            bmiStatus = "Normal weight";
        } else if (bmiValue < 29.9) {
            bmiStatus = "Overweight";
        } else {
            bmiStatus = "Obesity";
        }

        setStatus(bmiStatus);
    };
    const { darkMode } = useTheme()
    return (
        <div className={`py-16 px-4  ${darkMode ? "bg-black" : "bg-[#FDF6EC] shadow-2xl"}`}>
            <div className="max-w-3xl mx-auto bg-[#121311] rounded-2xl shadow-3xl p-8 md:p-12 bg-[#1C1B1B] rounded-xl p-6 border border-gray-800 transition-all duration-300 shadow-[0_0_35px_rgba(133,169,255,0.45)] hover:-translate-y-2">

                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        BMI{" "}
                        <span className="text-[#85A9FF]">CALCULATOR</span>
                    </h1>

                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Understand your body composition and start setting
                        measurable goals today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                    <label className="text-white font-medium">
                        Weight (kg)
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter your weight"
                            className="w-full mt-3 bg-[#1C1B1B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#85A9FF]" />
                    </label>

                    <label className="text-white font-medium">
                        Height (cm)

                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Enter your height"
                            className="w-full mt-3 bg-[#1C1B1B] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#85A9FF]" />
                    </label>
                </div>

                <div className="mt-10">
                    <button
                        onClick={BmiCalculator}
                        className="w-full md:w-auto px-10 md:px-16 py-3 bg-[#85A9FF] text-black font-semibold rounded-xl hover:bg-blue-400 transition duration-300">
                        Calculate BMI
                    </button>
                </div>

                {bmi && (
                    <div className="mt-10 bg-[#1C1B1B] rounded-2xl p-8 text-center shadow-lg">

                        <h2 className="text-gray-400 text-lg">
                            Your BMI
                        </h2>

                        <p className="text-5xl font-bold text-[#85A9FF] mt-3">
                            {bmi}
                        </p>

                        <div className="mt-6">
                            <p className="text-gray-400">
                                Health Status
                            </p>

                            <p className="text-2xl font-semibold text-white mt-2">
                                {status}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}