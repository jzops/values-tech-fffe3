// Mock data for values.tech MVP
// This allows the site to work without a database initially

import { Company, Person, VC, Stance } from './types'

export const companies: Company[] = [
  { id: '1', name: 'Meta', slug: 'meta', logo_url: null, website: 'https://meta.com', founded_year: 2004, headcount_range: '60,000+', funding_stage: 'Public', total_raised: null, industry: 'Social Media', description: 'Parent company of Facebook, Instagram, WhatsApp, and Reality Labs.' },
  { id: '2', name: 'Google', slug: 'google', logo_url: null, website: 'https://google.com', founded_year: 1998, headcount_range: '150,000+', funding_stage: 'Public', total_raised: null, industry: 'Technology', description: 'Search, advertising, cloud, and AI company. Subsidiary of Alphabet.' },
  { id: '3', name: 'Amazon', slug: 'amazon', logo_url: null, website: 'https://amazon.com', founded_year: 1994, headcount_range: '1,500,000+', funding_stage: 'Public', total_raised: null, industry: 'E-commerce', description: 'E-commerce, cloud computing, and AI company.' },
  { id: '4', name: 'Apple', slug: 'apple', logo_url: null, website: 'https://apple.com', founded_year: 1976, headcount_range: '160,000+', funding_stage: 'Public', total_raised: null, industry: 'Consumer Electronics', description: 'Consumer electronics, software, and services company.' },
  { id: '5', name: 'Microsoft', slug: 'microsoft', logo_url: null, website: 'https://microsoft.com', founded_year: 1975, headcount_range: '220,000+', funding_stage: 'Public', total_raised: null, industry: 'Software', description: 'Software, cloud, gaming, and AI company.' },
  { id: '6', name: 'Tesla', slug: 'tesla', logo_url: null, website: 'https://tesla.com', founded_year: 2003, headcount_range: '120,000+', funding_stage: 'Public', total_raised: null, industry: 'Automotive', description: 'Electric vehicles, energy storage, and solar.' },
  { id: '7', name: 'X (Twitter)', slug: 'x-twitter', logo_url: null, website: 'https://x.com', founded_year: 2006, headcount_range: '2,000', funding_stage: 'Private', total_raised: null, industry: 'Social Media', description: 'Social media platform, formerly Twitter.' },
  { id: '8', name: 'Stripe', slug: 'stripe', logo_url: null, website: 'https://stripe.com', founded_year: 2010, headcount_range: '8,000', funding_stage: 'Series I', total_raised: 8700000000, industry: 'Fintech', description: 'Payment processing infrastructure for the internet.' },
  { id: '9', name: 'OpenAI', slug: 'openai', logo_url: null, website: 'https://openai.com', founded_year: 2015, headcount_range: '2,000', funding_stage: 'Series E', total_raised: 11000000000, industry: 'AI', description: 'AI research company. Creators of GPT and ChatGPT.' },
  { id: '10', name: 'Anthropic', slug: 'anthropic', logo_url: null, website: 'https://anthropic.com', founded_year: 2021, headcount_range: '500', funding_stage: 'Series D', total_raised: 7000000000, industry: 'AI', description: 'AI safety company. Creators of Claude.' },
  { id: '11', name: 'Vercel', slug: 'vercel', logo_url: null, website: 'https://vercel.com', founded_year: 2015, headcount_range: '500', funding_stage: 'Series D', total_raised: 563000000, industry: 'Developer Tools', description: 'Frontend cloud platform. Creators of Next.js.' },
  { id: '12', name: 'Coinbase', slug: 'coinbase', logo_url: null, website: 'https://coinbase.com', founded_year: 2012, headcount_range: '3,500', funding_stage: 'Public', total_raised: null, industry: 'Crypto', description: 'Cryptocurrency exchange platform.' },
  { id: '13', name: 'Shopify', slug: 'shopify', logo_url: null, website: 'https://shopify.com', founded_year: 2006, headcount_range: '10,000', funding_stage: 'Public', total_raised: null, industry: 'E-commerce', description: 'E-commerce platform for online stores.' },
  { id: '14', name: 'Salesforce', slug: 'salesforce', logo_url: null, website: 'https://salesforce.com', founded_year: 1999, headcount_range: '70,000', funding_stage: 'Public', total_raised: null, industry: 'Enterprise Software', description: 'CRM and enterprise cloud software.' },
  { id: '15', name: 'Netflix', slug: 'netflix', logo_url: null, website: 'https://netflix.com', founded_year: 1997, headcount_range: '13,000', funding_stage: 'Public', total_raised: null, industry: 'Entertainment', description: 'Streaming entertainment service.' },
  { id: '16', name: 'Spotify', slug: 'spotify', logo_url: null, website: 'https://spotify.com', founded_year: 2006, headcount_range: '10,000', funding_stage: 'Public', total_raised: null, industry: 'Entertainment', description: 'Audio streaming and media services.' },
  { id: '17', name: 'Airbnb', slug: 'airbnb', logo_url: null, website: 'https://airbnb.com', founded_year: 2008, headcount_range: '6,000', funding_stage: 'Public', total_raised: null, industry: 'Travel', description: 'Online marketplace for lodging and experiences.' },
  { id: '18', name: 'Uber', slug: 'uber', logo_url: null, website: 'https://uber.com', founded_year: 2009, headcount_range: '32,000', funding_stage: 'Public', total_raised: null, industry: 'Transportation', description: 'Ride-sharing and delivery platform.' },
  { id: '19', name: 'Palantir', slug: 'palantir', logo_url: null, website: 'https://palantir.com', founded_year: 2003, headcount_range: '3,700', funding_stage: 'Public', total_raised: null, industry: 'Data Analytics', description: 'Data analytics and software company.' },
  { id: '20', name: 'Cloudflare', slug: 'cloudflare', logo_url: null, website: 'https://cloudflare.com', founded_year: 2009, headcount_range: '4,000', funding_stage: 'Public', total_raised: null, industry: 'Infrastructure', description: 'Web infrastructure and security company.' },
];

