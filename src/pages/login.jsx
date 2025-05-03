import { FaEnvelope, FaLock, FaEye, FaGoogle, FaFacebookF, FaEyeSlash } from 'react-icons/fa';
import Appshell from '../components/appshell';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { Alert, useHandleAlert } from "sstra-alert";
import { handleLogin } from '../db/auth/login';



const LoginSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [typePassword, setTypePassword] = useState('password');
  const [value, setValue] = useState({
    email: 'rain@gmail.com',
    password: '12345678'
  })

  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValue(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const { status, data, handleAlert } = useHandleAlert();

  const handleForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const {status, message, data} = await handleLogin(value)

    if(!status) {
      handleAlert('error', message)
      setIsLoading(false);
      return
    }    

    console.log({data});
    

    navigate('/')
    setIsLoading(false);
  };

 
  return (
    <Appshell>

      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-gray-800"}
      />

        <section className="login-section py-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 md:w-2/3">
            <div className="login-card shadow-lg rounded-lg bg-white">
              <div className="card-body p-5">
                <div className="text-center mb-5">
                  <img 
                    src="/logolkbt1.png" 
                    alt="Logo" 
                    className="h-20 mb-3 mx-auto"
                  />
                  <h2 className="font-bold text-2xl">Masuk ke Akun Anda</h2>
                  <p className="text-gray-500">Silakan masuk untuk mengakses layanan kami</p>
                </div>
                
                <form onSubmit={handleForm}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                        <FaEnvelope />
                      </span>
                      <input 
                        type='email'
                        id='email'
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
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                        <FaLock />
                      </span>
                      <input 
                        type={typePassword}
                        name='password'
                        id='password'
                        value={value.password}
                        onChange={(e) => handleChangeInput(e)}
                        className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Masukkan password Anda" 
                        required
                      />
                      <button 
                        type="button"
                        onClick={() => setTypePassword(typePassword == 'password' ? 'text' : 'password')}
                        className="inline-flex items-center px-3 border border-l-0 rounded-r-md bg-gray-50 hover:bg-gray-100" 
                        
                      >
                        {typePassword == 'password' ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                  </div>
                  
                  
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md mb-3 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    Masuk
                  </button>
                  
                 
                  
                  <div className="text-center">

                    <p className="mt-2">
                      Belum punya akun?{' '}
                      <Link to={'/daftar'} className="text-blue-600 hover:text-blue-800 font-bold">Daftar Sekarang</Link>
                
                      
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

export default LoginSection;