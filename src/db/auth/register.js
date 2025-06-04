import { supabase } from "../supabaseClient";
import bcrypt from "bcryptjs";

export const handleRegister = async (dataUser) => {
  const { username, email, password } = dataUser;

  try {
    // Validasi field tidak boleh kosong
    if (!username || !email || !password) {
      return { status: false, message: "tidak boleh kosong!" };
    }

    // Validasi format email sederhana
    if (!email.includes("@") || !email.includes(".")) {
      return { status: false, message: "Format email tidak valid" };
    }

    // Cek apakah email sudah terdaftar
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email);

    if (error) {
      console.error("Error checking email:", error);
      return {
        status: false,
        message: "Terjadi kesalahan saat memeriksa email",
      };
    }

    if (data && data.length > 0) {
      return { status: false, message: "Email sudah digunakan" };
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Insert data user baru
    const { error: errorInsert } = await supabase
      .from("user")
      .insert({ username, email, password: hash });

    if (errorInsert) {
      console.error("Error inserting user:", errorInsert);
      if (errorInsert.code === "23505") {
        return {
          status: false,
          message: "Username atau email sudah digunakan",
        };
      }
      return { status: false, message: "Gagal melakukan registrasi" };
    }

    return { status: true, message: "Register Berhasil" };
  } catch (error) {
    console.error("Registration error:", error);
    return { status: false, message: "Terjadi Kesalahan" };
  }
};
