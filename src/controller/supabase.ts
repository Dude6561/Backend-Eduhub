import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.supabaseUrl;
const supabaseKey = process.env.supabaseKey;
console.log("URL:", process.env.SUPABASE_URL);

if (!supabaseKey || !supabaseUrl) {
  throw new Error("Missing Supabase Env Variable");
}
export const supabase = createClient(supabaseUrl, supabaseKey);
