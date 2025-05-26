// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://axmxuicomgghdbkigaqw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4bXh1aWNvbWdnaGRia2lnYXF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxODk5MjAsImV4cCI6MjA2Mzc2NTkyMH0.19rtchXlEiwd1RIKi3ZtO7NZfL51AS9WO1eJHmqniiE";

export const supabase = createClient(supabaseUrl, supabaseKey);
