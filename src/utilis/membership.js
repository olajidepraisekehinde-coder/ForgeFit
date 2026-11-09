const membershipPlans = [
  {
    id: 1,
    title: "Elite Performance",
    price: 50000,
    duration: "/month",
    featured: false,
    features: [
      { text: "Unlimited Gym Access", included: true },
      { text: "Locker Room & Showers", included: true },
      { text: "Group Fitness Classes", included: false },
      { text: "Personal Training Sessions", included: false },
    ],
  },

  {
    id: 2,
    title: "Forge Elite",
    price: 30000,
    duration: "/month",
    featured: true,
    features: [
      { text: "Unlimited Gym Access", included: true },
      { text: "All Group Classes", included: true },
      { text: "2 PT Sessions / Month", included: true },
      { text: "Sauna & Steam Room", included: true },
    ],
  },

  {
    id: 3,
    title: "Titan Prestige",
    price: 40000,
    duration: "/month",
    featured: false,
    features: [
      { text: "Unlimited Gym Access", included: true },
      { text: "Weekly PT Sessions", included: true },
      { text: "Full Spa & Massage Access", included: true },
      { text: "Nutrition Concierge", included: true },
    ],
  },
];

export default membershipPlans;