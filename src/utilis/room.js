import room1 from "../assets/Bedroom/room1.jpg";
import room2 from "../assets/Bedroom/room2.jpg";
import room3 from "../assets/Bedroom/room3.jpg";
import room4 from "../assets/Bedroom/room4.jpg";
import room5 from "../assets/Bedroom/room5.jpg";
import room6 from "../assets/Bedroom/room6.jpg";

const rooms = [
    {
        id: 1,
        name: "Grand Deluxe Room",
        slug: "Grand Deluxe",
        category: "Grand Deluxe",
        image: room1,

        description:
            "A refined sanctuary overlooking the city, designed for quiet mornings and restful evenings.",

        size: "55 m²",
        guests: "2 Guests",
        bed: "King Bed",
        view: "City View",

        price: 3500,
        currency: "USD",

        amenities: [
            "24-hour concierge",
            "In-suite dining",
            "Smart room controls",
            "Premium bath amenities",
            "Daily housekeeping",
        ],
    },

    {
        id: 2,
        name: "Executive Suite",
        slug: "Executive Suite",
        category: "Executive",
        image: room2,

        description:
            "An expansive suite combining a private lounge, sophisticated interiors and everything needed for an effortless stay.",

        size: "85 m²",
        guests: "3 Guests",
        bed: "King Bed",
        view: "Panoramic City View",

        price: 6500,
        currency: "USD",

        amenities: [
            "Private lounge",
            "24-hour concierge",
            "In-suite dining",
            "Premium bath amenities",
            "Daily housekeeping",
        ],
    },

    {
        id: 3,
        name: "Prestige Suite",
        slug: "Prestige Suite",
        category: "Prestige",
        image: room3,

        description:
            "A spacious private retreat featuring a separate living area, panoramic views and elevated in-suite service.",

        size: "120 m²",
        guests: "4 Guests",
        bed: "King Bed",
        view: "Panoramic View",

        price: 10000,
        currency: "USD",

        amenities: [
            "Separate living room",
            "Private balcony",
            "Butler service",
            "In-suite dining",
            "Luxury bathroom",
        ],
    },

    {
        id: 4,
        name: "Royal Residence",
        slug: "Royal Residence",
        category: "Royal",
        image: room4,

        description:
            "A private residence created for guests who value space, discretion and exceptional comfort.",

        size: "180 m²",
        guests: "4 Guests",
        bed: "2 King Beds",
        view: "Garden & City View",

        price: 18000,
        currency: "USD",

        amenities: [
            "Two bedrooms",
            "Private lounge",
            "Dedicated butler",
            "Private dining",
            "Airport transfer",
        ],
    },

    {
        id: 5,
        name: "Presidential Suite",
        slug: "Presidential Suite",
        category: "Presidential",
        image: room5,

        description:
            "An extraordinary residence with multiple living spaces, private dining and dedicated hospitality.",

        size: "280 m²",
        guests: "6 Guests",
        bed: "2 King Beds",
        view: "Panoramic View",

        price: 30000,
        currency: "USD",

        amenities: [
            "Two bedrooms",
            "Private dining room",
            "Executive lounge",
            "Dedicated butler",
            "Private terrace",
            "Airport transfer",
        ],
    },

    {
        id: 6,
        name: "Nestora Grand Residence",
        slug: "Nestora Grand Residence",
        category: "Grand Residence",
        image: room6,

        description:
            "Nestora's most exclusive private residence, created as an entire world within the hotel.",

        size: "450 m²",
        guests: "8 Guests",
        bed: "3 King Beds",
        view: "Private Panoramic View",

        price: 50000,
        currency: "USD",

        amenities: [
            "Three bedrooms",
            "Private pool",
            "Private dining room",
            "Personal butler",
            "Private lounge",
            "Airport transfer",
            "Dedicated concierge",
        ],
    },
];

export default rooms;