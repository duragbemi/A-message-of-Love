import { supabase } from '@/lib/supabaseClient';

// This variable lives in the server's memory.
// Once filled, it stays filled until the server restarts.
let cachedTimezones = null;

export async function getTimezones() {
  // CHECK 1: Do we already have the data in memory?
  if (cachedTimezones) {
    console.log("⚡ Using Cached Timezones (0ms)");
    return cachedTimezones;
  }

  console.log("🐢 Fetching Timezones from DB (Slow)...");

  // CHECK 2: If not, fetch it from Supabase
  // Note: We select only the 'name' to keep the packet size small
  const { data, error } = await supabase
    .from('pg_timezone_names')
    .select('name');

  if (error) {
    console.error("Error fetching timezones:", error);
    return [];
  }

  // SAVE IT: Store the result in our variable for next time
  cachedTimezones = data;
  
  return cachedTimezones;
}
