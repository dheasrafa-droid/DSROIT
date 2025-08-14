// Supabase Edge Function
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export async function handler(req) {
  try {
    const { fileName } = await req.json()
    
    // generate signed URL private file
    const { data, error } = supabase.storage.from('private-bucket').createSignedUrl(fileName, 60)
    if(error) return new Response(JSON.stringify({ error: error.message }), { status:400 })

    return new Response(JSON.stringify({ signedUrl: data.signedUrl }), { status:200 })
  } catch(err) {
    return new Response(JSON.stringify({ error: err.message }), { status:500 })
  }
}
