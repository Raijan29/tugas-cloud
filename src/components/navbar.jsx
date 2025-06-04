import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-max px-12 py-1 bg-[#5cb071] z-20">
      <div className="flex justify-between items-center  text-white mt-6">
        <div className="w-max flex items-center gap-5">
          <img
            src="/logo123.png"
            alt="logo"
            className="w-[100px] h-[100px] rounded-lg bg-white"
          />
          <div className="">
            <p className="text-white">SIM Akademik</p>
            <h1 className="text-2xl font-bold">TK RA NURjANNAH</h1>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <FaBell size={20} />
          <img
            src="/eladmin.jpeg"
            alt="profile"
            className="w-[40px] h-[40px] rounded-2xl bg-cover"
          />
        </div>
      </div>
      <div className="w-full h-max flex items-center gap-8 mt-5 ">
        <Link
          to="/dashboard"
          className="w-max px-4  py-2   font-bold text-white text-[.9rem] hover:text-[#ffde59] hover:border-b-2 focus:border-b-2 focus:text-[#ffde59] cursor-pointer"
        >
          Beranda
        </Link>
        <Link
          to="/dashboard"
          className="w-max px-4  py-2   font-bold text-white text-[.9rem] hover:text-[#ffde59] hover:border-b-2 focus:border-b-2 focus:text-[#ffde59] cursor-pointer"
        >
          Data Siswa
        </Link>
        <Link
          to="/daftarsiswa"
          className="w-max px-4  py-2   font-bold text-white text-[.9rem] hover:text-[#ffde59] hover:border-b-2  focus:border-b-2 focus:text-[#ffde59] cursor-pointer "
        >
          Form Pendaftaran
        </Link>
      </div>
    </nav>
  );
}
