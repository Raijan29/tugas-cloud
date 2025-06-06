import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import Navbar from "../components/navbar";
import { handleDaftarSiswa } from "../db/auth/daftarsiswa";
import { formatTanggalIndonesia } from "../utils/utils";

import { gapi } from "gapi-script";
import { uploadDataSheet } from "../lib/spreedsheet";
const CLIENT_ID =
  "116636762159-4chv55p11kuqq7rl59dh4b1o91hja6ou.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";
const SPREADSHEET_ID = "1H0E1vOeXlCa-gswVXlVlkD-s53jjf3GP5qC8ptPSKPc";
const SHEET_NAME = "Sheet1";

const PendaftaranSiswa = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [value, setValue] = useState({
    nama: "raizan",
    nik: "1207312908030001",
    jenisKelamin: "laki-laki",
    tanggalLahir: "",
    alamat: "batu 8",
    nohp: "081262615751",
    email: "raizan@gmail.com",
    namaOrtu: "pio",
  });

  const resetValue = () => {
    setValue({
      nama: "",
      nik: "",
      jenisKelamin: "",
      tanggalLahir: "",
      alamat: "",
      nohp: "",
      email: "",
      namaOrtu: "",
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

  const initializeGoogleAPI = async () => {
    try {
      await gapi.load("client:auth2", async () => {
        try {
          await gapi.client.init({
            clientId: CLIENT_ID,
            scope: SCOPES,
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4",
            ],
          });

          const authInstance = gapi.auth2.getAuthInstance();
          authInstance.isSignedIn.listen((isSignedIn) => {
            setIsSignedIn(isSignedIn);
            if (!isSignedIn) {
              authInstance.signIn();
            }
          });

          // Set initial state
          setIsSignedIn(authInstance.isSignedIn.get());

          // If not signed in, attempt silent sign-in first
          if (!authInstance.isSignedIn.get()) {
            try {
              await authInstance.signIn();
            } catch (signInError) {
              // // Silent sign-in failed, show prompt
              // await authInstance.signIn();
              if (signInError.error === "popup_closed_by_user") {
                setAuthError(
                  "Login dibatalkan. Silakan coba lagi dan selesaikan proses login."
                );
              } else {
                setAuthError(
                  `Gagal login: ${signInError.error || signInError.message}`
                );
              }
            }
          }
        } catch (initError) {
          console.error("Google API initialization error:", initError);
          setAuthError(
            `Failed to initialize Google API: ${
              initError.details || initError.message
            }`
          );
        } finally {
          setIsLoading(false);
        }
      });
    } catch (loadError) {
      console.error("Google API load error:", loadError);
      setAuthError(`Failed to load Google API: ${loadError.message}`);
      setIsLoading(false);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setIsError("");
    setIsLoading(true);

    const { status, message, data } = await handleDaftarSiswa({
      nama: value.nama,
      nik: value.nik,
      jeniskelamin: value.jenisKelamin,
      tanggallahir: formatTanggalIndonesia(value.tanggalLahir),
      alamat: value.alamat,
      nohp: value.nohp,
      email: value.email,
      namaOrtu: value.namaOrtu,
    });
    console.log(data);

    if (status) {
      await uploadDataSheet(data);
      // navigate("/dashboard");
    } else {
      setIsError(message);
      resetValue();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    initializeGoogleAPI();
  }, []);

  return (
    <div className="min-h-screen bg-[#e0dede] py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-md mx-auto mt-[200px] bg-[#5cb071] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8 flex flex-col items-center">
            <img
              src="/logo123.png"
              alt="logo tk"
              className="h-16 bg-white rounded-md"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              FORMULIR PENDAFTARAN SISWA BARU
            </h2>
            <p className="mt-2 text-sm text-white">
              Isi data dengan lengkap dan benar
            </p>
            {isError && (
              <p className="mt-2 text-sm text-red-500 font-medium">{isError}</p>
            )}
          </div>

          <form onSubmit={handleForm} className="space-y-6">
            {/* Data Pribadi */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                DATA PRIBADI
              </h3>

              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="namaLengkap"
                    className="block text-sm font-medium text-white"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    value={value.nama}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="nik"
                    className="block text-sm font-medium text-white"
                  >
                    NIK
                  </label>
                  <input
                    type="text"
                    name="nik"
                    id="nik"
                    value={value.nik}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="jeniskelamin"
                    className="block text-sm font-medium text-white"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    id="jeniskelamin"
                    name="jeniskelamin"
                    value={value.jeniskelamin}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tanggalLahir"
                    className="block text-sm font-medium text-white"
                  >
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    name="tanggalLahir"
                    id="tanggalLahir"
                    value={value.tanggalLahir}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="alamat"
                    className="block text-sm font-medium text-white"
                  >
                    Alamat Lengkap
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    rows={3}
                    value={value.alamat}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="noTelepon"
                    className="block text-sm font-medium text-white"
                  >
                    No. Telepon/HP
                  </label>
                  <input
                    type="tel"
                    name="nohp"
                    id="nohp"
                    value={value.nohp}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={value.email}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Data Orang Tua */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                DATA ORANG TUA
              </h3>

              <div className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="namaOrtu"
                    className="block text-sm font-medium text-white"
                  >
                    Nama Orang Tua/Wali
                  </label>
                  <input
                    type="text"
                    name="namaOrtu"
                    id="namaOrtu"
                    value={value.namaOrtu}
                    onChange={(e) => handleChange(e)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-[#ffde59] hover:bg-[#b89f3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Memproses...
                  </>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PendaftaranSiswa;
