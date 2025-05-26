export default function Headers() {
  <header className="fixed w-full  top-0 left-0 z-50 bg-[white] shadow-lg">
    <nav className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="w-max h-max  flex items-center gap-3">
          <a href="/" className="flex items-center">
            <img src="/logo123.png" alt="Logo tk" className="h-12" />
          </a>
          <p className=" font-bold text-[20px] text-[#ffde59]">RA </p>
          <p className=" font-bold text-[20px] text-[#5cb071]">NURJANNAH</p>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <Link to={"/"} className="text-gray-700 test">
            Home
          </Link>
          <Link to={"/booking"} className="text-gray-700 test">
            profil
          </Link>
          <Link to={"/tentang"} className="text-gray-700 test">
            About
          </Link>
          <a href="/home" className="text-gray-700 test">
            Data Siswa
          </a>
          <Link
            to={"/login"}
            className="text-blue-600 test  capitalize font-bold"
          ></Link>
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
  </header>;
}
