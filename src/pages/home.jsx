import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Footer from "../components/footer";
import Headers from "../components/headers";

// Inisialisasi Supabase client
const supabaseUrl = "https://your-project.supabase.co";
const supabaseKey = "your-anon-key";
const supabase = createClient(supabaseUrl, supabaseKey);

const FormPendaftaran = () => {
  // State untuk data form
  const [formData, setFormData] = useState({
    nama_siswa: "",
    nik: "",
    umur: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    tempat_lahir: "",
    agama: "",
    alamat: "",
    no_kk: "",
    persetujuan: false,
  });

  // State untuk validasi
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validasi form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nama_siswa.trim())
      newErrors.nama_siswa = "Nama siswa wajib diisi";
    if (!formData.nik.trim()) newErrors.nik = "NIK wajib diisi";
    if (!/^\d{16}$/.test(formData.nik))
      newErrors.nik = "NIK harus 16 digit angka";
    if (!formData.umur.trim()) newErrors.umur = "Umur wajib diisi";
    if (!formData.jenis_kelamin)
      newErrors.jenis_kelamin = "Jenis kelamin wajib dipilih";
    if (!formData.tanggal_lahir)
      newErrors.tanggal_lahir = "Tanggal lahir wajib diisi";
    if (!formData.tempat_lahir.trim())
      newErrors.tempat_lahir = "Tempat lahir wajib diisi";
    if (!formData.agama) newErrors.agama = "Agama wajib dipilih";
    if (!formData.alamat.trim()) newErrors.alamat = "Alamat wajib diisi";
    if (!formData.no_kk.trim()) newErrors.no_kk = "Nomor KK wajib diisi";
    if (!formData.persetujuan)
      newErrors.persetujuan = "Anda harus menyetujui syarat dan ketentuan";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit form ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Insert data ke tabel 'siswa' di Supabase
        const { data, error } = await supabase.from("siswa").insert([
          {
            nama_siswa: formData.nama_siswa,
            nik: formData.nik,
            umur: parseInt(formData.umur),
            jenis_kelamin: formData.jenis_kelamin,
            tanggal_lahir: formData.tanggal_lahir,
            tempat_lahir: formData.tempat_lahir,
            agama: formData.agama,
            alamat: formData.alamat,
            no_kk: formData.no_kk,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;

        setSubmitSuccess(true);
        // Reset form setelah submit berhasil
        setFormData({
          nama_siswa: "",
          nik: "",
          umur: "",
          jenis_kelamin: "",
          tanggal_lahir: "",
          tempat_lahir: "",
          agama: "",
          alamat: "",
          no_kk: "",
          persetujuan: false,
        });

        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch (error) {
        console.error("Error:", error);
        alert(`Gagal menyimpan data: ${error.message}`);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-['Comic_Sans_MS']  min-h-screen p-0 m-0">
      {/* Header */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[98%] mx-auto my-10 py-1 text-center bg-[#E6A4B4] text-black rounded-lg">
        <marquee>
          <h1 className="text-xl">SELAMAT DATANG DI TK Nurjannah</h1>
        </marquee>
      </div> */}
      <Headers />

      {/* Navigation Buttons */}
      <div className="absolute top-0 left-4 mt-0">
        <div className="text-right">
          <ul className="flex space-x-2 mr-4 mt-2">
            <li>
              <a
                href="index_login.php"
                className="inline-block px-4 py-2 text-xs rounded-full bg-[#ffffff] text-[#ef6771] shadow-lg hover:bg-[#ef6771] hover:text-white transition"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="tabelsiswa.php"
                className="inline-block px-4 py-2 text-xs rounded-full bg-white text-[#ef6771] shadow-md hover:bg-[#ef6771] hover:text-white transition"
              >
                Daftar Nama Siswa
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-white p-5 shadow-2xl my-[190px] mb-7">
        <h1 className="text-2xl font-bold mb-4">FORMULIR PENDAFTARAN</h1>

        {submitSuccess && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Pendaftaran berhasil! Data siswa telah tersimpan.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Nama Siswa */}
          <div className="mb-4">
            <label htmlFor="nama_siswa" className="block mb-1">
              Nama siswa:
            </label>
            <input
              type="text"
              id="nama_siswa"
              name="nama_siswa"
              value={formData.nama_siswa}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.nama_siswa ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.nama_siswa && (
              <p className="text-red-500 text-sm mt-1">{errors.nama_siswa}</p>
            )}
          </div>

          {/* NIK */}
          <div className="mb-4">
            <label htmlFor="nik" className="block mb-1">
              NIK:
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              maxLength="16"
              className={`w-full p-2 border ${
                errors.nik ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.nik && (
              <p className="text-red-500 text-sm mt-1">{errors.nik}</p>
            )}
          </div>

          {/* Umur */}
          <div className="mb-4">
            <label htmlFor="umur" className="block mb-1">
              Umur:
            </label>
            <input
              type="number"
              id="umur"
              name="umur"
              value={formData.umur}
              onChange={handleChange}
              min="2"
              max="6"
              className={`w-full p-2 border ${
                errors.umur ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.umur && (
              <p className="text-red-500 text-sm mt-1">{errors.umur}</p>
            )}
          </div>

          {/* Jenis Kelamin */}
          <div className="mb-4">
            <label className="block mb-1">Jenis kelamin:</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Laki-laki"
                  checked={formData.jenis_kelamin === "Laki-laki"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Laki-laki
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Perempuan"
                  checked={formData.jenis_kelamin === "Perempuan"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Perempuan
              </label>
            </div>
            {errors.jenis_kelamin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jenis_kelamin}
              </p>
            )}
          </div>

          {/* Tanggal Lahir */}
          <div className="mb-4">
            <label htmlFor="tanggal_lahir" className="block mb-1">
              Tanggal lahir:
            </label>
            <input
              type="date"
              id="tanggal_lahir"
              name="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.tanggal_lahir ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.tanggal_lahir && (
              <p className="text-red-500 text-sm mt-1">
                {errors.tanggal_lahir}
              </p>
            )}
          </div>

          {/* Tempat Lahir */}
          <div className="mb-4">
            <label htmlFor="tempat_lahir" className="block mb-1">
              Tempat lahir:
            </label>
            <input
              type="text"
              id="tempat_lahir"
              name="tempat_lahir"
              value={formData.tempat_lahir}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.tempat_lahir ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.tempat_lahir && (
              <p className="text-red-500 text-sm mt-1">{errors.tempat_lahir}</p>
            )}
          </div>

          {/* Agama */}
          <div className="mb-4">
            <label className="block mb-1">Agama:</label>
            <div className="flex flex-wrap gap-4">
              {[
                "Islam",
                "Kristen",
                "Katolik",
                "Hindu",
                "Buddha",
                "Konghucu",
              ].map((agama) => (
                <label key={agama} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="agama"
                    value={agama}
                    checked={formData.agama === agama}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {agama}
                </label>
              ))}
            </div>
            {errors.agama && (
              <p className="text-red-500 text-sm mt-1">{errors.agama}</p>
            )}
          </div>

          {/* Alamat */}
          <div className="mb-4">
            <label htmlFor="alamat" className="block mb-1">
              Alamat:
            </label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              rows="3"
              className={`w-full p-2 border ${
                errors.alamat ? "border-red-500" : "border-gray-300"
              } rounded`}
            ></textarea>
            {errors.alamat && (
              <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>
            )}
          </div>

          {/* Nomor KK */}
          <div className="mb-4">
            <label htmlFor="no_kk" className="block mb-1">
              Nomor KK:
            </label>
            <input
              type="text"
              id="no_kk"
              name="no_kk"
              value={formData.no_kk}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.no_kk ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.no_kk && (
              <p className="text-red-500 text-sm mt-1">{errors.no_kk}</p>
            )}
          </div>

          {/* Persetujuan */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="persetujuan"
                checked={formData.persetujuan}
                onChange={handleChange}
                className="mr-2"
              />
              Saya menyetujui syarat dan ketentuan.
            </label>
            {errors.persetujuan && (
              <p className="text-red-500 text-sm mt-1">{errors.persetujuan}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#ef6771] text-white px-5 py-2 rounded hover:bg-[#FF6F61] transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Menyimpan..." : "Kirim"}
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default FormPendaftaran;
