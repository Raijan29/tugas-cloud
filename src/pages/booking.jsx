import React, { useState } from 'react';
import Footer from '../components/footer';
import Appshell from '../components/appshell';
import { getUserLogin } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { Alert, useHandleAlert } from 'sstra-alert';

const BookingSection = () => {
    
  const [serviceType, setServiceType] = useState('');
  const [formData, setFormData] = useState({
    bookingDate: '',
    bookingTime: '',
    notes: '',
    fullName: '',
    phone: '',
    email: '',
    paymentMethod: 'transfer',
    terms: false
  });
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [isLoggedIn] = useState(false); // This would come from auth context in real app

  const user = getUserLogin()
  const navigate = useNavigate()

    const { status, data, handleAlert } = useHandleAlert();
  

  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
  };



  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({user});
    
    if(!user) {
      handleAlert('info', 'Login terlebih dahulu')
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
    // alert('Booking Anda telah berhasil dikirim. Kami akan menghubungi Anda untuk konfirmasi lebih lanjut.');
  };

  
  const renderDynamicFields = () => {
    switch (serviceType) {
      case 'tari':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="danceType" className="block font-bold mb-2">Jenis Tari</label>
              <select className="w-full p-2 border rounded" id="danceType" required>
                <option value="" disabled>-- Pilih Jenis Tari --</option>
                <option value="saman">Tari Saman</option>
                <option value="kecak">Tari Kecak</option>
                <option value="jaipong">Tari Jaipong</option>
                <option value="pendet">Tari Pendet</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="duration" className="block font-bold mb-2">Durasi Pertunjukan (menit)</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="duration" 
                min="30" 
                max="180" 
                defaultValue="60" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dancerCount" className="block font-bold mb-2">Jumlah Penari</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="dancerCount" 
                min="1" 
                max="20" 
                defaultValue="5" 
                required 
              />
            </div>
          </>
        );
      case 'pelatih':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="trainerType" className="block font-bold mb-2">Jenis Pelatihan</label>
              <select className="w-full p-2 border rounded" id="trainerType" required>
                <option value="" disabled>-- Pilih Jenis Pelatihan --</option>
                <option value="individu">Pelatihan Individu</option>
                <option value="kelompok">Pelatihan Kelompok</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="participantCount" className="block font-bold mb-2">Jumlah Peserta</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="participantCount" 
                min="1" 
                max="30" 
                defaultValue="1" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="sessionCount" className="block font-bold mb-2">Jumlah Sesi</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="sessionCount" 
                min="1" 
                max="12" 
                defaultValue="4" 
                required 
              />
            </div>
          </>
        );
      case 'kostum':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="costumeType" className="block font-bold mb-2">Jenis Kostum</label>
              <select className="w-full p-2 border rounded" id="costumeType" required>
                <option value="" disabled>-- Pilih Jenis Kostum --</option>
                <option value="bali">Kostum Tari Bali</option>
                <option value="jawa">Kostum Tari Jawa</option>
                <option value="sumatera">Kostum Tari Sumatera</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="costumeCount" className="block font-bold mb-2">Jumlah Kostum</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="costumeCount" 
                min="1" 
                max="50" 
                defaultValue="1" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="rentalDays" className="block font-bold mb-2">Lama Sewa (hari)</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="rentalDays" 
                min="1" 
                max="7" 
                defaultValue="1" 
                required 
              />
            </div>
          </>
        );
      case 'makeup':
        return (
          <>
            <div className="mb-4">
              <label htmlFor="makeupStyle" className="block font-bold mb-2">Gaya Makeup</label>
              <select className="w-full p-2 border rounded" id="makeupStyle" required>
                <option value="" disabled>-- Pilih Gaya Makeup --</option>
                <option value="tradisional">Tradisional</option>
                <option value="modern">Modern</option>
                <option value="khusus">Khusus (Tentukan di Catatan)</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="personCount" className="block font-bold mb-2">Jumlah Orang</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                id="personCount" 
                min="1" 
                max="20" 
                defaultValue="1" 
                required 
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
     <Appshell>

      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-800"}
      />

    <div>
        
    <main className="py-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            <img src="/logolkbt1.png" alt="logo lkbt"  className="text-center h-20 mb-3 mx-auto" />
            <h1 className="text-center font-bold text-2xl mb-5">Formulir Booking</h1>
            
            <div className="bg-gray-500 rounded-lg shadow-md overflow-hidden">
              <div className="p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="serviceType" className="block font-bold mb-2">Pilih Layanan</label>
                    <select 
                      className="w-full p-2 border rounded"
                      id="serviceType"
                      value={serviceType}
                      onChange={handleServiceChange}
                      required
                    >
                      <option value="" disabled>-- Pilih Layanan --</option>
                      <option value="tari">Tari Tradisional</option>
                      <option value="pelatih">Jasa Pelatih Tari</option>
                      <option value="kostum">Sewa Kostum</option>
                      <option value="makeup">Jasa Makeup</option>
                    </select>
                  </div>
                  
                  <div id="dynamicFields">
                    {renderDynamicFields()}
                  </div>
                  
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      <label htmlFor="bookingDate" className="block font-bold mb-2">Tanggal Booking</label>
                      <input 
                        type="date" 
                        className="w-full p-2 border rounded"
                        id="bookingDate"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="bookingTime" className="block font-bold mb-2">Waktu Booking</label>
                      <input 
                        type="time" 
                        className="w-full p-2 border rounded"
                        id="bookingTime"
                        name="bookingTime"
                        value={formData.bookingTime}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="notes" className="block font-bold mb-2">Catatan Tambahan</label>
                    <textarea 
                      className="w-full p-2 border rounded"
                      id="notes"
                      rows="3"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <h5 className="font-bold mb-3">Data Diri</h5>
                  <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      <label htmlFor="fullName" className="block mb-2">Nama Lengkap</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <label htmlFor="phone" className="block mb-2">Nomor Telepon</label>
                      <input 
                        type="tel" 
                        className="w-full p-2 border rounded"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border rounded"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block font-bold mb-2">Metode Pembayaran</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="transfer" 
                          name="paymentMethod" 
                          value="transfer" 
                          checked={formData.paymentMethod === 'transfer'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <label htmlFor="transfer">Transfer Bank</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="creditCard" 
                          name="paymentMethod" 
                          value="creditCard" 
                          checked={formData.paymentMethod === 'creditCard'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <label htmlFor="creditCard">Kartu Kredit</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="cash" 
                          name="paymentMethod" 
                          value="cash" 
                          checked={formData.paymentMethod === 'cash'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <label htmlFor="cash">Tunai (di tempat)</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="mr-2"
                        required 
                      />
                      <label htmlFor="terms">
                        Saya menyetujui{' '}
                        <button 
                          type="button" 
                          onClick={() => setShowTermsModal(true)}
                          className="text-blue-600 hover:underline"
                        >
                          syarat dan ketentuan
                        </button>{' '}
                        yang berlaku
                      </label>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      type="submit" 
          
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg"
                    >
                      Kirim Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {isLoggedIn && (
              <div className="mt-5">
                <h2 className="font-bold text-xl mb-4">Daftar Booking Saya</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left">No. Booking</th>
                        <th className="py-3 px-4 text-left">Layanan</th>
                        <th className="py-3 px-4 text-left">Tanggal</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">BK-20230001</td>
                        <td className="py-3 px-4">Tari Tradisional</td>
                        <td className="py-3 px-4">15 Juli 2023, 14:00</td>
                        <td className="py-3 px-4">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                            Dikonfirmasi
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 px-2 py-1 rounded text-sm">
                            Detail
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">BK-20230002</td>
                        <td className="py-3 px-4">Pelatih Tari</td>
                        <td className="py-3 px-4">20 Juli 2023, 10:00</td>
                        <td className="py-3 px-4">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                            Menunggu Konfirmasi
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 border border-blue-600 hover:border-blue-800 px-2 py-1 rounded text-sm">
                            Detail
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
            <div className="p-5">
              <div className="flex justify-between items-center border-b pb-3 mb-3">
                <h3 className="text-lg font-bold">Syarat dan Ketentuan</h3>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-2">
                <p>1. Pembayaran harus dilakukan dalam waktu 24 jam setelah booking dikonfirmasi.</p>
                <p>2. Pembatalan booking harus dilakukan minimal 48 jam sebelum waktu pelaksanaan.</p>
                <p>3. Biaya pembatalan akan dikenakan sebesar 20% dari total biaya jika dilakukan kurang dari 48 jam.</p>
                <p>4. Keterlambatan lebih dari 30 menit tanpa pemberitahuan akan dianggap sebagai pembatalan.</p>
                <p>5. Kerusakan pada kostum yang disewa akan dikenakan biaya perbaikan atau penggantian.</p>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>

        )}
        return (
            <div>
                <Footer/>
            </div>
        )
        </main>
    </div>
    </Appshell>
  );
};

export default BookingSection;