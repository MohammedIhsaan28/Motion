'use client';
import { useState } from "react";
import Image from 'next/image'; 
import logo from "../app/assets/logo.png"; // Make sure this path is correct
import Link from "next/link";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="flex justify-between items-center text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 rounded-xl border border-neutral-800">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="logo" width={120} height={24} priority />
        </Link>

        {/* Center Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-6">
          <Link href="#works" className="hover:text-neutral-200">How it works</Link>
          <Link href="#pricing" className="hover:text-neutral-200">Pricing</Link>
          <Link href="#testimonials" className="hover:text-neutral-200">Testimonials</Link>
        </div>

        {/* Right Buttons (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="hover:text-neutral-200">Login</Link>

          <Link href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">Get a demo</Link>
          <Link href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">Start Free trial</Link>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="hover:text-neutral-200" >Product</Link>
            <Link href="#" className="hover:text-neutral-200" >Pricing</Link>
            <Link href="#" className="hover:text-neutral-200" >Resources</Link>
            <Link href="#" className="hover:text-neutral-200" >Login</Link>
            <Link href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition" >Get a demo</Link>
            <Link href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition" >Start Free trial</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