export const people: Person[] = [
  { id: '1', name: 'Mark Zuckerberg', slug: 'mark-zuckerberg', photo_url: null, current_company_id: '1', current_role: 'CEO', twitter_handle: 'finkd', linkedin_url: null, bio: 'Co-founder and CEO of Meta. Built Facebook in his Harvard dorm room.' },
  { id: '2', name: 'Elon Musk', slug: 'elon-musk', photo_url: null, current_company_id: '6', current_role: 'CEO', twitter_handle: 'elonmusk', linkedin_url: null, bio: 'CEO of Tesla and SpaceX. Owner of X (Twitter). Controversial tech billionaire.' },
  { id: '3', name: 'Sundar Pichai', slug: 'sundar-pichai', photo_url: null, current_company_id: '2', current_role: 'CEO', twitter_handle: 'sundarpichai', linkedin_url: null, bio: 'CEO of Google and Alphabet. Joined Google in 2004.' },
  { id: '4', name: 'Tim Cook', slug: 'tim-cook', photo_url: null, current_company_id: '4', current_role: 'CEO', twitter_handle: 'tim_cook', linkedin_url: null, bio: 'CEO of Apple since 2011. First openly gay Fortune 500 CEO.' },
  { id: '5', name: 'Satya Nadella', slug: 'satya-nadella', photo_url: null, current_company_id: '5', current_role: 'CEO', twitter_handle: 'satyanadella', linkedin_url: null, bio: 'CEO of Microsoft since 2014. Led cloud transformation.' },
  { id: '6', name: 'Andy Jassy', slug: 'andy-jassy', photo_url: null, current_company_id: '3', current_role: 'CEO', twitter_handle: 'ajassy', linkedin_url: null, bio: 'CEO of Amazon since 2021. Previously led AWS.' },
  { id: '7', name: 'Sam Altman', slug: 'sam-altman', photo_url: null, current_company_id: '9', current_role: 'CEO', twitter_handle: 'sama', linkedin_url: null, bio: 'CEO of OpenAI. Former president of Y Combinator.' },
  { id: '8', name: 'Dario Amodei', slug: 'dario-amodei', photo_url: null, current_company_id: '10', current_role: 'CEO', twitter_handle: 'daborioamodei', linkedin_url: null, bio: 'Co-founder and CEO of Anthropic. Former VP of Research at OpenAI.' },
  { id: '9', name: 'Patrick Collison', slug: 'patrick-collison', photo_url: null, current_company_id: '8', current_role: 'CEO', twitter_handle: 'patrickc', linkedin_url: null, bio: 'Co-founder and CEO of Stripe.' },
  { id: '10', name: 'Guillermo Rauch', slug: 'guillermo-rauch', photo_url: null, current_company_id: '11', current_role: 'CEO', twitter_handle: 'rauchg', linkedin_url: null, bio: 'Founder and CEO of Vercel. Creator of Next.js and Socket.io.' },
  { id: '11', name: 'Brian Armstrong', slug: 'brian-armstrong', photo_url: null, current_company_id: '12', current_role: 'CEO', twitter_handle: 'brian_armstrong', linkedin_url: null, bio: 'Co-founder and CEO of Coinbase.' },
  { id: '12', name: 'Brian Chesky', slug: 'brian-chesky', photo_url: null, current_company_id: '17', current_role: 'CEO', twitter_handle: 'bchesky', linkedin_url: null, bio: 'Co-founder and CEO of Airbnb.' },
  { id: '13', name: 'Marc Benioff', slug: 'marc-benioff', photo_url: null, current_company_id: '14', current_role: 'CEO', twitter_handle: 'Benioff', linkedin_url: null, bio: 'Co-founder and CEO of Salesforce. Known for stakeholder capitalism advocacy.' },
  { id: '14', name: 'Peter Thiel', slug: 'peter-thiel', photo_url: null, current_company_id: null, current_role: 'Investor', twitter_handle: null, linkedin_url: null, bio: 'Co-founder of PayPal and Palantir. Controversial libertarian investor.' },
  { id: '15', name: 'Alex Karp', slug: 'alex-karp', photo_url: null, current_company_id: '19', current_role: 'CEO', twitter_handle: null, linkedin_url: null, bio: 'Co-founder and CEO of Palantir. Known for controversial government contracts.' },
];

