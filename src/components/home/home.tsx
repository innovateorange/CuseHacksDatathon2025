import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#eae6df] p-8">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="text-6xl font-bold mb-4 tracking-[.1em]">
          <span className="underline">Optimizing</span> city<br />
          services through<br />
          <span className="underline">data-driven</span> relocation
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* First Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="uppercase text-sm font-semibold text-gray-600 mb-4 tracking-[.15em]">
              SERVICE MAPPING
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">
              Visualize &nbsp;Service &nbsp;Requests
            </h2>
            <p className="text-gray-600 mb-8">
              Explore the distribution of citizen service requests across Syracuse to identify high-demand areas.
            </p>
            <Link href="/graph1" className="block">
              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                View Map
              </button>
            </Link>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="uppercase text-sm font-semibold text-gray-600 mb-4 tracking-wider">
              DISTANCE &nbsp;ANALYSIS
            </div>
            <h2 className="text-2xl font-bold mb-4 tracking-wide">
              Analyze &nbsp;Department &nbsp;Locations
            </h2>
            <p className="text-gray-600 mb-8">
              Evaluate the efficiency of current department locations relative to service request patterns.
            </p>
            <Link href="/graph2" className="block">
              <button className="w-full border-2 border-black text-black py-3 rounded-full hover:bg-gray-100 transition">
                View Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

