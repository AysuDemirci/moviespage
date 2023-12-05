import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <header className="bg-black py-5 lg:py-7 text-machine-grey">
        {/* header content */}
        <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
          {/* logo */}
          <a
            href="/"
            className="uppercase pl-4 md:pl-0 text-xl lg:text-2xl font-extrabold font-gemunu "
          >
            Movie
            <span className="uppercase pl-0 md:pl-0 text-xl lg:text-2xl  font-gemunu font-bold text-transparent bg-gradient-to-br bg-clip-text from-red-500 to-purple-700 tracking-wide">
              Machine
            </span>
          </a>
        {/* mobil navbar */}
        <div className="block md:hidden pr-4">
        <div className="space-y-1 cursor-pointer">
          <div className="bg-machine-grey w-8 h-1 rounded-full"></div>
          <div className="bg-machine-grey w-8 h-1 rounded-full"></div>
          <div className="bg-machine-grey w-8 h-1 rounded-full"></div>
        </div>
      </div>

      {/* Menü içerikleri */}
      <nav className="hidden md:flex justify-between flex-1 uppercase">
        <div className="flex items-center lg:text-md space-x-4 lg:space-x-8">
           <a href="/" className="hover:text-machine-red transition duration-200">Movies</a>
        <a href="/" className="hover:text-machine-red transition duration-200">Series</a>
        <a href="/" className="hover:text-machine-red transition duration-200 uppercase">Categories
        </a>
        </div>
        
    {/* Login ve Search Alanı */}
    <div className="flex items-center space-x-4 lg:space-x-8">
        <form>
            <div className="group border-r px-4 mx-4 py-1 border-machine-red">
                <input type="text" className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-t border-machine-red focus:outline-none w-24 lg:w-44 transition duration-200"/>
                <button className="-ml-4 group-hover:ml-0 transition duration-200"><FaSearch className="group-hover:text-machine-red transition duration-200"/></button>
            </div>
        </form>
        <div className="flex items-center space-x-4 lg:space-x-8 lg:text-md">
            <a href="/">Login</a>
            <a href="/"
              className="bg-machine-red px-3 py-1 hover:bg-rose-600 hover:text-machine-grey cursor-pointer transition duration-500 whitespace-nowrap">Sign
              Up</a>
          </div>
    </div>
        
      </nav>
        </div>
      </header>
    </div>
  );
}
