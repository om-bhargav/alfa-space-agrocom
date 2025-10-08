import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo */}
          <Link href="/">
            <img src="/favicon.png" className="w-20"/>
          </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-lg md:flex space-x-6">
          <li>
            <Link href="/" className="hover:bg-[#7c2528] px-3 py-1 hover:text-white hover:rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:bg-[#7c2528] px-3 py-1 hover:text-white hover:rounded">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-[#7c2528] px-3 py-1 hover:text-white hover:rounded">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-[#7c2528] px-3 py-1 hover:text-white hover:rounded">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden shadow-md space-y-4 px-4 py-4">
          <li>
            <Link href="/" className="block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="block">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="block">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;