export default function Headers() {
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[98%] mx-auto my-10 py-1 text-center bg-[#E6A4B4] text-black rounded-lg">
    <marquee>
      <h1 className="text-xl">SELAMAT DATANG DI TK AL-BAROKAH</h1>
    </marquee>
  </div>;

  {
    /* Navigation Buttons */
  }
  <div className="absolute top-0 right-0 mt-0">
    <div className="text-right">
      <ul className="flex space-x-2 mr-4 mt-2">
        <li>
          <a
            href="index_login.php"
            className="inline-block px-4 py-2 text-xs rounded-full bg-white text-[#ef6771] shadow-md hover:bg-gray-100 transition"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="tabelsiswa.php"
            className="inline-block px-4 py-2 text-xs rounded-full bg-white text-[#ef6771] shadow-md hover:bg-gray-100 transition"
          >
            Daftar Nama Siswa
          </a>
        </li>
      </ul>
    </div>
  </div>;
}
