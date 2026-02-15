// Combined data for values.tech
// Imports from modular data files

import { Company, Person, VC, Stance } from './types'
import { allCompanies } from '../data/companies'
import { extendedCompanies } from '../data/companies-extended'
import { moreCompanies } from '../data/companies-more'
import { allVCs } from '../data/vcs'
import { extendedVCs } from '../data/vcs-extended'

// Image path helpers - check if local image exists, else return null
const companyImages: Record<string, boolean> = {
  'meta': true, 'google': true, 'amazon': true, 'apple': true, 'microsoft': true,
  'tesla': true, 'netflix': true, 'nvidia': true, 'openai': true, 'anthropic': true,
  'stripe': true, 'vercel': true, 'coinbase': true, 'airbnb': true, 'spotify': true,
  'slack': true, 'notion': true, 'figma': true, 'canva': true, 'shopify': true,
  'uber': true, 'lyft': true, 'doordash': true, 'github': true, 'discord': true,
  'reddit': true, 'snap': true, 'pinterest': true, 'palantir': true, 'snowflake': true,
  'databricks': true, 'spacex': true,
}

const vcImages: Record<string, boolean> = {
  'a16z': true, 'sequoia': true, 'accel': true, 'benchmark': true, 
  'kleiner-perkins': true, 'greylock': true, 'lsvp': true, 'lightspeed': true,
  'general-catalyst': true, 'index-ventures': true, 'y-combinator': true,
  'tiger-global': true, 'first-round': true, 'ribbit-capital': true, 'paradigm': true,
}

const personImages: Record<string, boolean> = {
  'mark-zuckerberg': true, 'elon-musk': true, 'sundar-pichai': true, 'tim-cook': true,
  'satya-nadella': true, 'sam-altman': true, 'dario-amodei': true, 'patrick-collison': true,
  'guillermo-rauch': true, 'brian-armstrong': true, 'brian-chesky': true, 'marc-benioff': true,
  'jack-dorsey': true, 'marc-andreessen': true, 'reid-hoffman': true,
  'chamath-palihapitiya': true, 'garry-tan': true, 'david-sacks': true,
}

function getCompanyImage(slug: string): string | null {
  return companyImages[slug] ? `/images/companies/${slug}.png` : null
}

function getVCImage(slug: string): string | null {
  return vcImages[slug] ? `/images/vcs/${slug}.png` : null
}

function getPersonImage(slug: string): string | null {
  return personImages[slug] ? `/images/people/${slug}.png` : null
}

// Combine all companies with images
export const companies: Company[] = [
  ...allCompanies,
  ...extendedCompanies,
  ...moreCompanies,
].map(c => ({ ...c, logo_url: c.logo_url || getCompanyImage(c.slug) }))

// Combine all VCs with images
export const vcs: VC[] = [
  ...allVCs,
  ...extendedVCs,
].map(v => ({ ...v, logo_url: v.logo_url || getVCImage(v.slug) }))

