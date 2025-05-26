import { supabase } from "../supabaseClient";
import bcrypt from "bcryptjs";

export const handleRegister = async (dataUser) => {
  const { username, email, password } = dataUser;
  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("email", email);

    console.log({ data, error });

    if (data.length === 0) {
      return { status: false, message: "tidak boleh kosong" };
    }
    if (data.length > 0) {
      return { status: false, message: "Email sudah digunakan" };
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    console.log({ hash });

    const { error: errorInsert } = await supabase
      .from("user")
      .insert({ username, email, password: hash });

    console.log({ errorInsert });
    if (errorInsert && errorInsert.code == "23505") {
      return { status: false, message: "no telepon sudah digunakan" };
    }

    return { status: true, message: "Register Berhasil" };
  } catch (error) {
    console.log(error);

    return { status: false, message: "Terjadi Kesalahan" };
  }
};
