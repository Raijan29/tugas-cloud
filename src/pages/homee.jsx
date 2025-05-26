import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../db/auth/login";
import { FaSpinner } from "react-icons/fa";
const LoginSection = () => {
  const [value, setValue] = useState({
    email: "raizan@gmail.com",
    password: "123456",
  });

  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log({ value });
    setIsError("");
    setIsLoading(true);

    const { status, message } = await handleLogin(value);
    console.log(status, message);

    if (status) {
      navigate("/dashboard");
    } else {
      setIsError(message);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[98%] mx-auto my-10 py-1 text-center bg-[#E6A4B4] text-black rounded-lg">
        <marquee>
          <h1 className="text-xl">SELAMAT DATANG DI TK AL-BAROKAH</h1>
        </marquee>
      </div>
      ;{/* Navigation Buttons */}
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
      </div>
      ;
      <section className="relative bg-[url('/bg-st.jfif')] bg-cover bg-center h-[100vh] flex items-center justify-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#000000b7] z-20 flex justify-center items-center">
          <form
            className="w-[50%] text-white h-auto  rounded-xl shadow-md p-6 mx-auto mt-10 bg-[#00000060] backdrop-blur-[5px]"
            onSubmit={handleForm}
          >
            <img
              src="/logo123.png"
              alt="logo tk"
              className="w-16 object-contain mx-auto"
            />
            <h2 className="text-2xl font-bold  text-center">
              Form Pendaftaran
            </h2>
            <p className="text-center text-red-500 mb-6 mt-1 text-[.8rem]">
              {isError}
            </p>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-1"
              >
                Nama Siswa
              </label>
              <input
                type="text"
                id="nama_siswa"
                name="nama_siswa"
                value={""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium  mb-1"
              >
                NIK
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                value={""}
                onChange={handleChange}
                maxLength="16"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan NIK"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium  mb-1"
              >
                Umur
              </label>
              <input
                type="number"
                id="umur"
                name="umur"
                value={""}
                onChange={handleChange}
                min="2"
                max="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan NIK"
              />
            </div>

            <label className="block mb-1">Jenis kelamin:</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Laki-laki"
                  checked={value.email === "Perempuan"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Laki-laki
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Perempuan"
                  checked={""}
                  onChange={handleChange}
                  className="mr-2"
                />
                Perempuan
              </label>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium  mb-1"
              >
                Umur
              </label>
              <input
                type="date"
                id="tanggal_lahir"
                name="tanggal_lahir"
                value={""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan NIK"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <FaSpinner className="text-white animate-spin" />
              ) : (
                "Login"
              )}
            </button>

            <p className="text-center mt-3 text-[.9rem]">
              Belum punya akun?{" "}
              <Link to={"/register"} className="text-blue-500 font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginSection;
