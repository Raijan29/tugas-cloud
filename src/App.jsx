import React from 'react';
import './App.css'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Headers from './components/headers';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Headers />

      {/* Hero Section */}
      <section className="relative bg-[url('/hero-kontak.jpg')] bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl">Kami siap membantu Anda dengan segala pertanyaan tentang layanan kami</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nama" className="block mb-2 font-medium">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="nama" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="telepon" className="block mb-2 font-medium">Nomor Telepon</label>
                  <input 
                    type="tel" 
                    id="telepon" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                <div>
                  <label htmlFor="pesan" className="block mb-2 font-medium">Pesan Anda</label>
                  <textarea 
                    id="pesan" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" 
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition">Kirim Pesan</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold mb-6">Informasi Kontak</h2>
              
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Alamat</h5>
                    <p>Jl. Kesenian No. 123, Jakarta Pusat, DKI Jakarta 10110</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaPhoneAlt className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Telepon</h5>
                    <p>(021) 1234567<br />0812-3456-7890 (WhatsApp)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Email</h5>
                    <p>info@bungatanjung.com<br />marketing@bungatanjung.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FaClock className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Jam Operasional</h5>
                    <p>Senin - Jumat: 09.00 - 17.00 WIB<br />
                    Sabtu: 09.00 - 15.00 WIB<br />
                    Minggu & Hari Libur: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.82256141529447!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42d9c8b3b3d%3A0x3b3032fbc020a5b0!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/logo-bunga-tanjung-white.png" alt="Logo Bunga Tanjung" className="h-12 mb-4" />
              <p className="mb-4">Lembaga Kesenian Bunga Tanjung adalah pusat pelestarian dan pengembangan seni tari tradisional Indonesia.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary transition">
                  <FaFacebookF className="text-xl" />
                </a>
                <a href="#" className="text-white hover:text-primary transition">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="#" className="text-white hover:text-primary transition">
                  <FaYoutube className="text-xl" />
                </a>
                <a href="#" className="text-white hover:text-primary transition">
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Menu</h5>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary transition">Home</a></li>
                <li><a href="/layanan" className="hover:text-primary transition">Layanan</a></li>
                <li><a href="/booking" className="hover:text-primary transition">Booking</a></li>
                <li><a href="/tentang" className="hover:text-primary transition">Tentang Kami</a></li>
                <li><a href="/kontak" className="hover:text-primary transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Kontak Kami</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mr-2 mt-1" />
                  <span>Jl. Kesenian No. 123, Jakarta</span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="mr-2 mt-1" />
                  <span>(021) 1234567</span>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="mr-2 mt-1" />
                  <span>info@bungatanjung.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Jam Operasional</h5>
              <ul className="space-y-2">
                <li>Senin - Jumat: 09.00 - 17.00</li>
                <li>Sabtu: 09.00 - 15.00</li>
                <li>Minggu & Hari Libur: Tutup</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Lembaga Kesenian Bunga Tanjung. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default App;
