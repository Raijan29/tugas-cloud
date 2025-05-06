import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { getUserLogin } from "../utils/utils";

import { IoLogOutOutline } from "react-icons/io5";

export default function Headers() {
  const user = getUserLogin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const ListLink = ({ link, title }) => {
    return (
      <Link
        to={link}
        className={`text-gray-700  ${
          pathname == link
            ? "px-3 py-2 rounded-md bg-purple-600 text-white"
            : "test"
        }`}
      >
        {title}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="w-max h-max  flex items-center gap-3">
            <a href="/" className="flex items-center">
              <img
                src="/logolkbt1.png"
                alt="Logo Bunga Tanjung"
                className="h-12"
              />
            </a>
            <p className="">LEMBAGA KESENIAN BUNGA TANJUNG</p>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <ListLink link="/" title="Home" />
            <ListLink link="/layanan" title="Layanan" />
            <ListLink link="/booking" title="Booking" />
            <ListLink link="/tentang" title="Tentang" />
            <ListLink link="/kontak" title="Kontak" />

            {isMenuOpen && (
              <button className="absolute p-3 rounded-md z-20 top-[60px] right-[50px] bg-gray-700 flex justify-center items-center gap-1 hover:bg-gray-600 duration-200">
                <IoLogOutOutline color="white" size={23} />
                <p className="text-[.9rem] text-red-500">Logout</p>
              </button>
            )}

            {user ? (
              <button
                className="flex items-center gap-1"
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
              >
                <div className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-gray-200">
                  <p>
                    {user.nama
                      .split(" ")
                      .map((word) => word[0].toUpperCase())
                      .slice(0, 2)
                      .join("")}
                  </p>
                </div>
                <p className="text-gray-700 hover:text-primary capitalize font-bold">
                  {user.nama}
                </p>
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-gray-700 hover:text-primary capitalize font-bold"
              >
                {user ? user.nama : "Login/Daftar"}
              </Link>
            )}
          </div>
          <button className="lg:hidden text-gray-700 ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
