import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PendaftaranSiswa = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    nik: "",
    jenisKelamin: "",
    tanggalLahir: "",
    alamat: "",
    noTelepon: "",
    email: "",
    namaOrtu: "",
    pekerjaanOrtu: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", formData);
    // Di sini Anda bisa menambahkan logika untuk mengirim data ke backend
    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <div className="min-h-screen bg-[#e0dede] py-12 px-4 sm:px-6 lg:px-8">
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
              <Link to={"/dashboard"} className="text-gray-700 test">
                Data Siswa
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
      </header>
      <div className="max-w-md mx-auto mt-10 bg-[#5cb071] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8 flex flex-col items-center">
            <img
              src="/logo123.png"
              alt="logo tk"
              className="h-16 bg-white rounded-md "
            />
            <h2 className="text-2xl font-bold text-gray-800">
              FORMULIR PENDAFTARAN SISWA BARU
            </h2>
            <p className="mt-2 text-sm text-white">
              Isi data dengan lengkap dan benar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 ">
            {/* Data Pribadi */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                DATA PRIBADI
              </h3>

              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="namaLengkap"
                    className="block text-sm font-medium text-white"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    id="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="namaLengkap"
                    className="block text-sm font-medium text-white"
                  >
                    NIK
                  </label>
                  <input
                    type="text"
                    name="nik"
                    id="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="jenisKelamin"
                    className="block text-sm font-medium text-white"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="jenisKelamin"
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tanggalLahir"
                    className="block text-sm font-medium text-white"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    id="tanggalLahir"
                    value={formData.tanggalLahir}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="alamat"
                    className="block text-sm font-medium text-white"
                  >
                    Alamat Lengkap
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    rows={3}
                    value={formData.alamat}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="noTelepon"
                    className="block text-sm font-medium text-white"
                  >
                    No. Telepon/HP
                  </label>
                  <input
                    type="tel"
                    name="noTelepon"
                    id="noTelepon"
                    value={formData.noTelepon}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Data Orang Tua */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                DATA ORANG TUA
              </h3>

              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="namaOrtu"
                    className="block text-sm font-medium text-white"
                  >
                    Nama Orang Tua/Wali
                  </label>
                  <input
                    type="text"
                    name="namaOrtu"
                    id="namaOrtu"
                    value={formData.namaOrtu}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="pekerjaanOrtu"
                    className="block text-sm font-medium text-white"
                  >
                    Pekerjaan Orang Tua/Wali
                  </label>
                  <input
                    type="text"
                    name="pekerjaanOrtu"
                    id="pekerjaanOrtu"
                    value={formData.pekerjaanOrtu}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[#ffde59] hover:bg-[#b89f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranSiswa;
