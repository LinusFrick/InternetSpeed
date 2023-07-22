'use client';
import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/">
                  <span className="font-semibold text-gray-500 text-lg">Logo</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/speedtest">
                <p className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300">Internet Speed</p>
              </Link>
              <Link href="/">
                <p className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300">Improve Speed</p>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <Link href="/signin">
             Log In
            </Link>
            <Link href="/signup">
             Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-yellow-500 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/speedtest">
           Page 1
          </Link>
          <Link href="/">
            Page 2
          </Link>
        </div>
      )}
    </nav>
    )
}