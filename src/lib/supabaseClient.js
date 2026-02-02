// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qsgitrteqwmqqhocuxsc.supabase.co'
const supabaseKey = 'sb_publishable_6kIs0dIKHxXVowXW-Wn4Vg_38VTaX8T'

export const supabase = createClient(supabaseUrl, supabaseKey)