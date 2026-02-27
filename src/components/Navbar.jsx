import {useState} from 'react'
import {Routes, Link} from 'react-router-dom'

function Navbar() {

    return (
        <nav className="flex items-center justify-between px-8 py-5 bg-black text-white">
            {/* Logo on the left */}
            <div className="flex items-center">
                <a 
                    href="/" 
                    className="text-2xl font-bold text-black px-5 py-2 bg-yellow-400 rounded-2xl hover:bg-yellow-300 transition-colors"
                >
                    CineMatch
                </a>
            </div>

            {/* Navigation links on the right */}
            <div className="flex items-center gap-x-10 text-lg">
                <Link 
                    to="/" 
                    className="hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                    Movies
                </Link>
                <Link 
                    to="/watchlist" 
                    className="hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                    Watchlist
                </Link>
                <Link 
                    to="/mood" 
                    className="hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                    Mood Selector
                </Link>


            </div>
        </nav>
    );
}

export default Navbar;