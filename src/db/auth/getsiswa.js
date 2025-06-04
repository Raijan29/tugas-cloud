// src/services/supabaseSiswa.js
import { supabase } from "../supabaseClient";

export const GetSiswa = async () => {
  try {
    const { data, error } = await supabase
      .from("siswa")
      .select(
        `
        id,
        nama,
        email,
        nis,
        jeniskelamin,
        tanggallahir,
        alamat,
        nohp,
        namaOrtu,
        created_at
      `
      )
      .order("created_at", { ascending: false }); // Urutkan berdasarkan yang terbaru

    if (error) {
      console.error("Error fetching data from Supabase:", error);
      throw error;
    }

    // Format data untuk Google Sheets
    // const formattedData = [
    //   // Header
    //   [
    //     "ID",
    //     "Nama",
    //     "Email",
    //     "NIS",
    //     "Jenis Kelamin",
    //     "Tanggal Lahir",
    //     "Alamat",
    //     "No HP",
    //     "Nama Orang Tua",
    //     "Tanggal Daftar",
    //   ],

    //   // Data rows
    //   ...data.map((siswa) => [
    //     siswa.id,
    //     siswa.nama || "",
    //     siswa.email || "",
    //     siswa.nis || "",
    //     siswa.jeniskelamin || "",
    //     siswa.tanggallahir
    //       ? new Date(siswa.tanggallahir).toLocaleDateString()
    //       : "",
    //     siswa.alamat || "",
    //     siswa.nohp || "",
    //     siswa.namaOrtu || "",
    //     new Date(siswa.created_at).toLocaleString(),
    //   ]),
    // ];

    return data;
  } catch (error) {
    console.error("Error in GetSiswa:", error);
    throw error;
  }
};

export const deleteSiswa = async (id) => {
  try {
    const { error } = await supabase.from("siswa").delete().eq("id", id);

    if (error) throw error;

    return { success: true, message: "Data siswa berhasil dihapus" };
  } catch (error) {
    console.error("Error deleting siswa:", error);
    throw error;
  }
};
