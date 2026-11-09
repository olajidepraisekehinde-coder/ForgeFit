
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero/hero6.jpeg";
import rooms from "../utilis/room";
import { calculateNight, calculateSubtotal, calculateTax, calculateTOTAL, NairaDollar } from "../utilis/calculation";
import WhyUs from "../component/whyUs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { SkeletonBlock, SkeletonText } from "../component/skeleton";

export default function Booking() {
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

    const fadeRight = {
        hidden: { opacity: 0, x: 30 },
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

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        rooms: "",
    });

    const [show, setShow] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setBooking((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Hide the summary if the user changes their booking
        setShow(false);
    }

    function handleChangeAvaliability(e) {
        e.preventDefault();

        if (
            !booking.checkIn ||
            !booking.checkOut ||
            !booking.guests ||
            !booking.rooms
        ) {
            alert("Please complete all booking details.");
            return;
        }

        if (booking.checkOut <= booking.checkIn) {
            alert("Check-out date must be after check-in date.");
            return;
        }

        setShow(true);
    }

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading(true)

        try {
            const reponse = await fetch(
                "https://formspree.io/f/xqpzbvwo",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        ...booking,

                        reservation_summary: `
                        Suite: ${selectedRoom?.name || ""}
                        Size: ${selectedRoom?.size || ""}
                        Bed: ${selectedRoom?.bed || ""}
                        Max Guests: ${selectedRoom?.guests || ""}
                        Name: ${booking.name}
                        Email: ${booking.email}
                        Phone: ${booking.phone}

                        Check-in: ${booking.checkIn}
                        Check-out: ${booking.checkOut}
                        Guests: ${booking.guests}

                        Number of Nights: ${nights}
                        Total Amount in Dollar: $${total.toLocaleString()}
                        Total Amount in Naira: ₦${exchange.toLocaleString()}
                        `,

                        nights,
                        total: total.toLocaleString(),
                        naira_total: exchange.toLocaleString(),
                    }),
                }
            )
            if (reponse.ok) {
                setSuccess("Message sent sucessfully")
                setBooking({
                    name: "",
                    email: "",
                    phone: "",
                    checkIn: "",
                    checkOut: "",
                    guests: "",
                    rooms: "",
                })
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            } else {
                setError("Something went wrong")

            }

        } catch {
            console.log("error", error)
            setError("Check your network")
        } finally {
            setLoading(false);
        }
    }

    // Find the selected room
    const selectedRoom = rooms.find(
        (room) => room.id === Number(booking.rooms) // you can use slug but remove number
    );

    // const { slug } = useParams();
    // const selectedRoom = rooms.find((room) => room.slug === slug)from roomdetails 

    // Calculate booking information only when a room is selected
    const nights =
        booking.checkIn && booking.checkOut
            ? calculateNight(booking.checkIn, booking.checkOut)
            : 0;

    const subTotal =
        selectedRoom && nights > 0
            ? calculateSubtotal(selectedRoom.price, nights)
            : 0;

    const tax = calculateTax(subTotal);
    const total = calculateTOTAL(subTotal, tax);

    // Temporary exchange rate.
    const exchange = NairaDollar(total, 1363.41);

    if (isLoading) {
        return (
            <div>
                <main className="relative h-screen bg-[#efeae2]">
                    <SkeletonBlock className="h-full w-full rounded-none" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex max-w-lg flex-col items-start justify-center space-y-5 px-6 text-white">
                        <SkeletonText className="h-5 w-32" />
                        <SkeletonText className="h-16 w-72 md:h-20 md:w-96" />
                        <SkeletonText className="h-5 w-64 md:w-80" />
                    </div>
                </main>

                <div className="mx-auto my-16 max-w-5xl overflow-hidden rounded-3xl bg-white py-10 shadow-2xl">
                    <div className="px-8 py-10">
                        <SkeletonText className="h-12 w-52" />
                    </div>

                    <div className="grid grid-cols-1 items-start gap-12 px-5 md:grid-cols-2 md:px-8">
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                <SkeletonBlock className="h-16 w-full rounded-xl" />
                                <SkeletonBlock className="h-16 w-full rounded-xl" />
                                <SkeletonBlock className="h-16 w-full rounded-xl" />
                                <SkeletonBlock className="h-16 w-full rounded-xl" />
                                <SkeletonBlock className="col-span-2 h-16 w-full rounded-xl" />
                                <SkeletonBlock className="col-span-2 h-16 w-full rounded-xl" />
                                <SkeletonBlock className="col-span-2 h-16 w-full rounded-4xl" />
                            </div>
                        </div>

                        <div className="space-y-4 rounded-3xl bg-[#A8A29A] p-4">
                            <SkeletonBlock className="h-[250px] w-full rounded-3xl" />
                            <SkeletonText className="h-10 w-40" />
                            <div className="flex gap-5">
                                <SkeletonText className="h-4 w-20" />
                                <SkeletonText className="h-4 w-20" />
                                <SkeletonText className="h-4 w-20" />
                            </div>
                            <div className="space-y-3 pt-3">
                                <SkeletonText className="h-5 w-full" />
                                <SkeletonText className="h-5 w-full" />
                                <SkeletonText className="h-5 w-full" />
                                <SkeletonText className="h-5 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section>
            <motion.div
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={stagger}
                className="h-screen relative">
                <motion.img
                    variants={fadeLeft}
                    src={hero}
                    alt="Nestora luxury hotel"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="md:max-w-3xl lg:max-w-lg absolute inset-0 flex flex-col items-start justify-center px-6 space-y-5 text-white md:px-16 md:text-left pt-24 md:pt-5">
                    <motion.h1 variants={fadeUp} className="text-sm italic">
                        Book your stay
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-5xl md:text-7xl font-bold font-serif text-[#B9A38B]">
                        Your Experience Begins Here
                    </motion.p>

                    <motion.p variants={fadeUp} className="text-sm">
                        Step into comfort, privacy and unmatched luxury at
                        Nestora.
                    </motion.p>
                </div>
            </motion.div>

            <motion.main
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="max-w-5xl mx-auto bg-white shadow-2xl text-black my-16 rounded-3xl overflow-hidden py-10">

                <motion.div variants={fadeUp} className="px-8 py-10">
                    <h1 className="text-4xl font-extrabold font-serif">
                        Book your stay
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-8 px-5 items-start">

                    <motion.form variants={fadeLeft} onSubmit={handleSubmit} className="flex flex-col h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor="firstname"
                                    className="block text-sm font-medium mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={booking.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <label htmlFor="firstname"
                                    className="block text-sm font-medium mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={booking.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@gmail.com"
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                />
                            </div>


                            <div className="col-span-2 md:col-span-1">
                                <label
                                    htmlFor="checkIn"
                                    className="block text-sm font-medium mb-2">
                                    Check-in
                                </label>

                                <input
                                    id="checkIn"
                                    type="date"
                                    name="checkIn"
                                    value={booking.checkIn}
                                    onChange={handleChange}
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                    required
                                />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <label
                                    htmlFor="checkOut"
                                    className="block text-sm font-medium mb-2">
                                    Check-out
                                </label>

                                <input
                                    id="checkOut"
                                    type="date"
                                    name="checkOut"
                                    value={booking.checkOut}
                                    onChange={handleChange}
                                    min={booking.checkIn}
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                    required
                                />
                            </div>

                            <div className="mt-6 col-span-2 md:col-span-1">
                                <label
                                    htmlFor="guests"
                                    className="block text-sm font-medium mb-2">
                                    Guests
                                </label>


                                <p></p>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={booking.guests}
                                    onChange={handleChange}
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                    required>

                                    <option value="">
                                        Select number of guests
                                    </option>

                                    <option value="1 Guest">
                                        1 Guest
                                    </option>

                                    <option value="2 Guests">
                                        2 Guests
                                    </option>

                                    <option value="3 Guests">
                                        3 Guests
                                    </option>

                                    <option value="4 Guests">
                                        4 Guests
                                    </option>

                                    <option value="5 Guests">
                                        5 Guests
                                    </option>

                                    <option value="6 Guests">
                                        6 Guests
                                    </option>
                                </select>
                            </div>

                            <div className="mt-6 col-span-2 md:col-span-1">
                                <label htmlFor="firstname"
                                    className="block text-sm font-medium mb-2">
                                    Phone No
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={booking.phone}
                                    onChange={handleChange}
                                    placeholder="080*****"
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                />
                            </div>

                            {/* {show && selectedRoom && (
                                {booking ? (

                                )}
                                <p>ff</p>

                            ) : (
                                <p>Room can not contain {booking.guests}</p>

                            )} */}

                            <div className="col-span-2">
                                <label
                                    htmlFor="rooms"
                                    className="block text-sm font-medium mb-2">
                                    Suite
                                </label>

                                <select
                                    id="rooms"
                                    name="rooms"
                                    value={booking.rooms}
                                    onChange={handleChange}
                                    className="w-full border bg-[#2C1F33] text-white border-gray-300 rounded-xl px-4 py-4 outline-none focus:border-[#B9A38B]"
                                    required>

                                    <option value="">
                                        Select a suite
                                    </option>

                                    {rooms.map((room) => (
                                        <option
                                            key={room.id} //you can use slug instead of id
                                            value={room.id}>
                                            {room.name}
                                        </option>
                                    ))}


                                </select>
                                {show && booking.guests > selectedRoom.guests ? (
                                    <div className="bg-red-300 px-5 py-3 rounded-lg text-center mt-6 border border-red-500">

                                        <p
                                            className="text-red-700 text-md font-serif">
                                            <span className="font-bold italic">{selectedRoom.name} suite</span> can not contain {selectedRoom.guests} guests</p>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </div>

                            <div className="col-span-2 border-t border-gray-200 mt-8 pt-6">
                                {selectedRoom ? (
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            From
                                        </p>

                                        <p className="text-2xl font-bold mt-1">
                                            {selectedRoom.price.toLocaleString()}
                                        </p>

                                        <span className="text-sm text-gray-500">
                                            / {selectedRoom.currency}
                                        </span>
                                    </div>
                                ) : (
                                    <p className="text-sm text-gray-400">
                                        Select a suite to see the room price.
                                    </p>
                                )}
                            </div>

                        
                                    <button
                                        onClick={handleChangeAvaliability}
                                        className="col-span-2 text-xl font-serif bg-[#2C1F33] text-white px-4 py-6 rounded-4xl">
                                        Check avaliability
                                    </button>

                              

                        {show && selectedRoom &&

                            <button
                                type="button"
                                disabled={loading}
                                onClick={handleSubmit}
                                className="col-span-2 flex items-center justify-center gap-2 text-xl font-serif rounded-4xl bg-[#2C1F33] text-white px-8 py-7 font-semibold transition hover:bg-[#3b2943] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
                                {loading ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Confirm Reservation"
                                )}
                            </button>
                        }
                </div>
            </motion.form>

            {/* SUMMARY */}
            {show && selectedRoom ? (
                <motion.div variants={fadeRight} className="bg-[#A8A29A] px-3 py-8 rounded-3xl mb-8">

                    <img
                        src={selectedRoom.image}
                        alt={selectedRoom.name}
                        className="w-full object-cover h-[250px] rounded-3xl"
                    />

                    {/* ROOM INFORMATION */}
                    <div className="space-y-3">
                        <h1 className="mt-3 text-[#F4F0E8] text-3xl font-bold font-serif">
                            {selectedRoom.name}
                        </h1>

                        <div className="flex flex-wrap gap-5 text-[#F4F0E8] text-sm">
                            <span>
                                Size: {selectedRoom.size}
                            </span>

                            <span>
                                Bed: {selectedRoom.bed}
                            </span>

                            <span>
                                Max: {selectedRoom.guests}
                            </span>
                        </div>
                    </div>

                    {/* BOOKING DETAILS */}
                    <div className="text-black space-y-5 py-6">

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Name</p>
                            <span>{booking.name}</span>
                        </div>
                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Email</p>
                            <span>{booking.email}</span>
                        </div>
                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Phone no</p>
                            <span>{booking.phone}</span>
                        </div>

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Check-in Date</p>
                            <span>{booking.checkIn}</span>
                        </div>

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Check-out Date</p>
                            <span>{booking.checkOut}</span>
                        </div>

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Number of Guests</p>
                            <span>{booking.guests}</span>
                        </div>

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Suite</p>
                            <span>{selectedRoom.name}</span>
                        </div>

                        <div className="flex justify-between items-center gap-5 border-b border-black/20 pb-2">
                            <p>Number of Nights</p>
                            <span>{nights}</span>
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between items-start gap-5">
                            <h1 className="font-semibold">
                                Total (Est.)
                            </h1>

                            <div className="flex flex-col italic text-right">
                                <span>
                                    ${total.toLocaleString()}
                                </span>

                                <span className="text-sm">
                                    ₦{exchange.toLocaleString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-center text-sm">
                            Taxes and fees included
                        </p>

                        <Link
                            className="border border-black px-8 py-3 rounded-3xl inline-block hover:bg-black hover:text-white transition"
                            to={`/room/${selectedRoom.slug}`}>
                            View Room Details
                        </Link>
                    </div>
                </motion.div>
            ) : (
                <div className="min-h-[550px] flex items-center justify-center text-center">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                            Your Suite
                        </p>

                        <h2 className="text-3xl font-serif font-bold mt-3">
                            Select a suite
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Your selected suite image will appear here.
                        </p>
                    </div>
                </div>
            )}
        </div>
                {
        error && (
            <div className="w-full mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-5 py-5 md:col-span-2 mx:8 md:mx-10">
                <p className="text-red-400 text-sm text-center">
                    {error}
                </p>
            </div>
        )
    }

    {
        success && (
            <div className="mt-4 rounded-lg border border-green-500/40 bg-green-500/10 px-5 py-5 md:col-span-2 mx-8 md:mx-12">
                <p className="text-green-400 text-sm text-center">
                    {success}
                </p>
            </div>
        )
    }
            </motion.main >


        <WhyUs />
        </section >
    )
}
