import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { getUserLogin } from "../utils/utils";


export default function Headers() {
  const [isHovered, setIsHovered] = useState(false);

  const user = getUserLogin()

  console.log({user});
  

  const navStyle = {
    backgroundColor: isHovered ? '#e17c20' : '#928e8b', // #hex warna
    color: '#ffffff',
  };
    return(
        <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="w-max h-max  flex items-center gap-3">
            <a href="/" className="flex items-center">
              <img src="/logolkbt1.png" alt="Logo Bunga Tanjung" className="h-12" />
            </a>
            <p className=''>LEMBAGA KESENIAN BUNGA TANJUNG</p>

            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to={'/'} className="text-gray-700 hover:text-primary">Home</Link>
              <Link to={'/layanan'}
              className="py-2 px-4 rounded transition duration-300"
              style={navStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>Layanan</Link>
              <Link to={'/booking'} className="text-gray-700 test" >Booking</Link>
              <Link to={'/tentang'} className="text-gray-700 hover:text-primary">About</Link>
              <a href="/kontak"  className="text-gray-700 hover:text-primary">Kontak</a>
              <Link to={'/login'} className="text-gray-700 hover:text-primary capitalize font-bold">{user ? user.nama : 'Login/Daftar'}</Link>
             
            </div>
            <button className="lg:hidden text-gray-700 ">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    )
}