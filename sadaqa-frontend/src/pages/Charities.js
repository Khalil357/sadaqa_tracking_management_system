import React, { useState, useEffect } from "react";
import "../styles/Charities.css";
import charityImg from "../assets/Charity1.jpg"; // Placeholder image

const dummyCharities = [
  {
    id: 1,
    name: "Hope for All Foundation",
    mission: "Improving lives through education, food, and healthcare.",
    raised: 7000,
    goal: 10000,
    campaigns: ["Monthly Food Drive – April 2025", "Back-to-School Kit Distribution"],
    verified: true,
  },
  {
    id: 2,
    name: "Green Future Trust",
    mission: "Supporting sustainability and environmental awareness.",
    raised: 3500,
    goal: 8000,
    campaigns: ["Tree Planting Marathon", "Eco Club for Kids"],
    verified: false,
  },
];

const Charities = () => {
  const [charities, setCharities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Replace with API call in real scenario
    setCharities(dummyCharities);
  }, []);

  const filteredCharities = charities.filter((charity) =>
    charity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Support Verified Charities</h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search charities..."
          className="px-4 py-2 border rounded w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharities.map((charity) => (
          <div key={charity.id} className="bg-white shadow rounded p-4">
            <img
              src={charityImg}
              alt={charity.name}
              className="charity-img"
            />
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{charity.name}</h2>
                {charity.verified && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 mt-1">{charity.mission}</p>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${(charity.raised / charity.goal) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1">
                  Raised ${charity.raised} of ${charity.goal}
                </p>
              </div>
              <ul className="mt-2 text-sm text-gray-800 list-disc list-inside">
                {charity.campaigns.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Donate Now
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Volunteer
                </button>
                <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300">
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charities;
