// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gyfcjgzeykigowyjfejw.supabase.co'; // Ganti dengan URL kamu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZmNqZ3pleWtpZ293eWpmZWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzA0OTcsImV4cCI6MjA2MTYwNjQ5N30.zTenGOVzghHEuF3BpUjqEYJ1TgQwNL34k7yiY3afY3U';             // Ganti dengan anon key dari Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);


