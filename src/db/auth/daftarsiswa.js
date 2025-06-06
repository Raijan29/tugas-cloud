import { getNIS } from "../../utils/utils";
import { supabase } from "../supabaseClient";

export const handleDaftarSiswa = async (dataUser) => {
  const {
    nama,
    nik,
    jeniskelamin,
    tanggallahir,
    alamat,
    nohp,
    email,
    namaOrtu,
  } = dataUser;

  try {
    // 1. Validasi field wajib
    const requiredFields = {
      nama: "Nama",
      nik: "NIK",
      jeniskelamin: "Jenis kelamin",
      email: "Email",
    };

    for (const [field, name] of Object.entries(requiredFields)) {
      if (!dataUser[field]) {
        return { status: false, message: `${name} harus diisi` };
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { status: false, message: "Format email tidak valid" };
    }

    // 2. Format tanggal lahir untuk PostgreSQL

    // 3. Cek email sudah terdaftar
    const { data: existingEmail, error: emailError } = await supabase
      .from("siswa")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (emailError) {
      console.error("Error checking email:", emailError);
      return {
        status: false,
        message: "Terjadi kesalahan saat memeriksa email",
      };
    }
    if (existingEmail) {
      return { status: false, message: "Email sudah digunakan" };
    }

    // 4. Generate NIS otomatis
    const currentYear = new Date().getFullYear();
    const { count } = await supabase
      .from("siswa")
      .select("*", { count: "exact", head: true });

    // const nis = `${currentYear}${String(count + 1).padStart(4, "0")}`;
    const nis = getNIS(currentYear, count);

    const insertData = {
      nis,
      nama,
      nik,
      jeniskelamin: jeniskelamin, // Jika di database menggunakan snake_case
      tanggallahir, // Format yang benar
      alamat: alamat || null,
      nohp: nohp || null,
      email,
      namaOrtu: namaOrtu || null, // Jika di database menggunakan snake_case
    };

    const { data: newSiswa, error: insertError } = await supabase
      .from("siswa")
      .insert(insertData)
      .select();

    if (insertError) {
      console.error("Full insert error:", {
        code: insertError.code,
        message: insertError.message,
        details: insertError.details,
      });

      if (insertError.code === "23505") {
        return {
          status: false,
          message: "NIS/NIK sudah terdaftar. Silakan coba lagi",
        };
      }

      if (insertError.code === "23502") {
        return {
          status: false,
          message: `Kolom wajib tidak diisi: ${insertError.column}`,
        };
      }

      console.log(newSiswa, "New Siswa Data");

      return {
        status: false,
        message: insertError.message || "Gagal melakukan registrasi",
        data: {
          id: newSiswa ? newSiswa[0].id : null,
          nis: newSiswa ? newSiswa[0].nis : nis,
          nik: newSiswa ? newSiswa[0].nik : null,
          nama: newSiswa ? newSiswa[0].nama : nama,
          jeniskelamin: newSiswa ? newSiswa[0].jeniskelamin : jeniskelamin,
          tanggallahir: newSiswa ? newSiswa[0].tanggallahir : tanggallahir,
          alamat: newSiswa ? newSiswa[0].alamat : alamat,
          nohp: newSiswa ? newSiswa[0].nohp : nohp,
          email: newSiswa ? newSiswa[0].email : email,
          namaOrtu: newSiswa ? newSiswa[0].namaOrtu : namaOrtu,
        },
      };
    }

    return {
      status: true,
      message: "Pendaftaran berhasil",

      data: {
        id: newSiswa ? newSiswa[0].id : null,
        nis: newSiswa ? newSiswa[0].nis : nis,
        nik: newSiswa ? newSiswa[0].nik : null,
        nama: newSiswa ? newSiswa[0].nama : nama,
        jeniskelamin: newSiswa ? newSiswa[0].jeniskelamin : jeniskelamin,
        tanggallahir: newSiswa ? newSiswa[0].tanggallahir : tanggallahir,
        alamat: newSiswa ? newSiswa[0].alamat : alamat,
        nohp: newSiswa ? newSiswa[0].nohp : nohp,
        email: newSiswa ? newSiswa[0].email : email,
        namaOrtu: newSiswa ? newSiswa[0].namaOrtu : namaOrtu,
      },
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      status: false,
      message: error.message || "Terjadi kesalahan sistem",
    };
  }
};
