import bcrypt  from "bcryptjs";
import { supabase } from "../supabaseClient";

 export const handleLogin =async (dataUser) => {

  const { email, password} = dataUser
      try {
          const {data, error} = await supabase
          .from('user')
          .select('*')
          .eq('email', email)
  
          
          if(data.length == 0) {
              return {status: false, message: 'Email belum terdafter'}
            }

            const isMatch = await bcrypt.compare(password,data[0].password );
            

            if(!isMatch) {
              return {status: false, message: 'Password anda salah'}
            }

        localStorage.setItem('user', JSON.stringify(data))

        return {status: true, message: 'Berhasil Login'}
        
          
 
      }  catch (error) {
        console.log({error});
        
        return {status: false, message: 'Terjadi Kesalahan'}
    }

    }