export const vcs: VC[] = [
  { id: '1', name: 'Andreessen Horowitz', slug: 'a16z', logo_url: null, website: 'https://a16z.com', description: 'Major Silicon Valley VC firm founded by Marc Andreessen and Ben Horowitz.', aum: '$35B+' },
  { id: '2', name: 'Sequoia Capital', slug: 'sequoia', logo_url: null, website: 'https://sequoia.com', description: 'One of the most successful venture capital firms. Early investors in Apple, Google, etc.', aum: '$85B+' },
  { id: '3', name: 'Accel', slug: 'accel', logo_url: null, website: 'https://accel.com', description: 'Early-stage VC firm. Early investor in Facebook, Slack, Spotify.', aum: '$50B+' },
  { id: '4', name: 'Benchmark', slug: 'benchmark', logo_url: null, website: 'https://benchmark.com', description: 'Equal partnership VC firm. Known for Uber, Twitter investments.', aum: '$5B+' },
  { id: '5', name: 'Founders Fund', slug: 'founders-fund', logo_url: null, website: 'https://foundersfund.com', description: 'Peter Thiel\'s VC firm. Known for SpaceX, Palantir investments.', aum: '$12B+' },
  { id: '6', name: 'Kleiner Perkins', slug: 'kleiner-perkins', logo_url: null, website: 'https://kleinerperkins.com', description: 'Historic VC firm. Early investor in Amazon, Google.', aum: '$15B+' },
  { id: '7', name: 'Y Combinator', slug: 'y-combinator', logo_url: null, website: 'https://ycombinator.com', description: 'Startup accelerator and seed funder. Alumni include Airbnb, Stripe, DoorDash.', aum: '$7B+' },
  { id: '8', name: 'Tiger Global', slug: 'tiger-global', logo_url: null, website: 'https://tigerglobal.com', description: 'Aggressive growth investor. Known for rapid deal-making.', aum: '$80B+' },
  { id: '9', name: 'SoftBank Vision Fund', slug: 'softbank-vision-fund', logo_url: null, website: 'https://softbank.com', description: 'Massive investment fund led by Masayoshi Son.', aum: '$100B+' },
  { id: '10', name: 'Greylock Partners', slug: 'greylock', logo_url: null, website: 'https://greylock.com', description: 'Top-tier VC firm. Early investor in LinkedIn, Facebook.', aum: '$10B+' },
];

