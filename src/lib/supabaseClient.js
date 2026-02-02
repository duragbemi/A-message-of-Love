// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qsgitrteqwmqqhocuxsc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZ2l0cnRlcXdtcXFob2N1eHNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwMTc5MzEsImV4cCI6MjA4NTU5MzkzMX0.0UQfVk0c_MpHwoqW7RsAKZStrBMyxpNpcKAwE9CB37I'

export const supabase = createClient(supabaseUrl, supabaseKey)