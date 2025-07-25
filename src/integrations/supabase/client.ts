// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ebtscaoqirwivliaunjl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVidHNjYW9xaXJ3aXZsaWF1bmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzODYwNzUsImV4cCI6MjA2ODk2MjA3NX0.xjMkZlOoZrC-1Uyrhj6KJB6Lvi9ye7PPtE8HCqZTG48";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});