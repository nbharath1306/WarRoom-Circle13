import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing keys")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testSchema() {
  console.log("Testing events table...")
  const { data: events, error: e1 } = await supabase.from('events').select('id').limit(1)
  if (e1) console.error("Error events:", e1.message)
  else console.log("Events table exists.")

  console.log("Testing tasks table...")
  const { data: tasks, error: e2 } = await supabase.from('tasks').select('id').limit(1)
  if (e2) console.error("Error tasks:", e2.message)
  else console.log("Tasks table exists.")

  console.log("Testing users table...")
  const { data: users, error: e3 } = await supabase.from('users').select('id').limit(1)
  if (e3) console.error("Error users:", e3.message)
  else console.log("Users table exists.")
  
  process.exit(0)
}

testSchema()
