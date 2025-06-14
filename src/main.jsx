import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // <-- tambahkan ini
import App from "./App.jsx";
import "./index.css";
import LoginSection from "./pages/login.jsx";
import RegisterSection from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import PendaftaranSiswa from "./pages/daftarsiswa.jsx";
import Navbar from "./components/navbar.jsx";
import Tes from "./pages/connecttodrive.jsx";
import GoogleSheetsUploader from "./pages/connecttodrive.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* <-- bungkus App dengan BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/register" element={<RegisterSection />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/daftarsiswa" element={<PendaftaranSiswa />} />
        <Route path="/connecttodrive" element={<GoogleSheetsUploader />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
