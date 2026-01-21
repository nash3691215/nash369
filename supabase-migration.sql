-- Migration Supabase pour ajouter la séquence email
-- À exécuter dans Supabase SQL Editor

-- Ajouter les colonnes pour la séquence email
ALTER TABLE lead_magnets
ADD COLUMN IF NOT EXISTS sequence_step INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_email_sent TIMESTAMPTZ DEFAULT NOW();

-- Index pour optimiser les requêtes
CREATE INDEX IF NOT EXISTS idx_sequence_step ON lead_magnets(sequence_step);
CREATE INDEX IF NOT EXISTS idx_last_email_sent ON lead_magnets(last_email_sent);

-- Mettre à jour les leads existants
UPDATE lead_magnets
SET sequence_step = 0, last_email_sent = created_at
WHERE sequence_step IS NULL;
