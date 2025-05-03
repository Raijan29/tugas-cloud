import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  // <-- tambahkan ini
import App from './App.jsx'
import './index.css'
import LayananKami from './pages/layanan.jsx'
import Tentangkami from './pages/tentangkami.jsx'
import LoginSection from './pages/login.jsx'
import DaftarSection from './pages/daftar.jsx'
import BookingPage from './pages/booking.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- bungkus App dengan BrowserRouter */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/layanan' element={<LayananKami/>} />
        <Route path='/tentang' element={<Tentangkami/>} />
        <Route path='/login' element={<LoginSection/>} />
        <Route path='/daftar' element={<DaftarSection/>} />
        <Route path='/booking' element={<BookingPage/>} />
        {/* footer */}
        {/* <Route path='/facebook'  />
        <Route path='/booking' element={<BookingPage/>} />
        <Route path='/booking' element={<BookingPage/>} />
        <Route path='/booking' element={<BookingPage/>} />
         */}
       
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