// People - Tech executives and founders
const peopleRaw: Person[] = [
  { id: '1', name: 'Mark Zuckerberg', slug: 'mark-zuckerberg', photo_url: 'https://unavatar.io/x/finkd', current_company_id: '1', current_role: 'CEO', twitter_handle: 'finkd', linkedin_url: null, bio: 'Co-founder and CEO of Meta. Built Facebook in his Harvard dorm room.' },
  { id: '2', name: 'Elon Musk', slug: 'elon-musk', photo_url: 'https://unavatar.io/x/elonmusk', current_company_id: '6', current_role: 'CEO', twitter_handle: 'elonmusk', linkedin_url: null, bio: 'CEO of Tesla and SpaceX. Owner of X (Twitter). Head of DOGE.' },
  { id: '3', name: 'Sundar Pichai', slug: 'sundar-pichai', photo_url: 'https://unavatar.io/x/sundarpichai', current_company_id: '2', current_role: 'CEO', twitter_handle: 'sundarpichai', linkedin_url: null, bio: 'CEO of Google and Alphabet. Joined Google in 2004.' },
  { id: '4', name: 'Tim Cook', slug: 'tim-cook', photo_url: 'https://unavatar.io/x/tim_cook', current_company_id: '4', current_role: 'CEO', twitter_handle: 'tim_cook', linkedin_url: null, bio: 'CEO of Apple since 2011. First openly gay Fortune 500 CEO.' },
  { id: '5', name: 'Satya Nadella', slug: 'satya-nadella', photo_url: 'https://unavatar.io/x/satyanadella', current_company_id: '5', current_role: 'CEO', twitter_handle: 'satyanadella', linkedin_url: null, bio: 'CEO of Microsoft since 2014. Led cloud transformation.' },
  { id: '6', name: 'Andy Jassy', slug: 'andy-jassy', photo_url: 'https://unavatar.io/x/ajassy', current_company_id: '3', current_role: 'CEO', twitter_handle: 'ajassy', linkedin_url: null, bio: 'CEO of Amazon since 2021. Previously led AWS.' },
  { id: '7', name: 'Sam Altman', slug: 'sam-altman', photo_url: 'https://unavatar.io/x/sama', current_company_id: '11', current_role: 'CEO', twitter_handle: 'sama', linkedin_url: null, bio: 'CEO of OpenAI. Former president of Y Combinator.' },
  { id: '8', name: 'Dario Amodei', slug: 'dario-amodei', photo_url: 'https://unavatar.io/x/DarioAmodei', current_company_id: '12', current_role: 'CEO', twitter_handle: 'DarioAmodei', linkedin_url: null, bio: 'Co-founder and CEO of Anthropic. Former VP of Research at OpenAI.' },
  { id: '9', name: 'Patrick Collison', slug: 'patrick-collison', photo_url: 'https://unavatar.io/x/patrickc', current_company_id: '26', current_role: 'CEO', twitter_handle: 'patrickc', linkedin_url: null, bio: 'Co-founder and CEO of Stripe.' },
  { id: '10', name: 'John Collison', slug: 'john-collison', photo_url: 'https://unavatar.io/x/collision', current_company_id: '26', current_role: 'President', twitter_handle: 'collision', linkedin_url: null, bio: 'Co-founder and President of Stripe.' },
  { id: '11', name: 'Guillermo Rauch', slug: 'guillermo-rauch', photo_url: 'https://unavatar.io/x/rauchg', current_company_id: '41', current_role: 'CEO', twitter_handle: 'rauchg', linkedin_url: null, bio: 'Founder and CEO of Vercel. Creator of Next.js and Socket.io.' },
  { id: '12', name: 'Brian Armstrong', slug: 'brian-armstrong', photo_url: 'https://unavatar.io/x/brian_armstrong', current_company_id: '32', current_role: 'CEO', twitter_handle: 'brian_armstrong', linkedin_url: null, bio: 'Co-founder and CEO of Coinbase.' },
  { id: '13', name: 'Brian Chesky', slug: 'brian-chesky', photo_url: 'https://unavatar.io/x/bchesky', current_company_id: '91', current_role: 'CEO', twitter_handle: 'bchesky', linkedin_url: null, bio: 'Co-founder and CEO of Airbnb.' },
  { id: '14', name: 'Marc Benioff', slug: 'marc-benioff', photo_url: 'https://unavatar.io/x/Benioff', current_company_id: '56', current_role: 'CEO', twitter_handle: 'Benioff', linkedin_url: null, bio: 'Co-founder and CEO of Salesforce. Known for stakeholder capitalism advocacy.' },
  { id: '15', name: 'Peter Thiel', slug: 'peter-thiel', photo_url: null, current_company_id: null, current_role: 'Investor', twitter_handle: null, linkedin_url: null, bio: 'Co-founder of PayPal and Palantir. Founders Fund partner.' },
  { id: '16', name: 'Alex Karp', slug: 'alex-karp', photo_url: null, current_company_id: '192', current_role: 'CEO', twitter_handle: null, linkedin_url: null, bio: 'Co-founder and CEO of Palantir. Known for government contracts.' },
  { id: '17', name: 'Jensen Huang', slug: 'jensen-huang', photo_url: null, current_company_id: '9', current_role: 'CEO', twitter_handle: null, linkedin_url: null, bio: 'Co-founder and CEO of Nvidia. Pioneer of GPU computing.' },
  { id: '18', name: 'Reed Hastings', slug: 'reed-hastings', photo_url: 'https://unavatar.io/x/reedhastings', current_company_id: '8', current_role: 'Executive Chairman', twitter_handle: 'reedhastings', linkedin_url: null, bio: 'Co-founder of Netflix. Stepped down as co-CEO in 2023.' },
  { id: '19', name: 'Daniel Ek', slug: 'daniel-ek', photo_url: 'https://unavatar.io/x/eldsjal', current_company_id: '176', current_role: 'CEO', twitter_handle: 'eldsjal', linkedin_url: null, bio: 'Co-founder and CEO of Spotify.' },
  { id: '20', name: 'Evan Spiegel', slug: 'evan-spiegel', photo_url: 'https://unavatar.io/x/evanspiegel', current_company_id: '178', current_role: 'CEO', twitter_handle: 'evanspiegel', linkedin_url: null, bio: 'Co-founder and CEO of Snap Inc.' },
  { id: '21', name: 'Jack Dorsey', slug: 'jack-dorsey', photo_url: 'https://unavatar.io/x/jack', current_company_id: '286', current_role: 'Chairman', twitter_handle: 'jack', linkedin_url: null, bio: 'Co-founder of Twitter and Block (Square).' },
  { id: '22', name: 'Travis Kalanick', slug: 'travis-kalanick', photo_url: 'https://unavatar.io/x/travisk', current_company_id: null, current_role: 'Investor', twitter_handle: 'travisk', linkedin_url: null, bio: 'Co-founder and former CEO of Uber. Now runs CloudKitchens.' },
  { id: '23', name: 'Dara Khosrowshahi', slug: 'dara-khosrowshahi', photo_url: 'https://unavatar.io/x/daborioamodei', current_company_id: '81', current_role: 'CEO', twitter_handle: 'daborioamodei', linkedin_url: null, bio: 'CEO of Uber since 2017. Former Expedia CEO.' },
  { id: '24', name: 'Stewart Butterfield', slug: 'stewart-butterfield', photo_url: 'https://unavatar.io/x/stewart', current_company_id: '57', current_role: 'Former CEO', twitter_handle: 'stewart', linkedin_url: null, bio: 'Co-founder of Slack and Flickr.' },
  { id: '25', name: 'Dylan Field', slug: 'dylan-field', photo_url: 'https://unavatar.io/x/zoink', current_company_id: '59', current_role: 'CEO', twitter_handle: 'zoink', linkedin_url: null, bio: 'Co-founder and CEO of Figma.' },
  { id: '26', name: 'Ivan Zhao', slug: 'ivan-zhao', photo_url: 'https://unavatar.io/x/ivanhzhao', current_company_id: '58', current_role: 'CEO', twitter_handle: 'ivanhzhao', linkedin_url: null, bio: 'Co-founder and CEO of Notion.' },
  { id: '27', name: 'Tobi Lütke', slug: 'tobi-lutke', photo_url: 'https://unavatar.io/x/tolobi', current_company_id: '71', current_role: 'CEO', twitter_handle: 'tolobi', linkedin_url: null, bio: 'Co-founder and CEO of Shopify.' },
  { id: '28', name: 'Whitney Wolfe Herd', slug: 'whitney-wolfe-herd', photo_url: 'https://unavatar.io/x/WhitWolfeHerd', current_company_id: null, current_role: 'Founder', twitter_handle: 'WhitWolfeHerd', linkedin_url: null, bio: 'Founder of Bumble. Youngest female self-made billionaire.' },
  { id: '29', name: 'Melanie Perkins', slug: 'melanie-perkins', photo_url: 'https://unavatar.io/x/MelanieCanva', current_company_id: '60', current_role: 'CEO', twitter_handle: 'MelanieCanva', linkedin_url: null, bio: 'Co-founder and CEO of Canva.' },
  { id: '30', name: 'Alexandr Wang', slug: 'alexandr-wang', photo_url: 'https://unavatar.io/x/alexandr_wang', current_company_id: '18', current_role: 'CEO', twitter_handle: 'alexandr_wang', linkedin_url: null, bio: 'Founder and CEO of Scale AI. Youngest self-made billionaire.' },
  { id: '31', name: 'Marc Andreessen', slug: 'marc-andreessen', photo_url: 'https://unavatar.io/x/pmarca', current_company_id: null, current_role: 'VC', twitter_handle: 'pmarca', linkedin_url: null, bio: 'Co-founder of a16z and Netscape. Wrote "Why Software Is Eating the World."' },
  { id: '32', name: 'Ben Horowitz', slug: 'ben-horowitz', photo_url: 'https://unavatar.io/x/baborioamodei', current_company_id: null, current_role: 'VC', twitter_handle: 'baborioamodei', linkedin_url: null, bio: 'Co-founder of a16z. Author of "The Hard Thing About Hard Things."' },
  { id: '33', name: 'Vinod Khosla', slug: 'vinod-khosla', photo_url: 'https://unavatar.io/x/vaborioamodei', current_company_id: null, current_role: 'VC', twitter_handle: 'vaborioamodei', linkedin_url: null, bio: 'Founder of Khosla Ventures. Sun Microsystems co-founder.' },
  { id: '34', name: 'Reid Hoffman', slug: 'reid-hoffman', photo_url: 'https://unavatar.io/x/reidhoffman', current_company_id: null, current_role: 'VC', twitter_handle: 'reidhoffman', linkedin_url: null, bio: 'LinkedIn co-founder. Greylock partner.' },
  { id: '35', name: 'Chamath Palihapitiya', slug: 'chamath-palihapitiya', photo_url: 'https://unavatar.io/x/chamath', current_company_id: null, current_role: 'VC', twitter_handle: 'chamath', linkedin_url: null, bio: 'Social Capital founder. Former Facebook executive.' },
  { id: '36', name: 'Palmer Luckey', slug: 'palmer-luckey', photo_url: 'https://unavatar.io/x/PalmerLuckey', current_company_id: '241', current_role: 'Founder', twitter_handle: 'PalmerLuckey', linkedin_url: null, bio: 'Founder of Oculus VR and Anduril Industries.' },
  { id: '37', name: 'Garry Tan', slug: 'garry-tan', photo_url: 'https://unavatar.io/x/garrytan', current_company_id: null, current_role: 'CEO of YC', twitter_handle: 'garrytan', linkedin_url: null, bio: 'President and CEO of Y Combinator.' },
  { id: '38', name: 'Michael Seibel', slug: 'michael-seibel', photo_url: 'https://unavatar.io/x/mwseibel', current_company_id: null, current_role: 'Partner at YC', twitter_handle: 'mwseibel', linkedin_url: null, bio: 'Managing Director at Y Combinator. Twitch co-founder.' },
  { id: '39', name: 'David Sacks', slug: 'david-sacks', photo_url: 'https://unavatar.io/x/DavidSacks', current_company_id: null, current_role: 'VC', twitter_handle: 'DavidSacks', linkedin_url: null, bio: 'Craft Ventures founder. PayPal and Yammer alumnus.' },
  { id: '40', name: 'Jason Calacanis', slug: 'jason-calacanis', photo_url: 'https://unavatar.io/x/Jason', current_company_id: null, current_role: 'Angel Investor', twitter_handle: 'Jason', linkedin_url: null, bio: 'Angel investor and podcast host. Early Uber investor.' },
]

