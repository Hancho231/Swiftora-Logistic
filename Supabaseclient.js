import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://hancho231.github.io/Swiftora-Logistic/',
  'https://hancho231.github.io/Swiftora-Logistic/'
)

export default supabase
