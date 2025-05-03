import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default function Footer () {
    return (
        
         <footer className="bg-gray-900 text-white py-12 mt-12">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <img src="/logo-bunga-tanjung-white.png" alt="Logo Bunga Tanjung" className="h-12 mb-4" />
                      <p className="mb-4">Lembaga Kesenian Bunga Tanjung adalah pusat pelestarian dan pengembangan seni tari tradisional Indonesia.</p>
                      <div className="flex space-x-4">

                        <Link to={'/facebook'} className="text-white hover:text-primary transition"> <FaFacebookF className="text-xl" /></Link>
                        <Link to={'/instagram'} className="text-white hover:text-primary transition"> <FaInstagram className="text-xl" /></Link>
                        <Link to={'/youtube'} className="text-white hover:text-primary transition"> <FaYoutube className="text-xl" /></Link>
                        <Link to={'/whatsapp'} className="text-white hover:text-primary transition"> <FaWhatsapp className="text-xl" /></Link>
                        
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
    )
}