// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)



// --------------------------------------
// Supabase Table Schema: "waitlist"
// Columns:
// - id (uuid, primary key, default: uuid_generate_v4())
// - name (text)
// - email (text)
// - company_name (text, nullable)
// - user_type (text: 'buyer' or 'seller')
// - agree_to_terms (boolean)
// - agree_to_marketing (boolean)
// - created_at (timestamp, default: now())
