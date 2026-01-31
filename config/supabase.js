const {createClient} = require("@supabase/supabase-js")
const supabase = createClient(
              process.env.yevvbxlpyuadkiotxnuh.supabase.co,
              process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldnZieGxweXVhZGtpb3R4bnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4NjQ2NTAsImV4cCI6MjA4NTQ0MDY1MH0.KYVNmDzBrlFtAOnBx3e4hRFj7flhGmeE2oHmOdJFU_w
)
module.exports = supabase;