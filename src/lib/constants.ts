export const TOPICS = {
  layoffs: {
    id: 'layoffs',
    name: 'Layoffs',
    description: 'How they handled layoffs — severance, notice, communication',
    icon: '📉',
    color: 'red'
  },
  dei: {
    id: 'dei',
    name: 'DEI',
    description: 'Diversity, equity, and inclusion stances and actions',
    icon: '🌈',
    color: 'purple'
  },
  remote_work: {
    id: 'remote_work',
    name: 'Remote Work',
    description: 'Remote, hybrid, or return-to-office policies',
    icon: '🏠',
    color: 'blue'
  },
  union: {
    id: 'union',
    name: 'Unionization',
    description: 'Stance on worker unionization efforts',
    icon: '✊',
    color: 'orange'
  },
  politics: {
    id: 'politics',
    name: 'Politics',
    description: 'Political donations and endorsements',
    icon: '🗳️',
    color: 'gray'
  },
  palestine: {
    id: 'palestine',
    name: 'Palestine',
    description: 'Stance on the Palestine/Israel conflict',
    icon: '🕊️',
    color: 'green'
  },
  environment: {
    id: 'environment',
    name: 'Environment',
    description: 'Climate and sustainability actions',
    icon: '🌍',
    color: 'emerald'
  },
  ai_ethics: {
    id: 'ai_ethics',
    name: 'AI Ethics',
    description: 'AI safety and responsible AI development',
    icon: '🤖',
    color: 'indigo'
  },
  worker_treatment: {
    id: 'worker_treatment',
    name: 'Worker Treatment',
    description: 'General treatment of employees',
    icon: '👷',
    color: 'amber'
  },
  exec_compensation: {
    id: 'exec_compensation',
    name: 'Executive Pay',
    description: 'CEO pay vs worker pay disparities',
    icon: '💰',
    color: 'yellow'
  },
  free_speech: {
    id: 'free_speech',
    name: 'Free Speech',
    description: 'Content moderation and speech policies',
    icon: '📢',
    color: 'sky'
  },
  immigration: {
    id: 'immigration',
    name: 'Immigration',
    description: 'Visa sponsorship and immigration policy stances',
    icon: '🛂',
    color: 'teal'
  }
} as const

export const POSITION_COLORS = {
  supported: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200', dot: 'bg-green-500' },
  opposed: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200', dot: 'bg-red-500' },
  silent: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200', dot: 'bg-gray-400' },
  mixed: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200', dot: 'bg-amber-500' }
} as const

export const POSITION_LABELS = {
  supported: 'Supported',
  opposed: 'Opposed',
  silent: 'Silent',
  mixed: 'Mixed'
} as const

export const SOURCE_LABELS = {
  social_media: 'Social Media',
  press_release: 'Press Release',
  news: 'News',
  sec_filing: 'SEC Filing',
  donation_record: 'Donation Record',
  company_website: 'Company Website',
  interview: 'Interview'
} as const
