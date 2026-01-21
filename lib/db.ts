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
      .insert([{
        email,
        type,
        sequence_step: 0,  // Étape 0 = email de bienvenue envoyé
        last_email_sent: new Date().toISOString()
      }])
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

// Nouvelle fonction pour récupérer les leads qui doivent recevoir le prochain email
export async function getLeadsForNextEmail() {
  try {
    const { data, error } = await supabase
      .from('lead_magnets')
      .select('*')
      .lt('sequence_step', 5)  // Séquence de 5 emails
      .not('last_email_sent', 'is', null)

    if (error) throw error

    // Filtrer ceux qui doivent recevoir le prochain email (tous les 2 jours)
    const now = new Date()
    const leadsReady = (data || []).filter(lead => {
      const lastSent = new Date(lead.last_email_sent)
      const daysSince = (now.getTime() - lastSent.getTime()) / (1000 * 60 * 60 * 24)
      return daysSince >= 2  // Email tous les 2 jours
    })

    return leadsReady
  } catch (error) {
    console.error('Error fetching leads for sequence:', error)
    throw error
  }
}

// Mettre à jour l'étape de séquence après envoi
export async function updateSequenceStep(email: string, newStep: number) {
  try {
    const { error } = await supabase
      .from('lead_magnets')
      .update({
        sequence_step: newStep,
        last_email_sent: new Date().toISOString()
      })
      .eq('email', email)

    if (error) throw error
    return true
  } catch (error) {
    console.error('Error updating sequence step:', error)
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