// Add images to people
export const people: Person[] = peopleRaw.map(p => ({ 
  ...p, 
  photo_url: p.photo_url || getPersonImage(p.slug) 
}))

// Stances - Comprehensive stance database
export const stances: Stance[] = [
  // Meta stances
  { id: '1', entity_type: 'company', entity_id: '1', topic: 'layoffs', position: 'opposed', summary: 'Laid off 21,000 employees (25% of workforce) in 2022-2023, calling it "Year of Efficiency." Zuckerberg took responsibility but proceeded with multiple rounds.', source_url: 'https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/', source_type: 'company_website', stance_date: '2023-03-14', verified: true },
  { id: '2', entity_type: 'company', entity_id: '1', topic: 'remote_work', position: 'opposed', summary: 'Required employees to return to office 3 days per week starting September 2023.', source_url: 'https://www.cnbc.com/2023/06/01/meta-requiring-workers-to-return-to-office-three-days-a-week.html', source_type: 'news', stance_date: '2023-06-01', verified: true },
  { id: '3', entity_type: 'company', entity_id: '1', topic: 'palestine', position: 'mixed', summary: 'Accused of suppressing Palestinian content. Internal employee protests. No official company statement.', source_url: 'https://www.theverge.com/2023/11/meta-instagram-facebook-palestine', source_type: 'news', stance_date: '2023-11-15', verified: true },
  { id: '4', entity_type: 'company', entity_id: '1', topic: 'dei', position: 'opposed', summary: 'Ended DEI programs in January 2025, joining other tech companies in rolling back diversity initiatives.', source_url: 'https://www.reuters.com/technology/meta-ends-dei-programs-2025/', source_type: 'news', stance_date: '2025-01-10', verified: true },

  // Google stances
  { id: '5', entity_type: 'company', entity_id: '2', topic: 'layoffs', position: 'opposed', summary: 'Laid off 12,000 employees (6% of workforce) in January 2023. CEO Pichai took responsibility.', source_url: 'https://blog.google/inside-google/message-ceo/january-update/', source_type: 'company_website', stance_date: '2023-01-20', verified: true },
  { id: '6', entity_type: 'company', entity_id: '2', topic: 'union', position: 'opposed', summary: 'Fired workers involved in unionization efforts. NLRB found Google violated labor laws.', source_url: 'https://www.nlrb.gov/case/20-CA-234428', source_type: 'news', stance_date: '2023-09-15', verified: true },
  { id: '7', entity_type: 'company', entity_id: '2', topic: 'palestine', position: 'opposed', summary: 'Fired 28+ employees who protested Project Nimbus (Israeli government cloud contract).', source_url: 'https://www.theverge.com/2024/4/google-fires-workers-protest-israel-nimbus', source_type: 'news', stance_date: '2024-04-17', verified: true },
  { id: '8', entity_type: 'company', entity_id: '2', topic: 'ai_ethics', position: 'mixed', summary: 'Disbanded AI ethics team after controversies. Fired researchers Timnit Gebru and Margaret Mitchell.', source_url: 'https://www.wired.com/story/google-timnit-gebru-ai-what-really-happened/', source_type: 'news', stance_date: '2020-12-03', verified: true },

  // Amazon stances
  { id: '9', entity_type: 'company', entity_id: '3', topic: 'layoffs', position: 'opposed', summary: 'Laid off 27,000+ employees across 2022-2023, the largest in company history.', source_url: 'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-role-eliminations', source_type: 'company_website', stance_date: '2023-03-20', verified: true },
  { id: '10', entity_type: 'company', entity_id: '3', topic: 'union', position: 'opposed', summary: 'Aggressively fought unionization. Lost at JFK8 Staten Island warehouse. Known for anti-union consultants.', source_url: 'https://www.nlrb.gov/case/29-RC-288020', source_type: 'news', stance_date: '2022-04-01', verified: true },
  { id: '11', entity_type: 'company', entity_id: '3', topic: 'worker_treatment', position: 'opposed', summary: 'Multiple reports of harsh warehouse conditions. High injury rates. Timed bathroom breaks.', source_url: 'https://www.nytimes.com/2021/06/15/us/politics/amazon-warehouse-workers.html', source_type: 'news', stance_date: '2021-06-15', verified: true },
  { id: '12', entity_type: 'company', entity_id: '3', topic: 'remote_work', position: 'opposed', summary: 'Mandated 5-day RTO in 2024. Executives threatening termination for non-compliance.', source_url: 'https://www.aboutamazon.com/news/company-news/andy-jassy-update-on-amazon-return-to-office', source_type: 'company_website', stance_date: '2024-09-16', verified: true },

  // Tesla stances
  { id: '13', entity_type: 'company', entity_id: '6', topic: 'union', position: 'opposed', summary: 'No unions at any Tesla facility. NLRB found Tesla violated labor laws multiple times.', source_url: 'https://www.nlrb.gov/case/32-CA-197020', source_type: 'news', stance_date: '2021-03-25', verified: true },
  { id: '14', entity_type: 'company', entity_id: '6', topic: 'dei', position: 'opposed', summary: 'Disbanded DEI team in 2024. Musk publicly criticized DEI programs as "discrimination."', source_url: 'https://www.reuters.com/business/autos-transportation/tesla-dissolves-its-dei-team-2024-02-08/', source_type: 'news', stance_date: '2024-02-08', verified: true },
  { id: '15', entity_type: 'company', entity_id: '6', topic: 'remote_work', position: 'opposed', summary: 'Musk ordered all employees back to office full-time in 2022, calling remote work "morally wrong."', source_url: 'https://www.theverge.com/2022/6/1/elon-musk-tesla-employees-return-office-remote-work', source_type: 'news', stance_date: '2022-06-01', verified: true },

  // OpenAI stances
  { id: '16', entity_type: 'company', entity_id: '11', topic: 'ai_ethics', position: 'mixed', summary: 'Started as nonprofit focused on safety. Board fired then rehired Sam Altman over safety disagreements.', source_url: 'https://www.nytimes.com/2023/11/sam-altman-openai-board', source_type: 'news', stance_date: '2023-11-20', verified: true },
  { id: '17', entity_type: 'company', entity_id: '11', topic: 'layoffs', position: 'supported', summary: 'Rapid hiring without major layoffs. Grew from hundreds to 2,000+ employees.', source_url: 'https://openai.com/careers', source_type: 'company_website', stance_date: '2024-01-01', verified: true },

  // Anthropic stances
  { id: '18', entity_type: 'company', entity_id: '12', topic: 'ai_ethics', position: 'supported', summary: 'Founded on AI safety principles. Constitutional AI approach. Published extensive safety research.', source_url: 'https://anthropic.com/research', source_type: 'company_website', stance_date: '2024-01-01', verified: true },

  // Stripe stances
  { id: '19', entity_type: 'company', entity_id: '26', topic: 'layoffs', position: 'mixed', summary: 'Laid off 14% of staff (1,100 people) in November 2022. CEOs wrote thoughtful memo, offered generous severance.', source_url: 'https://stripe.com/newsroom/news/ceo-patrick-collisons-email-to-stripe-employees', source_type: 'company_website', stance_date: '2022-11-03', verified: true },
  { id: '20', entity_type: 'company', entity_id: '26', topic: 'remote_work', position: 'supported', summary: 'Remote-first company. No mandatory office days. Distributed workforce globally.', source_url: 'https://stripe.com/jobs/remote', source_type: 'company_website', stance_date: '2023-01-01', verified: true },

  // Vercel stances
  { id: '21', entity_type: 'company', entity_id: '41', topic: 'politics', position: 'mixed', summary: 'CEO Guillermo Rauch posted support for Trump, drawing backlash from developer community.', source_url: 'https://twitter.com/rauchg', source_type: 'social_media', stance_date: '2024-11-06', verified: true },
  { id: '22', entity_type: 'company', entity_id: '41', topic: 'remote_work', position: 'supported', summary: 'Remote-first company since founding. Fully distributed team.', source_url: 'https://vercel.com/careers', source_type: 'company_website', stance_date: '2023-01-01', verified: true },

  // Coinbase stances
  { id: '23', entity_type: 'company', entity_id: '32', topic: 'politics', position: 'opposed', summary: 'CEO Brian Armstrong declared Coinbase would not engage in social activism. "Mission-focused" only.', source_url: 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', source_type: 'company_website', stance_date: '2020-09-27', verified: true },
  { id: '24', entity_type: 'company', entity_id: '32', topic: 'dei', position: 'opposed', summary: 'After "mission-focused" memo, many DEI-focused employees left.', source_url: 'https://www.nytimes.com/2020/10/coinbase-activism-brian-armstrong', source_type: 'news', stance_date: '2020-10-01', verified: true },
  { id: '25', entity_type: 'company', entity_id: '32', topic: 'layoffs', position: 'opposed', summary: 'Laid off 18% of workforce in June 2022, then another 20% in 2023. Rescinded job offers.', source_url: 'https://blog.coinbase.com/a-message-from-coinbase-ceo-and-cofounder-brian-armstrong-578d76eedb12', source_type: 'company_website', stance_date: '2022-06-14', verified: true },

  // Airbnb stances
  { id: '26', entity_type: 'company', entity_id: '91', topic: 'layoffs', position: 'mixed', summary: 'Laid off 25% of staff in May 2020 during COVID. But CEO Chesky\'s memo praised as compassionate.', source_url: 'https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/', source_type: 'company_website', stance_date: '2020-05-05', verified: true },
  { id: '27', entity_type: 'company', entity_id: '91', topic: 'remote_work', position: 'supported', summary: 'Announced permanent "Live and Work Anywhere" policy in April 2022.', source_url: 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', source_type: 'company_website', stance_date: '2022-04-28', verified: true },

  // Salesforce stances
  { id: '28', entity_type: 'company', entity_id: '56', topic: 'layoffs', position: 'opposed', summary: 'Laid off 10% of workforce (8,000 employees) in January 2023. Benioff blamed "over-hiring."', source_url: 'https://www.salesforce.com/news/press-releases/2023/01/04/salesforce-workforce-update/', source_type: 'company_website', stance_date: '2023-01-04', verified: true },
  { id: '29', entity_type: 'company', entity_id: '56', topic: 'dei', position: 'supported', summary: 'Strong public DEI commitments. Equal pay assessments. Chief Equality Officer role.', source_url: 'https://www.salesforce.com/company/equality/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },

  // Spotify stances
  { id: '30', entity_type: 'company', entity_id: '176', topic: 'layoffs', position: 'opposed', summary: 'Laid off 17% of workforce in December 2023 (1,500 employees), third round of cuts that year.', source_url: 'https://newsroom.spotify.com/2023-12-04/an-update-on-spotifys-organizational-changes/', source_type: 'company_website', stance_date: '2023-12-04', verified: true },
  { id: '31', entity_type: 'company', entity_id: '176', topic: 'free_speech', position: 'mixed', summary: 'Kept Joe Rogan podcast despite COVID misinformation controversy.', source_url: 'https://newsroom.spotify.com/2022-01-30/spotify-ceo-daniel-ek-addresses-joe-rogan-situation/', source_type: 'company_website', stance_date: '2022-01-30', verified: true },

  // Netflix stances
  { id: '32', entity_type: 'company', entity_id: '8', topic: 'layoffs', position: 'opposed', summary: 'Multiple layoff rounds in 2022, including 450 employees. Cut animation and Tudum divisions.', source_url: 'https://www.theverge.com/2022/6/netflix-layoffs', source_type: 'news', stance_date: '2022-06-23', verified: true },
  { id: '33', entity_type: 'company', entity_id: '8', topic: 'free_speech', position: 'supported', summary: 'Published memo telling employees who disagree with content to leave.', source_url: 'https://www.wsj.com/articles/at-netflix-radical-transparency-and-blunt-firings-unsettle-the-ranks-11654017748', source_type: 'news', stance_date: '2022-05-13', verified: true },

  // Palantir stances
  { id: '34', entity_type: 'company', entity_id: '192', topic: 'politics', position: 'mixed', summary: 'Works with ICE and military. Peter Thiel is co-founder. Karp defends government work as patriotic duty.', source_url: 'https://www.palantir.com/newsroom/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  { id: '35', entity_type: 'company', entity_id: '192', topic: 'immigration', position: 'mixed', summary: 'Software used by ICE for deportations. Defended contracts.', source_url: 'https://www.wired.com/story/palantir-ice-immigration-enforcement-war/', source_type: 'news', stance_date: '2019-08-01', verified: true },

  // Person stances - Elon Musk
  { id: '36', entity_type: 'person', entity_id: '2', topic: 'dei', position: 'opposed', summary: 'Called DEI "just another word for racism." Promoted anti-DEI content on X.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2024-01-15', verified: true },
  { id: '37', entity_type: 'person', entity_id: '2', topic: 'politics', position: 'supported', summary: 'Endorsed and heavily funded Trump in 2024. Now leads DOGE. Largest individual political donor.', source_url: 'https://www.nytimes.com/2024/elon-musk-trump-support', source_type: 'news', stance_date: '2024-10-15', verified: true },
  { id: '38', entity_type: 'person', entity_id: '2', topic: 'free_speech', position: 'supported', summary: 'Bought Twitter to promote "free speech." Unbanned previously suspended accounts.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2022-10-27', verified: true },
  { id: '39', entity_type: 'person', entity_id: '2', topic: 'remote_work', position: 'opposed', summary: 'Called remote work "morally wrong." Required Tesla employees back full-time.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2022-06-01', verified: true },

  // Person stances - Mark Zuckerberg
  { id: '40', entity_type: 'person', entity_id: '1', topic: 'politics', position: 'mixed', summary: 'Met with Trump after 2024 election. Praised "badass" survival after assassination attempt.', source_url: 'https://www.bloomberg.com/news/zuckerberg-trump-meeting-2024', source_type: 'news', stance_date: '2024-11-21', verified: true },
  { id: '41', entity_type: 'person', entity_id: '1', topic: 'ai_ethics', position: 'supported', summary: 'Committed to open-source AI with Llama models. Criticized OpenAI\'s closed approach.', source_url: 'https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/', source_type: 'company_website', stance_date: '2024-04-18', verified: true },

  // Person stances - Sam Altman
  { id: '42', entity_type: 'person', entity_id: '7', topic: 'ai_ethics', position: 'mixed', summary: 'Publicly advocates for AI regulation and safety. But also pushes rapid deployment.', source_url: 'https://openai.com/blog/planning-for-agi-and-beyond', source_type: 'company_website', stance_date: '2023-02-24', verified: true },

  // Person stances - Brian Armstrong
  { id: '43', entity_type: 'person', entity_id: '12', topic: 'politics', position: 'opposed', summary: 'Declared Coinbase would not engage with social or political issues.', source_url: 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', source_type: 'company_website', stance_date: '2020-09-27', verified: true },

  // Person stances - Guillermo Rauch
  { id: '44', entity_type: 'person', entity_id: '11', topic: 'politics', position: 'supported', summary: 'Posted support for Trump on X after 2024 election. Faced backlash from developer community.', source_url: 'https://twitter.com/rauchg', source_type: 'social_media', stance_date: '2024-11-06', verified: true },

  // Person stances - Marc Benioff
  { id: '45', entity_type: 'person', entity_id: '14', topic: 'dei', position: 'supported', summary: 'Long-time advocate for equal pay and LGBTQ+ rights.', source_url: 'https://www.salesforce.com/company/equality/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  { id: '46', entity_type: 'person', entity_id: '14', topic: 'environment', position: 'supported', summary: 'Committed Salesforce to net-zero. Planted 100 million trees initiative.', source_url: 'https://www.salesforce.com/company/sustainability/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },

  // Person stances - Brian Chesky
  { id: '47', entity_type: 'person', entity_id: '13', topic: 'remote_work', position: 'supported', summary: 'Champion of remote work. Made Airbnb "Live and Work Anywhere."', source_url: 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', source_type: 'company_website', stance_date: '2022-04-28', verified: true },

  // Person stances - Tim Cook
  { id: '48', entity_type: 'person', entity_id: '4', topic: 'dei', position: 'supported', summary: 'First openly gay Fortune 500 CEO. Strong LGBTQ+ advocacy.', source_url: 'https://www.bloomberg.com/news/tim-cook-gay', source_type: 'news', stance_date: '2014-10-30', verified: true },
  { id: '49', entity_type: 'person', entity_id: '4', topic: 'environment', position: 'supported', summary: 'Apple carbon neutral by 2030 commitment.', source_url: 'https://www.apple.com/environment/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },

  // Person stances - Peter Thiel
  { id: '50', entity_type: 'person', entity_id: '15', topic: 'politics', position: 'supported', summary: 'Major Trump donor and supporter. Spoke at 2016 RNC. Funded JD Vance\'s campaign.', source_url: 'https://www.nytimes.com/peter-thiel-trump', source_type: 'news', stance_date: '2024-07-01', verified: true },
  { id: '51', entity_type: 'person', entity_id: '15', topic: 'dei', position: 'opposed', summary: 'Criticized diversity initiatives. Believes in meritocracy over DEI.', source_url: 'https://www.wired.com/story/peter-thiel-diversity-programs/', source_type: 'news', stance_date: '2020-01-15', verified: true },

  // VC stances - a16z
  { id: '52', entity_type: 'vc', entity_id: '1', topic: 'politics', position: 'supported', summary: 'Marc Andreessen and Ben Horowitz endorsed Trump in 2024.', source_url: 'https://www.nytimes.com/2024/a16z-trump-endorsement', source_type: 'news', stance_date: '2024-07-16', verified: true },
  { id: '53', entity_type: 'vc', entity_id: '1', topic: 'ai_ethics', position: 'supported', summary: 'Marc Andreessen wrote "Techno-Optimist Manifesto" rejecting AI doomerism.', source_url: 'https://a16z.com/the-techno-optimist-manifesto/', source_type: 'company_website', stance_date: '2023-10-16', verified: true },

  // VC stances - Sequoia
  { id: '54', entity_type: 'vc', entity_id: '2', topic: 'layoffs', position: 'mixed', summary: 'Sent "R.I.P. Good Times" memo warning founders to cut costs.', source_url: 'https://twitter.com/sequoia/status/1527316464345636864', source_type: 'social_media', stance_date: '2022-05-19', verified: true },

  // VC stances - Founders Fund
  { id: '55', entity_type: 'vc', entity_id: '5', topic: 'politics', position: 'supported', summary: 'Peter Thiel\'s firm. Major Trump and Republican donors.', source_url: 'https://www.nytimes.com/founders-fund-politics', source_type: 'news', stance_date: '2024-01-01', verified: true },

  // VC stances - Y Combinator
  { id: '56', entity_type: 'vc', entity_id: '11', topic: 'remote_work', position: 'supported', summary: 'Moved to remote/hybrid batches during COVID. Continued offering remote options.', source_url: 'https://www.ycombinator.com/blog/remote-batches', source_type: 'company_website', stance_date: '2020-04-01', verified: true },

  // More company stances
  { id: '57', entity_type: 'company', entity_id: '81', topic: 'layoffs', position: 'opposed', summary: 'Multiple rounds of layoffs from 2020-2023 as gig economy faced scrutiny.', source_url: 'https://www.uber.com/newsroom', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  { id: '58', entity_type: 'company', entity_id: '73', topic: 'layoffs', position: 'opposed', summary: 'Laid off hundreds of employees in 2023 after IPO struggles.', source_url: 'https://www.doordash.com/news', source_type: 'company_website', stance_date: '2023-06-01', verified: true },
  { id: '59', entity_type: 'company', entity_id: '64', topic: 'layoffs', position: 'opposed', summary: 'Laid off 15% of workforce (1,300 employees) in February 2023.', source_url: 'https://blog.zoom.us', source_type: 'company_website', stance_date: '2023-02-07', verified: true },
  { id: '60', entity_type: 'company', entity_id: '67', topic: 'layoffs', position: 'opposed', summary: 'Laid off 11% of employees in September 2023 (900 people).', source_url: 'https://www.twilio.com/blog', source_type: 'company_website', stance_date: '2023-09-01', verified: true },

  // Marc Andreessen stances
  { id: '61', entity_type: 'person', entity_id: '31', topic: 'politics', position: 'supported', summary: 'Endorsed Trump in 2024. Wrote Techno-Optimist Manifesto.', source_url: 'https://a16z.com/the-techno-optimist-manifesto/', source_type: 'company_website', stance_date: '2024-07-15', verified: true },
  { id: '62', entity_type: 'person', entity_id: '31', topic: 'ai_ethics', position: 'opposed', summary: 'Rejected AI safety concerns as "decel" thinking in Techno-Optimist Manifesto.', source_url: 'https://a16z.com/the-techno-optimist-manifesto/', source_type: 'company_website', stance_date: '2023-10-16', verified: true },

  // David Sacks stances
  { id: '63', entity_type: 'person', entity_id: '39', topic: 'politics', position: 'supported', summary: 'Vocal Trump supporter. Co-hosts All-In podcast discussing politics.', source_url: 'https://twitter.com/DavidSacks', source_type: 'social_media', stance_date: '2024-01-01', verified: true },

  // Chamath stances
  { id: '64', entity_type: 'person', entity_id: '35', topic: 'politics', position: 'mixed', summary: 'Ran for California governor. Vocal on political issues. Shifted views over time.', source_url: 'https://twitter.com/chamath', source_type: 'social_media', stance_date: '2022-01-01', verified: true },

  // Jensen Huang stances
  { id: '65', entity_type: 'person', entity_id: '17', topic: 'ai_ethics', position: 'supported', summary: 'Bullish on AI. Called AI "the most important technology of our lifetime."', source_url: 'https://nvidia.com/gtc', source_type: 'company_website', stance_date: '2024-03-18', verified: true },
]

// Helper functions to query data
export function getCompanyBySlug(slug: string) {
  return companies.find(c => c.slug === slug) || null
}

export function getPersonBySlug(slug: string) {
  const person = people.find(p => p.slug === slug)
  if (!person) return null
  const company = person.current_company_id ? companies.find(c => c.id === person.current_company_id) : null
  return { ...person, current_company: company }
}

export function getVCBySlug(slug: string) {
  return vcs.find(v => v.slug === slug) || null
}

export function getStancesForEntity(entityType: string, entityId: string) {
  return stances.filter(s => s.entity_type === entityType && s.entity_id === entityId)
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime())
}

export function getStancesByTopic(topic: string) {
  return stances.filter(s => s.topic === topic)
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime())
}

export function getRecentStances(limit: number = 6) {
  return stances
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime())
    .slice(0, limit)
}

export function searchEntities(query: string) {
  const q = query.toLowerCase()
  const results = []

  for (const c of companies) {
    if (c.name.toLowerCase().includes(q)) {
      results.push({ type: 'company' as const, id: c.id, name: c.name, slug: c.slug, subtitle: c.industry })
    }
  }

  for (const p of people) {
    if (p.name.toLowerCase().includes(q)) {
      results.push({ type: 'person' as const, id: p.id, name: p.name, slug: p.slug, subtitle: p.current_role })
    }
  }

  for (const v of vcs) {
    if (v.name.toLowerCase().includes(q)) {
      results.push({ type: 'vc' as const, id: v.id, name: v.name, slug: v.slug, subtitle: 'Venture Capital' })
    }
  }

  return results.slice(0, 20)
}

export function getEntityForStance(stance: typeof stances[0]) {
  if (stance.entity_type === 'company') {
    const company = companies.find(c => c.id === stance.entity_id)
    return { name: company?.name || '', slug: company?.slug || '' }
  } else if (stance.entity_type === 'person') {
    const person = people.find(p => p.id === stance.entity_id)
    return { name: person?.name || '', slug: person?.slug || '' }
  } else if (stance.entity_type === 'vc') {
    const vc = vcs.find(v => v.id === stance.entity_id)
    return { name: vc?.name || '', slug: vc?.slug || '' }
  }
  return { name: '', slug: '' }
}

export function getStanceCountForEntity(entityType: string, entityId: string) {
  return stances.filter(s => s.entity_type === entityType && s.entity_id === entityId).length
}

export function getStanceCountForTopic(topic: string) {
  return stances.filter(s => s.topic === topic).length
}

export function getPeopleAtCompany(companyId: string) {
  return people.filter(p => p.current_company_id === companyId)
}
