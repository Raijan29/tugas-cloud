import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash  } from 'react-icons/fa';
import Appshell from '../components/appshell';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { handleRegister } from '../db/auth/register';
import { Alert, useHandleAlert } from "sstra-alert";

const DaftarSection = () => {
  const [typePassword, setTypePassword] = useState('password')
  const [confirmpass, setConfirmpass] = useState('password') 
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState({
    nama: '',
    email: '',
    notel: '',
    password:'',
    confirm_password: ''
  })

  const navigate = useNavigate ()
  
  const { status, data, handleAlert } = useHandleAlert();

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    setValue(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const handleForm = async (e) => {

    e.preventDefault();
    setIsLoading(true)

    if (value.password.length < 8) {
      handleAlert('error', "minimal password 8 karakter")
    setIsLoading(false)

      return  
    }

    if (value.password != value.confirm_password) {
      handleAlert('error',"konfirmsdi password harus sama")
    setIsLoading(false)

      return
    } 
    const {status, message} = await handleRegister(value)
    handleAlert(status ? 'success' : 'error' , message)
    setIsLoading(false)

    if (status) {
      navigate ("/login")
    }
  
  }

  return (
    <Appshell>

      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-800"}
      />

    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 md:w-2/3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <img 
                    src="/logolkbt1.png" 
                    alt="Logo" 
                    className="h-20 mb-4 mx-auto"
                  />
                  <h2 className="text-2xl font-bold text-gray-800">Buat Akun Baru</h2>
                  <p className="text-gray-500">Isi formulir berikut untuk mendaftar</p>
                </div>
                
                <form onSubmit={handleForm}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full  px-3 mb-4">
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">
                        Nama Lengkap
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          id="firstName"
                          name='nama'
                          value={value.nama}
                          onChange={(e) => handleChangeInput(e)}
                          className="flex-1  block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Nama depan"
                          required
                        />
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                        <FaEnvelope />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name='email'
                        value={value.email}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Masukkan email Anda"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                      Nomor Telepon
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                        <FaPhone />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name='notel'
                        value={value.notel}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Masukkan nomor telepon"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                        <FaLock />
                      </span>
                      <input
                        type={typePassword}
                        id="password"
                        name='password'
                        value={value.password}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-1 min-w-0 block w-full px-3 py-2 border-t border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Buat password (min. 8 karakter)"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setTypePassword(typePassword == 'password' ? 'text' : 'password')}
                        className="inline-flex items-center px-3 border border-l-0 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                      >
                        {typePassword == 'password' ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Gunakan kombinasi huruf, angka, dan simbol</p>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                      Konfirmasi Password
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500">
                        <FaLock />
                      </span>
                      <input
                        type={confirmpass}
                        name='confirm_password'
                        value={value.confirm_password}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-1 min-w-0 block w-full px-3 py-2 border-t border-b border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Buat password (min. 8 karakter)"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setConfirmpass(confirmpass == 'password' ? 'text' : 'password')}
                        className="inline-flex items-center px-3 border border-l-0 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                      >
                        {confirmpass == 'password' ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      Saya setuju dengan{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        Syarat & Ketentuan
                      </a>{' '}
                      dan{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        Kebijakan Privasi
                      </a>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    Daftar Sekarang
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Sudah punya akun?{' '}
                      <Link to={'/login'} className="text-blue-600 hover:text-blue-800 font-bold">Login Disini</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        
    </Appshell>
  );
};

export default DaftarSection;