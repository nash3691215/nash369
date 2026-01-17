import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export async function initDatabase() {
  // Cette fonction n'est plus nécessaire avec Supabase
  // La table sera créée via le SQL Editor de Supabase
  return { message: 'Utilise le SQL Editor dans Supabase pour créer la table' }
}

export async function saveLeadMagnetEmail(email: string, type: string = 'lead_magnet') {
  try {
    const { data, error } = await supabase
      .from('lead_magnets')
      .insert([{ email, type }])
      .select()

    if (error) {
      // Si c'est une erreur de duplicate, on l'ignore
      if (error.code === '23505') {
        console.log('Email déjà enregistré:', email)
        return true
      }
      throw error
    }

    console.log('Email enregistré:', email)
    return true
  } catch (error) {
    console.error('Error saving email:', error)
    throw error
  }
}

export async function getLeadMagnetEmails() {
  try {
    const { data, error } = await supabase
      .from('lead_magnets')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return data || []
  } catch (error) {
    console.error('Error fetching emails:', error)
    throw error
  }
}
