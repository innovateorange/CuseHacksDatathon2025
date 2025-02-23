import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 py-4 border-b-2 border-[#eae6df] bg-[#eae6df]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-semibold text-[#d37354] tracking-[.25em]">
            CusePULSE 
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link href="/graph1" className="font-bold text-black hover:text-gray-600 tracking-[.15em]">
            GRAPH 1
          </Link>
          <Link href="/graph2" className="font-bold text-black hover:text-gray-600 tracking-[.15em]">
            GRAPH 2
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

