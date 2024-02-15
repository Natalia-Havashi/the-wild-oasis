import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vdeddkganyroianiuepi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZWRka2dhbnlyb2lhbml1ZXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0MTg5MjgsImV4cCI6MjAyMjk5NDkyOH0.xklIHac9O1lya8uUVwtSU0cctt1lM45grSImmbx_L74";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