export const stances: Stance[] = [
  // Meta stances
  { id: '1', entity_type: 'company', entity_id: '1', topic: 'layoffs', position: 'opposed', summary: 'Laid off 21,000 employees (25% of workforce) in 2022-2023, calling it "Year of Efficiency." Zuckerberg took responsibility but proceeded with multiple rounds.', source_url: 'https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/', source_type: 'company_website', stance_date: '2023-03-14', verified: true },
  { id: '2', entity_type: 'company', entity_id: '1', topic: 'remote_work', position: 'opposed', summary: 'Required employees to return to office 3 days per week starting September 2023.', source_url: 'https://www.cnbc.com/2023/06/01/meta-requiring-workers-to-return-to-office-three-days-a-week.html', source_type: 'news', stance_date: '2023-06-01', verified: true },
  { id: '3', entity_type: 'company', entity_id: '1', topic: 'palestine', position: 'mixed', summary: 'Accused of suppressing Palestinian content. Internal employee protests. No official company statement.', source_url: 'https://www.theverge.com/2023/11/meta-instagram-facebook-palestine', source_type: 'news', stance_date: '2023-11-15', verified: true },
  
  // Google stances
  { id: '4', entity_type: 'company', entity_id: '2', topic: 'layoffs', position: 'opposed', summary: 'Laid off 12,000 employees (6% of workforce) in January 2023. CEO Pichai took responsibility.', source_url: 'https://blog.google/inside-google/message-ceo/january-update/', source_type: 'company_website', stance_date: '2023-01-20', verified: true },
  { id: '5', entity_type: 'company', entity_id: '2', topic: 'union', position: 'opposed', summary: 'Fired workers involved in unionization efforts. NLRB found Google violated labor laws. Settled in 2023.', source_url: 'https://www.nlrb.gov/case/20-CA-234428', source_type: 'news', stance_date: '2023-09-15', verified: true },
  { id: '6', entity_type: 'company', entity_id: '2', topic: 'palestine', position: 'opposed', summary: 'Fired 28+ employees who protested Project Nimbus (Israeli government cloud contract). No Drop Nimbus despite internal protests.', source_url: 'https://www.theverge.com/2024/4/google-fires-workers-protest-israel-nimbus', source_type: 'news', stance_date: '2024-04-17', verified: true },
  { id: '7', entity_type: 'company', entity_id: '2', topic: 'ai_ethics', position: 'mixed', summary: 'Disbanded AI ethics team after controversies. Fired researchers Timnit Gebru and Margaret Mitchell. Continues AI development rapidly.', source_url: 'https://www.wired.com/story/google-timnit-gebru-ai-what-really-happened/', source_type: 'news', stance_date: '2020-12-03', verified: true },
  
  // Amazon stances
  { id: '8', entity_type: 'company', entity_id: '3', topic: 'layoffs', position: 'opposed', summary: 'Laid off 27,000+ employees across 2022-2023, the largest in company history.', source_url: 'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-role-eliminations', source_type: 'company_website', stance_date: '2023-03-20', verified: true },
  { id: '9', entity_type: 'company', entity_id: '3', topic: 'union', position: 'opposed', summary: 'Aggressively fought unionization. Lost at JFK8 Staten Island warehouse. Challenged election. Known for anti-union consultants.', source_url: 'https://www.nlrb.gov/case/29-RC-288020', source_type: 'news', stance_date: '2022-04-01', verified: true },
  { id: '10', entity_type: 'company', entity_id: '3', topic: 'worker_treatment', position: 'opposed', summary: 'Multiple reports of harsh warehouse conditions. High injury rates. Timed bathroom breaks controversy.', source_url: 'https://www.nytimes.com/2021/06/15/us/politics/amazon-warehouse-workers.html', source_type: 'news', stance_date: '2021-06-15', verified: true },
  { id: '11', entity_type: 'company', entity_id: '3', topic: 'remote_work', position: 'opposed', summary: 'Mandated 3-day RTO in 2023, then 5-day RTO in 2024. Executives threatening termination for non-compliance.', source_url: 'https://www.aboutamazon.com/news/company-news/andy-jassy-update-on-amazon-return-to-office', source_type: 'company_website', stance_date: '2024-09-16', verified: true },
  
  // Tesla stances
  { id: '12', entity_type: 'company', entity_id: '6', topic: 'union', position: 'opposed', summary: 'No unions at any Tesla facility. Elon Musk has made anti-union statements. NLRB found Tesla violated labor laws.', source_url: 'https://www.nlrb.gov/case/32-CA-197020', source_type: 'news', stance_date: '2021-03-25', verified: true },
  { id: '13', entity_type: 'company', entity_id: '6', topic: 'dei', position: 'opposed', summary: 'Disbanded DEI team in 2024. Musk publicly criticized DEI programs as "discrimination."', source_url: 'https://www.reuters.com/business/autos-transportation/tesla-dissolves-its-dei-team-2024-02-08/', source_type: 'news', stance_date: '2024-02-08', verified: true },
  { id: '14', entity_type: 'company', entity_id: '6', topic: 'remote_work', position: 'opposed', summary: 'Musk ordered all employees back to office full-time in 2022, calling remote work "morally wrong."', source_url: 'https://www.theverge.com/2022/6/1/elon-musk-tesla-employees-return-office-remote-work', source_type: 'news', stance_date: '2022-06-01', verified: true },
  
  // Stripe stances
  { id: '15', entity_type: 'company', entity_id: '8', topic: 'layoffs', position: 'mixed', summary: 'Laid off 14% of staff (1,100 people) in November 2022. CEOs wrote thoughtful memo taking responsibility, offered generous severance.', source_url: 'https://stripe.com/newsroom/news/ceo-patrick-collisons-email-to-stripe-employees', source_type: 'company_website', stance_date: '2022-11-03', verified: true },
  { id: '16', entity_type: 'company', entity_id: '8', topic: 'remote_work', position: 'supported', summary: 'Remote-first company. No mandatory office days. Distributed workforce across the world.', source_url: 'https://stripe.com/jobs/remote', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // OpenAI stances
  { id: '17', entity_type: 'company', entity_id: '9', topic: 'ai_ethics', position: 'mixed', summary: 'Started as nonprofit focused on safety. Transitioned to "capped profit." Rapid deployment despite safety concerns. Board fired then rehired Sam Altman over safety disagreements.', source_url: 'https://www.nytimes.com/2023/11/sam-altman-openai-board', source_type: 'news', stance_date: '2023-11-20', verified: true },
  
  // Vercel stances
  { id: '18', entity_type: 'company', entity_id: '11', topic: 'politics', position: 'mixed', summary: 'CEO Guillermo Rauch posted support for Trump, drawing backlash from developer community. Later deleted tweets.', source_url: 'https://twitter.com/rauchg', source_type: 'social_media', stance_date: '2024-11-06', verified: true },
  { id: '19', entity_type: 'company', entity_id: '11', topic: 'remote_work', position: 'supported', summary: 'Remote-first company since founding. Fully distributed team.', source_url: 'https://vercel.com/careers', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // Coinbase stances
  { id: '20', entity_type: 'company', entity_id: '12', topic: 'politics', position: 'opposed', summary: 'CEO Brian Armstrong declared Coinbase would not engage in social activism. "Mission-focused" memo controversial with employees.', source_url: 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', source_type: 'company_website', stance_date: '2020-09-27', verified: true },
  { id: '21', entity_type: 'company', entity_id: '12', topic: 'dei', position: 'opposed', summary: 'After "mission-focused" memo, many DEI-focused employees left. Stopped discussing social issues.', source_url: 'https://www.nytimes.com/2020/10/coinbase-activism-brian-armstrong', source_type: 'news', stance_date: '2020-10-01', verified: true },
  { id: '22', entity_type: 'company', entity_id: '12', topic: 'layoffs', position: 'opposed', summary: 'Laid off 18% of workforce in June 2022, then another 20% in 2023. Rescinded job offers to new hires.', source_url: 'https://blog.coinbase.com/a-message-from-coinbase-ceo-and-cofounder-brian-armstrong-578d76eedb12', source_type: 'company_website', stance_date: '2022-06-14', verified: true },
  
  // Salesforce stances
  { id: '23', entity_type: 'company', entity_id: '14', topic: 'layoffs', position: 'opposed', summary: 'Laid off 10% of workforce (8,000 employees) in January 2023. Benioff blamed "over-hiring."', source_url: 'https://www.salesforce.com/news/press-releases/2023/01/04/salesforce-workforce-update/', source_type: 'company_website', stance_date: '2023-01-04', verified: true },
  { id: '24', entity_type: 'company', entity_id: '14', topic: 'dei', position: 'supported', summary: 'Strong public DEI commitments. Equal pay assessments. Chief Equality Officer role. LGBTQ+ advocacy.', source_url: 'https://www.salesforce.com/company/equality/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // Airbnb stances
  { id: '25', entity_type: 'company', entity_id: '17', topic: 'layoffs', position: 'mixed', summary: 'Laid off 25% of staff (1,900 people) in May 2020 during COVID. But CEO Chesky\'s memo praised as compassionate. Generous severance.', source_url: 'https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/', source_type: 'company_website', stance_date: '2020-05-05', verified: true },
  { id: '26', entity_type: 'company', entity_id: '17', topic: 'remote_work', position: 'supported', summary: 'Announced permanent "Live and Work Anywhere" policy in April 2022. No mandatory office.', source_url: 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', source_type: 'company_website', stance_date: '2022-04-28', verified: true },
  
  // Palantir stances
  { id: '27', entity_type: 'company', entity_id: '19', topic: 'politics', position: 'mixed', summary: 'Works with ICE and military. Peter Thiel is co-founder. Karp defends government work as patriotic duty.', source_url: 'https://www.palantir.com/newsroom/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  { id: '28', entity_type: 'company', entity_id: '19', topic: 'immigration', position: 'mixed', summary: 'Software used by ICE for deportations. Defended contracts. Employees protested internally.', source_url: 'https://www.wired.com/story/palantir-ice-immigration-enforcement-war/', source_type: 'news', stance_date: '2019-08-01', verified: true },
  
  // Spotify stances
  { id: '29', entity_type: 'company', entity_id: '16', topic: 'layoffs', position: 'opposed', summary: 'Laid off 17% of workforce in December 2023 (1,500 employees), third round of cuts that year.', source_url: 'https://newsroom.spotify.com/2023-12-04/an-update-on-spotifys-organizational-changes/', source_type: 'company_website', stance_date: '2023-12-04', verified: true },
  { id: '30', entity_type: 'company', entity_id: '16', topic: 'free_speech', position: 'mixed', summary: 'Kept Joe Rogan podcast despite COVID misinformation controversy. Removed some episodes but defended overall relationship.', source_url: 'https://newsroom.spotify.com/2022-01-30/spotify-ceo-daniel-ek-addresses-joe-rogan-situation/', source_type: 'company_website', stance_date: '2022-01-30', verified: true },
  
  // Netflix stances
  { id: '31', entity_type: 'company', entity_id: '15', topic: 'layoffs', position: 'opposed', summary: 'Multiple layoff rounds in 2022, including 450 employees. Cut animation and Tudum divisions.', source_url: 'https://www.theverge.com/2022/6/netflix-layoffs', source_type: 'news', stance_date: '2022-06-23', verified: true },
  { id: '32', entity_type: 'company', entity_id: '15', topic: 'free_speech', position: 'supported', summary: 'Published memo telling employees who disagree with content to leave. "Not for everybody."', source_url: 'https://www.wsj.com/articles/at-netflix-radical-transparency-and-blunt-firings-unsettle-the-ranks-11654017748', source_type: 'news', stance_date: '2022-05-13', verified: true },
  
  // Person stances - Elon Musk
  { id: '33', entity_type: 'person', entity_id: '2', topic: 'dei', position: 'opposed', summary: 'Called DEI "just another word for racism." Promoted anti-DEI content on X. Disbanded Tesla DEI team.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2024-01-15', verified: true },
  { id: '34', entity_type: 'person', entity_id: '2', topic: 'politics', position: 'supported', summary: 'Endorsed and heavily funded Trump in 2024. Will lead DOGE (Department of Government Efficiency). Largest individual political donor.', source_url: 'https://www.nytimes.com/2024/elon-musk-trump-support', source_type: 'news', stance_date: '2024-10-15', verified: true },
  { id: '35', entity_type: 'person', entity_id: '2', topic: 'free_speech', position: 'supported', summary: 'Bought Twitter to promote "free speech." Unbanned previously suspended accounts. Reduced content moderation.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2022-10-27', verified: true },
  { id: '36', entity_type: 'person', entity_id: '2', topic: 'union', position: 'opposed', summary: 'Publicly mocked unions. Tesla has no unions. NLRB violations. Told workers they could lose stock options if they unionized.', source_url: 'https://www.nlrb.gov/case/32-CA-197020', source_type: 'news', stance_date: '2018-05-21', verified: true },
  { id: '37', entity_type: 'person', entity_id: '2', topic: 'remote_work', position: 'opposed', summary: 'Called remote work "morally wrong." Required Tesla employees back full-time. Criticized companies allowing WFH.', source_url: 'https://twitter.com/elonmusk', source_type: 'social_media', stance_date: '2022-06-01', verified: true },
  
  // Person stances - Mark Zuckerberg
  { id: '38', entity_type: 'person', entity_id: '1', topic: 'politics', position: 'mixed', summary: 'Met with Trump after 2024 election. Praised "badass" survival after assassination attempt. Historically tried to stay neutral.', source_url: 'https://www.bloomberg.com/news/zuckerberg-trump-meeting-2024', source_type: 'news', stance_date: '2024-11-21', verified: true },
  { id: '39', entity_type: 'person', entity_id: '1', topic: 'ai_ethics', position: 'supported', summary: 'Committed to open-source AI with Llama models. Criticized OpenAI\'s closed approach.', source_url: 'https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/', source_type: 'company_website', stance_date: '2024-04-18', verified: true },
  
  // Person stances - Sam Altman
  { id: '40', entity_type: 'person', entity_id: '7', topic: 'ai_ethics', position: 'mixed', summary: 'Publicly advocates for AI regulation and safety. But also pushes rapid AI deployment. Fired by board over safety concerns, then reinstated.', source_url: 'https://openai.com/blog/planning-for-agi-and-beyond', source_type: 'company_website', stance_date: '2023-02-24', verified: true },
  
  // Person stances - Brian Armstrong
  { id: '41', entity_type: 'person', entity_id: '11', topic: 'politics', position: 'opposed', summary: 'Declared Coinbase would not engage with social or political issues. "Mission focused" only.', source_url: 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', source_type: 'company_website', stance_date: '2020-09-27', verified: true },
  
  // Person stances - Guillermo Rauch
  { id: '42', entity_type: 'person', entity_id: '10', topic: 'politics', position: 'supported', summary: 'Posted support for Trump on X after 2024 election. Faced backlash from developer community. Later deleted some posts.', source_url: 'https://twitter.com/rauchg', source_type: 'social_media', stance_date: '2024-11-06', verified: true },
  
  // Person stances - Marc Benioff
  { id: '43', entity_type: 'person', entity_id: '13', topic: 'dei', position: 'supported', summary: 'Long-time advocate for equal pay and LGBTQ+ rights. Threatened to move events from states with discriminatory laws.', source_url: 'https://www.salesforce.com/company/equality/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  { id: '44', entity_type: 'person', entity_id: '13', topic: 'environment', position: 'supported', summary: 'Committed Salesforce to net-zero. Planted 100 million trees initiative. Sustainability Cloud product.', source_url: 'https://www.salesforce.com/company/sustainability/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // Person stances - Brian Chesky
  { id: '45', entity_type: 'person', entity_id: '12', topic: 'remote_work', position: 'supported', summary: 'Champion of remote work. Made Airbnb "Live and Work Anywhere." Said "the office as we know it is over."', source_url: 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', source_type: 'company_website', stance_date: '2022-04-28', verified: true },
  
  // Person stances - Tim Cook
  { id: '46', entity_type: 'person', entity_id: '4', topic: 'dei', position: 'supported', summary: 'First openly gay Fortune 500 CEO. Strong LGBTQ+ advocacy. Apple diversity commitments.', source_url: 'https://www.bloomberg.com/news/tim-cook-gay', source_type: 'news', stance_date: '2014-10-30', verified: true },
  { id: '47', entity_type: 'person', entity_id: '4', topic: 'environment', position: 'supported', summary: 'Apple carbon neutral by 2030 commitment. Removed chargers to reduce waste. Recycling programs.', source_url: 'https://www.apple.com/environment/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // Person stances - Peter Thiel
  { id: '48', entity_type: 'person', entity_id: '14', topic: 'politics', position: 'supported', summary: 'Major Trump donor and supporter. Spoke at 2016 RNC. Funded JD Vance\'s campaign. Libertarian views.', source_url: 'https://www.nytimes.com/peter-thiel-trump', source_type: 'news', stance_date: '2024-07-01', verified: true },
  { id: '49', entity_type: 'person', entity_id: '14', topic: 'dei', position: 'opposed', summary: 'Criticized diversity initiatives. Palantir faced discrimination lawsuits. Believes in meritocracy over DEI.', source_url: 'https://www.wired.com/story/peter-thiel-diversity-programs/', source_type: 'news', stance_date: '2020-01-15', verified: true },
  
  // VC stances - a16z
  { id: '50', entity_type: 'vc', entity_id: '1', topic: 'politics', position: 'supported', summary: 'Marc Andreessen endorsed Trump. Ben Horowitz also supported Trump. Firm donated to pro-crypto candidates.', source_url: 'https://www.nytimes.com/2024/a16z-trump-endorsement', source_type: 'news', stance_date: '2024-07-16', verified: true },
  { id: '51', entity_type: 'vc', entity_id: '1', topic: 'ai_ethics', position: 'supported', summary: 'Marc Andreessen wrote "Techno-Optimist Manifesto" explicitly rejecting AI doomerism and ethics concerns.', source_url: 'https://a16z.com/the-techno-optimist-manifesto/', source_type: 'company_website', stance_date: '2023-10-16', verified: true },
  
  // VC stances - Sequoia
  { id: '52', entity_type: 'vc', entity_id: '2', topic: 'layoffs', position: 'mixed', summary: 'Sent "R.I.P. Good Times" memo in 2022 warning founders to cut costs. Advocated for layoffs as survival.', source_url: 'https://twitter.com/sequoia/status/1527316464345636864', source_type: 'social_media', stance_date: '2022-05-19', verified: true },
  
  // VC stances - Founders Fund
  { id: '53', entity_type: 'vc', entity_id: '5', topic: 'politics', position: 'supported', summary: 'Peter Thiel\'s firm. Major Trump and Republican donors. Funded JD Vance, Blake Masters.', source_url: 'https://www.nytimes.com/founders-fund-politics', source_type: 'news', stance_date: '2024-01-01', verified: true },
  { id: '54', entity_type: 'vc', entity_id: '5', topic: 'dei', position: 'opposed', summary: 'Thiel has criticized diversity programs. Fund focuses on "contrarian" founders.', source_url: 'https://foundersfund.com/our-values/', source_type: 'company_website', stance_date: '2023-01-01', verified: true },
  
  // VC stances - Y Combinator
  { id: '55', entity_type: 'vc', entity_id: '7', topic: 'remote_work', position: 'supported', summary: 'Moved to remote/hybrid batches during COVID. Continued offering remote options.', source_url: 'https://www.ycombinator.com/blog/remote-batches', source_type: 'company_website', stance_date: '2020-04-01', verified: true },
];

// Helper functions to query mock data
export function getCompanyBySlug(slug: string) {
  return companies.find(c => c.slug === slug) || null;
}

export function getPersonBySlug(slug: string) {
  const person = people.find(p => p.slug === slug);
  if (!person) return null;
  const company = person.current_company_id ? companies.find(c => c.id === person.current_company_id) : null;
  return { ...person, current_company: company };
}

export function getVCBySlug(slug: string) {
  return vcs.find(v => v.slug === slug) || null;
}

export function getStancesForEntity(entityType: string, entityId: string) {
  return stances.filter(s => s.entity_type === entityType && s.entity_id === entityId)
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime());
}

export function getStancesByTopic(topic: string) {
  return stances.filter(s => s.topic === topic)
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime());
}

export function getRecentStances(limit: number = 6) {
  return stances
    .sort((a, b) => new Date(b.stance_date || '1970-01-01').getTime() - new Date(a.stance_date || '1970-01-01').getTime())
    .slice(0, limit);
}

export function searchEntities(query: string) {
  const q = query.toLowerCase();
  const results = [];
  
  for (const c of companies) {
    if (c.name.toLowerCase().includes(q)) {
      results.push({ type: 'company' as const, id: c.id, name: c.name, slug: c.slug, subtitle: c.industry });
    }
  }
  
  for (const p of people) {
    if (p.name.toLowerCase().includes(q)) {
      results.push({ type: 'person' as const, id: p.id, name: p.name, slug: p.slug, subtitle: p.current_role });
    }
  }
  
  for (const v of vcs) {
    if (v.name.toLowerCase().includes(q)) {
      results.push({ type: 'vc' as const, id: v.id, name: v.name, slug: v.slug, subtitle: 'Venture Capital' });
    }
  }
  
  return results.slice(0, 10);
}

export function getEntityForStance(stance: typeof stances[0]) {
  if (stance.entity_type === 'company') {
    const company = companies.find(c => c.id === stance.entity_id);
    return { name: company?.name || '', slug: company?.slug || '' };
  } else if (stance.entity_type === 'person') {
    const person = people.find(p => p.id === stance.entity_id);
    return { name: person?.name || '', slug: person?.slug || '' };
  } else if (stance.entity_type === 'vc') {
    const vc = vcs.find(v => v.id === stance.entity_id);
    return { name: vc?.name || '', slug: vc?.slug || '' };
  }
  return { name: '', slug: '' };
}

export function getStanceCountForEntity(entityType: string, entityId: string) {
  return stances.filter(s => s.entity_type === entityType && s.entity_id === entityId).length;
}

export function getStanceCountForTopic(topic: string) {
  return stances.filter(s => s.topic === topic).length;
}

export function getPeopleAtCompany(companyId: string) {
  return people.filter(p => p.current_company_id === companyId);
}
