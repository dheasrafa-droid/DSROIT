import express from 'express'
import { createClient } from '@supabase/supabase-js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

app.post('/get-private-file', async (req, res) => {
  const { fileName } = req.body
  const { data, error } = supabase.storage.from('private-bucket').createSignedUrl(fileName, 60)
  if(error) return res.status(400).json({ error: error.message })
  res.json({ signedUrl: data.signedUrl })
})

app.listen(3000, () => console.log('Backend running on port 3000'))
