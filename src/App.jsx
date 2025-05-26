import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative bg-[url('/bg-st.jfif')] bg-cover bg-center h-[100vh] flex items-center justify-center">
        <div className="absolute w-full h-[100vh] top-0 left-0 bg-[#000000b7] z-20 flex justify-center items-center">
          <div className="relative z-10 text-center text-white px-4">
            <h1 className=" text-[7rem] font-bold tangerine-bold">
              Selamat Datang
            </h1>
            <h1 className=" text-[2rem] font-bold -mt-10 text-green-500">
              TK RA Nurjannah
            </h1>
            <div className="w-max mt-3 flex items-center gap-3 m-auto">
              <Link to={"/login"}>
                <button className="px-6 py-2 rounded-lg bg-white text-black hover:bg-slate-200 cursor-pointer">
                  Login
                </button>
              </Link>

              <Link to={"/register"}>
                <button className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
