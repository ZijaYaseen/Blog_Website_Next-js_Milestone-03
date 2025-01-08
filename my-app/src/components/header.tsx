"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  {/* Yeh ek function hai jo jab call hota hai toh isOpen ki value ko ulta kar deta hai.
Agar isOpen pehle false hai toh yeh true kar dega, aur agar true hai toh false kar dega. Iska matlab hai ke jab yeh function chalega toh menu khul jayega agar band hai, aur band ho jayega agar khula hai. */}
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-blue-900 text-white z-50 ">
      <div className="flex items-center p-3 md:mx-7 my-0 font-black lg:text-[20px] text-sm">
        <Image src={"/logo.png"} alt="Logo" width={60} height={60} className="w-8 h-8 lg:w-14"/>
        INNOVATIVE CUBE
      </div>

      {/* Hamburger Button for Mobile Devices */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? ( // Conditional rendering of close icon
            <svg // cross button
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg // three line button
              className="w-7 h-7 mr-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 z-10 bg-white text-black flex flex-col md:items-center md:justify-center md:relative md:flex md:bg-transparent md:text-white md:flex-row md:gap-7`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 md:hidden"
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-7 md:flex-row md:gap-12 p-4 mx-10 mt-14 lg:mt-0">
          <Link href="/" onClick={toggleMenu}>
            <li className="cursor-pointer text-lg">Home</li>
          </Link>
          <Link href="/blogs" onClick={toggleMenu}>
            <li className="cursor-pointer text-lg">Blogs</li>
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            <li className="cursor-pointer text-lg">About</li>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <li className="cursor-pointer text-lg">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
