import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleRegister } from "../db/auth/register";
import { FaSpinner } from "react-icons/fa";
import Footer from "../components/footer";

const RegisterSection = () => {
  const [value, setValue] = useState({
    username: "admin123",
    email: "raizan@gmail.com",
    password: "123456",
  });

  const resetValue = () => {
    setValue({
      username: "",
      email: "",
      password: "",
    });
  };

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

    const { status, message } = await handleRegister(value);
    console.log(status, message);

    if (value.length == 0) {
      return { status: false, message: "tidak boleh kosong" };
    }

    if (status) {
      navigate("/login");
    } else {
      setIsError(message);
      resetValue();
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-[url('/bg-st.jfif')] bg-cover bg-center h-[100vh] flex items-center justify-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#000000b7] z-20 flex justify-center items-center">
          <form
            className="w-[30%] text-white h-max rounded-xl shadow-md p-6 mx-auto mt-10 bg-[#00000060] backdrop-blur-[5px]"
            onSubmit={handleForm}
          >
            <img
              src="/logo123.png"
              alt="logo tk"
              className="w-16 object-contain mx-auto"
            />
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <p className="text-center text-red-500 mb-6 mt-1 text-[.8rem]">
              {isError}
            </p>

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium  mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={value.username}
                onChange={(e) => handleChange(e)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan username"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={value.email}
                onChange={(e) => handleChange(e)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium  mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={value.password}
                onChange={(e) => handleChange(e)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Masukkan password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isLoading ? (
                <FaSpinner className="text-white animate-spin" />
              ) : (
                "Register"
              )}
            </button>

            <p className="text-center mt-3 text-[.9rem]">
              Sudah punya akun?{" "}
              <Link to={"/login"} className="text-blue-500 font-bold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RegisterSection;
