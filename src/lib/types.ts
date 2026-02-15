export interface Company {
  id: string
  name: string
  slug: string
  logo_url: string | null
  website: string | null
  founded_year: number | null
  headcount_range: string | null
  funding_stage: string | null
  total_raised: number | null
  industry: string | null
  description: string | null
  created_at?: string
}

export interface Person {
  id: string
  name: string
  slug: string
  photo_url: string | null
  current_company_id: string | null
  current_role: string | null
  twitter_handle: string | null
  linkedin_url: string | null
  bio: string | null
  created_at?: string
  current_company?: Company | null
}

export interface VC {
  id: string
  name: string
  slug: string
  logo_url: string | null
  website: string | null
  description: string | null
  aum: string | null
  created_at?: string
}

export interface Stance {
  id: string
  entity_type: 'company' | 'person' | 'vc'
  entity_id: string
  topic: string
  position: 'supported' | 'opposed' | 'silent' | 'mixed'
  summary: string
  source_url: string
  source_type: 'social_media' | 'press_release' | 'news' | 'sec_filing' | 'donation_record' | 'company_website' | 'interview'
  stance_date: string | null
  verified: boolean
  created_at?: string
}

export interface Topic {
  id: string
  name: string
  description: string | null
  icon: string | null
}

export interface Employment {
  id: string
  person_id: string
  company_id: string
  role: string | null
  start_date: string | null
  end_date: string | null
  is_current: boolean
  company?: Company
}

export interface Investment {
  id: string
  vc_id: string
  company_id: string
  round: string | null
  date: string | null
  amount: number | null
  company?: Company
}

export type EntityType = 'company' | 'person' | 'vc'

export interface SearchResult {
  type: EntityType
  id: string
  name: string
  slug: string
  image_url: string | null
  subtitle: string | null
}
