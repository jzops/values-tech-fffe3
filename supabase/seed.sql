-- values.tech Seed Data
-- Real companies, people, and VCs with documented public stances

-- ==================== COMPANIES ====================

INSERT INTO companies (id, name, slug, website, founded_year, headcount_range, funding_stage, total_raised, industry, description) VALUES
-- Big Tech
('11111111-1111-1111-1111-111111111101', 'Meta', 'meta', 'https://meta.com', 2004, '60,000+', 'Public', NULL, 'Social Media', 'Parent company of Facebook, Instagram, WhatsApp, and Reality Labs.'),
('11111111-1111-1111-1111-111111111102', 'Google', 'google', 'https://google.com', 1998, '150,000+', 'Public', NULL, 'Technology', 'Search, advertising, cloud, and AI company. Subsidiary of Alphabet.'),
('11111111-1111-1111-1111-111111111103', 'Amazon', 'amazon', 'https://amazon.com', 1994, '1,500,000+', 'Public', NULL, 'E-commerce', 'E-commerce, cloud computing, and AI company.'),
('11111111-1111-1111-1111-111111111104', 'Apple', 'apple', 'https://apple.com', 1976, '160,000+', 'Public', NULL, 'Consumer Electronics', 'Consumer electronics, software, and services company.'),
('11111111-1111-1111-1111-111111111105', 'Microsoft', 'microsoft', 'https://microsoft.com', 1975, '220,000+', 'Public', NULL, 'Software', 'Software, cloud, gaming, and AI company.'),
('11111111-1111-1111-1111-111111111106', 'Tesla', 'tesla', 'https://tesla.com', 2003, '120,000+', 'Public', NULL, 'Automotive', 'Electric vehicles, energy storage, and solar.'),
('11111111-1111-1111-1111-111111111107', 'X (Twitter)', 'x-twitter', 'https://x.com', 2006, '2,000', 'Private', NULL, 'Social Media', 'Social media platform, formerly Twitter.'),

-- Startups & Scale-ups
('11111111-1111-1111-1111-111111111108', 'Stripe', 'stripe', 'https://stripe.com', 2010, '8,000', 'Series I', 8700000000, 'Fintech', 'Payment processing infrastructure for the internet.'),
('11111111-1111-1111-1111-111111111109', 'OpenAI', 'openai', 'https://openai.com', 2015, '2,000', 'Series E', 11000000000, 'AI', 'AI research company. Creators of GPT and ChatGPT.'),
('11111111-1111-1111-1111-111111111110', 'Anthropic', 'anthropic', 'https://anthropic.com', 2021, '500', 'Series D', 7000000000, 'AI', 'AI safety company. Creators of Claude.'),
('11111111-1111-1111-1111-111111111111', 'Vercel', 'vercel', 'https://vercel.com', 2015, '500', 'Series D', 563000000, 'Developer Tools', 'Frontend cloud platform. Creators of Next.js.'),
('11111111-1111-1111-1111-111111111112', 'Coinbase', 'coinbase', 'https://coinbase.com', 2012, '3,500', 'Public', NULL, 'Crypto', 'Cryptocurrency exchange platform.'),
('11111111-1111-1111-1111-111111111113', 'Shopify', 'shopify', 'https://shopify.com', 2006, '10,000', 'Public', NULL, 'E-commerce', 'E-commerce platform for online stores.'),
('11111111-1111-1111-1111-111111111114', 'Salesforce', 'salesforce', 'https://salesforce.com', 1999, '70,000', 'Public', NULL, 'Enterprise Software', 'CRM and enterprise cloud software.'),
('11111111-1111-1111-1111-111111111115', 'Netflix', 'netflix', 'https://netflix.com', 1997, '13,000', 'Public', NULL, 'Entertainment', 'Streaming entertainment service.'),
('11111111-1111-1111-1111-111111111116', 'Spotify', 'spotify', 'https://spotify.com', 2006, '10,000', 'Public', NULL, 'Entertainment', 'Audio streaming and media services.'),
('11111111-1111-1111-1111-111111111117', 'Airbnb', 'airbnb', 'https://airbnb.com', 2008, '6,000', 'Public', NULL, 'Travel', 'Online marketplace for lodging and experiences.'),
('11111111-1111-1111-1111-111111111118', 'Uber', 'uber', 'https://uber.com', 2009, '32,000', 'Public', NULL, 'Transportation', 'Ride-sharing and delivery platform.'),
('11111111-1111-1111-1111-111111111119', 'Lyft', 'lyft', 'https://lyft.com', 2012, '4,000', 'Public', NULL, 'Transportation', 'Ride-sharing platform.'),
('11111111-1111-1111-1111-111111111120', 'DoorDash', 'doordash', 'https://doordash.com', 2013, '18,000', 'Public', NULL, 'Delivery', 'Food delivery platform.'),
('11111111-1111-1111-1111-111111111121', 'Instacart', 'instacart', 'https://instacart.com', 2012, '10,000', 'Public', NULL, 'Delivery', 'Grocery delivery platform.'),
('11111111-1111-1111-1111-111111111122', 'Palantir', 'palantir', 'https://palantir.com', 2003, '3,700', 'Public', NULL, 'Data Analytics', 'Data analytics and software company.'),
('11111111-1111-1111-1111-111111111123', 'Databricks', 'databricks', 'https://databricks.com', 2013, '5,000', 'Series I', 4100000000, 'Data Analytics', 'Unified analytics platform.'),
('11111111-1111-1111-1111-111111111124', 'Snowflake', 'snowflake', 'https://snowflake.com', 2012, '7,000', 'Public', NULL, 'Data Analytics', 'Cloud data platform.'),
('11111111-1111-1111-1111-111111111125', 'Figma', 'figma', 'https://figma.com', 2012, '1,500', 'Acquired', NULL, 'Design', 'Collaborative design platform. Acquired by Adobe.'),
('11111111-1111-1111-1111-111111111126', 'Notion', 'notion', 'https://notion.so', 2013, '500', 'Series C', 343000000, 'Productivity', 'Workspace and productivity platform.'),
('11111111-1111-1111-1111-111111111127', 'Discord', 'discord', 'https://discord.com', 2015, '600', 'Series H', 995000000, 'Social Media', 'Voice, video, and text communication platform.'),
('11111111-1111-1111-1111-111111111128', 'Slack', 'slack', 'https://slack.com', 2009, '3,000', 'Acquired', NULL, 'Productivity', 'Business messaging platform. Acquired by Salesforce.'),
('11111111-1111-1111-1111-111111111129', 'Zoom', 'zoom', 'https://zoom.us', 2011, '8,000', 'Public', NULL, 'Communications', 'Video communications platform.'),
('11111111-1111-1111-1111-111111111130', 'Cloudflare', 'cloudflare', 'https://cloudflare.com', 2009, '4,000', 'Public', NULL, 'Infrastructure', 'Web infrastructure and security company.');

-- ==================== PEOPLE ====================

INSERT INTO people (id, name, slug, current_company_id, current_role, twitter_handle, linkedin_url, bio) VALUES
-- CEOs and Founders
('22222222-2222-2222-2222-222222222201', 'Mark Zuckerberg', 'mark-zuckerberg', '11111111-1111-1111-1111-111111111101', 'CEO', 'faborskandroid', NULL, 'Co-founder and CEO of Meta. Built Facebook in his Harvard dorm room.'),
('22222222-2222-2222-2222-222222222202', 'Elon Musk', 'elon-musk', '11111111-1111-1111-1111-111111111106', 'CEO', 'elonmusk', NULL, 'CEO of Tesla and SpaceX. Owner of X (Twitter). Controversial tech billionaire.'),
('22222222-2222-2222-2222-222222222203', 'Sundar Pichai', 'sundar-pichai', '11111111-1111-1111-1111-111111111102', 'CEO', 'sundarpichai', NULL, 'CEO of Google and Alphabet. Joined Google in 2004.'),
('22222222-2222-2222-2222-222222222204', 'Tim Cook', 'tim-cook', '11111111-1111-1111-1111-111111111104', 'CEO', 'tim_cook', NULL, 'CEO of Apple since 2011. First openly gay Fortune 500 CEO.'),
('22222222-2222-2222-2222-222222222205', 'Satya Nadella', 'satya-nadella', '11111111-1111-1111-1111-111111111105', 'CEO', 'sataboranadella', NULL, 'CEO of Microsoft since 2014. Led cloud transformation.'),
('22222222-2222-2222-2222-222222222206', 'Andy Jassy', 'andy-jassy', '11111111-1111-1111-1111-111111111103', 'CEO', 'ajaborsy', NULL, 'CEO of Amazon since 2021. Previously led AWS.'),
('22222222-2222-2222-2222-222222222207', 'Sam Altman', 'sam-altman', '11111111-1111-1111-1111-111111111109', 'CEO', 'sama', NULL, 'CEO of OpenAI. Former president of Y Combinator.'),
('22222222-2222-2222-2222-222222222208', 'Dario Amodei', 'dario-amodei', '11111111-1111-1111-1111-111111111110', 'CEO', 'daborioamodei', NULL, 'Co-founder and CEO of Anthropic. Former VP of Research at OpenAI.'),
('22222222-2222-2222-2222-222222222209', 'Patrick Collison', 'patrick-collison', '11111111-1111-1111-1111-111111111108', 'CEO', 'patrickc', NULL, 'Co-founder and CEO of Stripe.'),
('22222222-2222-2222-2222-222222222210', 'John Collison', 'john-collison', '11111111-1111-1111-1111-111111111108', 'President', 'collision', NULL, 'Co-founder and President of Stripe.'),
('22222222-2222-2222-2222-222222222211', 'Guillermo Rauch', 'guillermo-rauch', '11111111-1111-1111-1111-111111111111', 'CEO', 'raaboruchg', NULL, 'Founder and CEO of Vercel. Creator of Next.js and Socket.io.'),
('22222222-2222-2222-2222-222222222212', 'Brian Armstrong', 'brian-armstrong', '11111111-1111-1111-1111-111111111112', 'CEO', 'braborian_armstrong', NULL, 'Co-founder and CEO of Coinbase.'),
('22222222-2222-2222-2222-222222222213', 'Brian Chesky', 'brian-chesky', '11111111-1111-1111-1111-111111111117', 'CEO', 'bchesky', NULL, 'Co-founder and CEO of Airbnb.'),
('22222222-2222-2222-2222-222222222214', 'Dara Khosrowshahi', 'dara-khosrowshahi', '11111111-1111-1111-1111-111111111118', 'CEO', 'daborak', NULL, 'CEO of Uber since 2017. Former CEO of Expedia.'),
('22222222-2222-2222-2222-222222222215', 'Tobi Lütke', 'tobi-lutke', '11111111-1111-1111-1111-111111111113', 'CEO', 'tobi', NULL, 'Founder and CEO of Shopify.'),
('22222222-2222-2222-2222-222222222216', 'Marc Benioff', 'marc-benioff', '11111111-1111-1111-1111-111111111114', 'CEO', 'Benioff', NULL, 'Co-founder and CEO of Salesforce. Known for stakeholder capitalism advocacy.'),
('22222222-2222-2222-2222-222222222217', 'Reed Hastings', 'reed-hastings', '11111111-1111-1111-1111-111111111115', 'Co-CEO', 'reedhastings', NULL, 'Co-founder of Netflix. Transitioned to Executive Chairman in 2023.'),
('22222222-2222-2222-2222-222222222218', 'Daniel Ek', 'daniel-ek', '11111111-1111-1111-1111-111111111116', 'CEO', 'eldsjal', NULL, 'Co-founder and CEO of Spotify.'),
('22222222-2222-2222-2222-222222222219', 'Alex Karp', 'alex-karp', '11111111-1111-1111-1111-111111111122', 'CEO', NULL, NULL, 'Co-founder and CEO of Palantir. Known for controversial government contracts.'),
('22222222-2222-2222-2222-222222222220', 'Matthew Prince', 'matthew-prince', '11111111-1111-1111-1111-111111111130', 'CEO', 'eastdakota', NULL, 'Co-founder and CEO of Cloudflare.'),
('22222222-2222-2222-2222-222222222221', 'Eric Yuan', 'eric-yuan', '11111111-1111-1111-1111-111111111129', 'CEO', 'eraborics_yuan', NULL, 'Founder and CEO of Zoom.'),
('22222222-2222-2222-2222-222222222222', 'Dylan Field', 'dylan-field', '11111111-1111-1111-1111-111111111125', 'CEO', 'zoink', NULL, 'Co-founder and CEO of Figma.'),
('22222222-2222-2222-2222-222222222223', 'Ivan Zhao', 'ivan-zhao', '11111111-1111-1111-1111-111111111126', 'CEO', 'ivaboranzhao', NULL, 'Co-founder and CEO of Notion.'),
('22222222-2222-2222-2222-222222222224', 'Jason Citron', 'jason-citron', '11111111-1111-1111-1111-111111111127', 'CEO', 'jaborasoncitron', NULL, 'Co-founder and CEO of Discord.'),
('22222222-2222-2222-2222-222222222225', 'Peter Thiel', 'peter-thiel', NULL, 'Investor', NULL, NULL, 'Co-founder of PayPal and Palantir. Controversial libertarian investor.');

-- ==================== VCs ====================

INSERT INTO vcs (id, name, slug, website, description, aum) VALUES
('33333333-3333-3333-3333-333333333301', 'Andreessen Horowitz', 'a16z', 'https://a16z.com', 'Major Silicon Valley VC firm founded by Marc Andreessen and Ben Horowitz.', '$35B+'),
('33333333-3333-3333-3333-333333333302', 'Sequoia Capital', 'sequoia', 'https://sequoia.com', 'One of the most successful venture capital firms. Early investors in Apple, Google, etc.', '$85B+'),
('33333333-3333-3333-3333-333333333303', 'Accel', 'accel', 'https://accel.com', 'Early-stage VC firm. Early investor in Facebook, Slack, Spotify.', '$50B+'),
('33333333-3333-3333-3333-333333333304', 'Benchmark', 'benchmark', 'https://benchmark.com', 'Equal partnership VC firm. Known for Uber, Twitter investments.', '$5B+'),
('33333333-3333-3333-3333-333333333305', 'Founders Fund', 'founders-fund', 'https://foundersfund.com', 'Peter Thiel''s VC firm. Known for SpaceX, Palantir investments.', '$12B+'),
('33333333-3333-3333-3333-333333333306', 'Kleiner Perkins', 'kleiner-perkins', 'https://kleinerperkins.com', 'Historic VC firm. Early investor in Amazon, Google.', '$15B+'),
('33333333-3333-3333-3333-333333333307', 'Y Combinator', 'y-combinator', 'https://ycombinator.com', 'Startup accelerator and seed funder. Alumni include Airbnb, Stripe, DoorDash.', '$7B+'),
('33333333-3333-3333-3333-333333333308', 'Tiger Global', 'tiger-global', 'https://tigerglobal.com', 'Aggressive growth investor. Known for rapid deal-making.', '$80B+'),
('33333333-3333-3333-3333-333333333309', 'SoftBank Vision Fund', 'softbank-vision-fund', 'https://softbank.com', 'Massive investment fund led by Masayoshi Son.', '$100B+'),
('33333333-3333-3333-3333-333333333310', 'Greylock Partners', 'greylock', 'https://greylock.com', 'Top-tier VC firm. Early investor in LinkedIn, Facebook.', '$10B+');

-- ==================== STANCES ====================

-- Meta stances
INSERT INTO stances (entity_type, entity_id, topic, position, summary, source_url, source_type, stance_date) VALUES
('company', '11111111-1111-1111-1111-111111111101', 'layoffs', 'opposed', 'Laid off 21,000 employees (25% of workforce) in 2022-2023, calling it "Year of Efficiency." Zuckerberg took responsibility but proceeded with multiple rounds.', 'https://about.fb.com/news/2023/03/mark-zuckerberg-meta-year-of-efficiency/', 'company_website', '2023-03-14'),
('company', '11111111-1111-1111-1111-111111111101', 'dei', 'mixed', 'Had DEI programs but scaled them back in 2023. VP of DEI departed.', 'https://www.businessinsider.com/meta-dei-programs-2023', 'news', '2023-11-01'),
('company', '11111111-1111-1111-1111-111111111101', 'remote_work', 'opposed', 'Required employees to return to office 3 days per week starting September 2023.', 'https://www.cnbc.com/2023/06/01/meta-requiring-workers-to-return-to-office-three-days-a-week.html', 'news', '2023-06-01'),
('company', '11111111-1111-1111-1111-111111111101', 'palestine', 'mixed', 'Accused of suppressing Palestinian content. Internal employee protests. No official company statement.', 'https://www.theverge.com/2023/11/meta-instagram-facebook-palestine', 'news', '2023-11-15'),

-- Google stances
('company', '11111111-1111-1111-1111-111111111102', 'layoffs', 'opposed', 'Laid off 12,000 employees (6% of workforce) in January 2023. CEO Pichai took responsibility.', 'https://blog.google/inside-google/message-ceo/january-update/', 'company_website', '2023-01-20'),
('company', '11111111-1111-1111-1111-111111111102', 'union', 'opposed', 'Fired workers involved in unionization efforts. NLRB found Google violated labor laws. Settled in 2023.', 'https://www.nlrb.gov/case/20-CA-234428', 'news', '2023-09-15'),
('company', '11111111-1111-1111-1111-111111111102', 'ai_ethics', 'mixed', 'Disbanded AI ethics team after controversies. Fired researchers Timnit Gebru and Margaret Mitchell. Continues AI development rapidly.', 'https://www.wired.com/story/google-timnit-gebru-ai-what-really-happened/', 'news', '2020-12-03'),
('company', '11111111-1111-1111-1111-111111111102', 'palestine', 'opposed', 'Fired 28+ employees who protested Project Nimbus (Israeli government cloud contract). No Drop Nimbus despite internal protests.', 'https://www.theverge.com/2024/4/google-fires-workers-protest-israel-nimbus', 'news', '2024-04-17'),
('company', '11111111-1111-1111-1111-111111111102', 'remote_work', 'opposed', 'Required hybrid return-to-office. Tracked badge swipes. Made RTO part of performance reviews.', 'https://www.cnbc.com/2023/06/08/google-to-crack-down-on-hybrid-work-asks-remote-workers-to-reconsider.html', 'news', '2023-06-08'),

-- Amazon stances
('company', '11111111-1111-1111-1111-111111111103', 'layoffs', 'opposed', 'Laid off 27,000+ employees across 2022-2023, the largest in company history.', 'https://www.aboutamazon.com/news/company-news/update-from-ceo-andy-jassy-on-role-eliminations', 'company_website', '2023-03-20'),
('company', '11111111-1111-1111-1111-111111111103', 'union', 'opposed', 'Aggressively fought unionization. Lost at JFK8 Staten Island warehouse. Challenged election. Known for anti-union consultants.', 'https://www.nlrb.gov/case/29-RC-288020', 'news', '2022-04-01'),
('company', '11111111-1111-1111-1111-111111111103', 'worker_treatment', 'opposed', 'Multiple reports of harsh warehouse conditions. High injury rates. Timed bathroom breaks controversy.', 'https://www.nytimes.com/2021/06/15/us/politics/amazon-warehouse-workers.html', 'news', '2021-06-15'),
('company', '11111111-1111-1111-1111-111111111103', 'remote_work', 'opposed', 'Mandated 3-day RTO in 2023, then 5-day RTO in 2024. Executives threatening termination for non-compliance.', 'https://www.aboutamazon.com/news/company-news/andy-jassy-update-on-amazon-return-to-office', 'company_website', '2024-09-16'),
('company', '11111111-1111-1111-1111-111111111103', 'environment', 'mixed', 'Climate Pledge to be net-zero by 2040. But also fights regulations and has massive carbon footprint from delivery operations.', 'https://sustainability.aboutamazon.com/climate-pledge', 'company_website', '2019-09-19'),

-- Tesla stances
('company', '11111111-1111-1111-1111-111111111106', 'union', 'opposed', 'No unions at any Tesla facility. Elon Musk has made anti-union statements. NLRB found Tesla violated labor laws.', 'https://www.nlrb.gov/case/32-CA-197020', 'news', '2021-03-25'),
('company', '11111111-1111-1111-1111-111111111106', 'worker_treatment', 'opposed', 'Multiple OSHA violations. High injury rates at Fremont plant. Racial discrimination lawsuits and settlements.', 'https://www.latimes.com/business/story/2022-10-tesla-racial-discrimination', 'news', '2022-10-13'),
('company', '11111111-1111-1111-1111-111111111106', 'dei', 'opposed', 'Disbanded DEI team in 2024. Musk publicly criticized DEI programs as "discrimination."', 'https://www.reuters.com/business/autos-transportation/tesla-dissolves-its-dei-team-2024-02-08/', 'news', '2024-02-08'),
('company', '11111111-1111-1111-1111-111111111106', 'remote_work', 'opposed', 'Musk ordered all employees back to office full-time in 2022, calling remote work "morally wrong."', 'https://www.theverge.com/2022/6/1/elon-musk-tesla-employees-return-office-remote-work', 'news', '2022-06-01'),

-- Stripe stances
('company', '11111111-1111-1111-1111-111111111108', 'layoffs', 'mixed', 'Laid off 14% of staff (1,100 people) in November 2022. CEOs wrote thoughtful memo taking responsibility, offered generous severance.', 'https://stripe.com/newsroom/news/ceo-patrick-collisons-email-to-stripe-employees', 'company_website', '2022-11-03'),
('company', '11111111-1111-1111-1111-111111111108', 'remote_work', 'supported', 'Remote-first company. No mandatory office days. Distributed workforce across the world.', 'https://stripe.com/jobs/remote', 'company_website', '2023-01-01'),

-- OpenAI stances
('company', '11111111-1111-1111-1111-111111111109', 'ai_ethics', 'mixed', 'Started as nonprofit focused on safety. Transitioned to "capped profit." Rapid deployment despite safety concerns. Board fired then rehired Sam Altman over safety disagreements.', 'https://www.nytimes.com/2023/11/sam-altman-openai-board', 'news', '2023-11-20'),
('company', '11111111-1111-1111-1111-111111111109', 'worker_treatment', 'mixed', 'Non-disparagement clauses in exit agreements. Clawback provisions for departing employees. Internal culture concerns.', 'https://www.vox.com/technology/openai-nda-equity-clawback', 'news', '2024-05-20'),

-- Vercel stances
('company', '11111111-1111-1111-1111-111111111111', 'politics', 'mixed', 'CEO Guillermo Rauch posted support for Trump, drawing backlash from developer community. Later deleted tweets.', 'https://twitter.com/rauchg', 'social_media', '2024-11-06'),
('company', '11111111-1111-1111-1111-111111111111', 'remote_work', 'supported', 'Remote-first company since founding. Fully distributed team.', 'https://vercel.com/careers', 'company_website', '2023-01-01'),

-- Coinbase stances
('company', '11111111-1111-1111-1111-111111111112', 'politics', 'opposed', 'CEO Brian Armstrong declared Coinbase would not engage in social activism. "Mission-focused" memo controversial with employees.', 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', 'company_website', '2020-09-27'),
('company', '11111111-1111-1111-1111-111111111112', 'dei', 'opposed', 'After "mission-focused" memo, many DEI-focused employees left. Stopped discussing social issues.', 'https://www.nytimes.com/2020/10/coinbase-activism-brian-armstrong', 'news', '2020-10-01'),
('company', '11111111-1111-1111-1111-111111111112', 'layoffs', 'opposed', 'Laid off 18% of workforce in June 2022, then another 20% in 2023. Rescinded job offers to new hires.', 'https://blog.coinbase.com/a-message-from-coinbase-ceo-and-cofounder-brian-armstrong-578d76eedb12', 'company_website', '2022-06-14'),

-- Salesforce stances
('company', '11111111-1111-1111-1111-111111111114', 'layoffs', 'opposed', 'Laid off 10% of workforce (8,000 employees) in January 2023. Benioff blamed "over-hiring."', 'https://www.salesforce.com/news/press-releases/2023/01/04/salesforce-workforce-update/', 'company_website', '2023-01-04'),
('company', '11111111-1111-1111-1111-111111111114', 'dei', 'supported', 'Strong public DEI commitments. Equal pay assessments. Chief Equality Officer role. LGBTQ+ advocacy.', 'https://www.salesforce.com/company/equality/', 'company_website', '2023-01-01'),
('company', '11111111-1111-1111-1111-111111111114', 'remote_work', 'mixed', 'Flexible "Success from Anywhere" policy, but pushed for more office time in 2024.', 'https://www.salesforce.com/news/stories/salesforce-office-anywhere/', 'company_website', '2021-02-09'),

-- Netflix stances
('company', '11111111-1111-1111-1111-111111111115', 'layoffs', 'opposed', 'Multiple layoff rounds in 2022, including 450 employees. Cut animation and Tudum divisions.', 'https://www.theverge.com/2022/6/netflix-layoffs', 'news', '2022-06-23'),
('company', '11111111-1111-1111-1111-111111111115', 'worker_treatment', 'mixed', 'Famous for "Keeper Test" and firing culture. High performers rewarded but low job security.', 'https://jobs.netflix.com/culture', 'company_website', '2023-01-01'),
('company', '11111111-1111-1111-1111-111111111115', 'free_speech', 'supported', 'Published memo telling employees who disagree with content to leave. "Not for everybody."', 'https://www.wsj.com/articles/at-netflix-radical-transparency-and-blunt-firings-unsettle-the-ranks-11654017748', 'news', '2022-05-13'),

-- Spotify stances
('company', '11111111-1111-1111-1111-111111111116', 'layoffs', 'opposed', 'Laid off 17% of workforce in December 2023 (1,500 employees), third round of cuts that year.', 'https://newsroom.spotify.com/2023-12-04/an-update-on-spotifys-organizational-changes/', 'company_website', '2023-12-04'),
('company', '11111111-1111-1111-1111-111111111116', 'free_speech', 'mixed', 'Kept Joe Rogan podcast despite COVID misinformation controversy. Removed some episodes but defended overall relationship.', 'https://newsroom.spotify.com/2022-01-30/spotify-ceo-daniel-ek-addresses-joe-rogan-situation/', 'company_website', '2022-01-30'),

-- Airbnb stances
('company', '11111111-1111-1111-1111-111111111117', 'layoffs', 'mixed', 'Laid off 25% of staff (1,900 people) in May 2020 during COVID. But CEO Chesky''s memo praised as compassionate. Generous severance.', 'https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/', 'company_website', '2020-05-05'),
('company', '11111111-1111-1111-1111-111111111117', 'remote_work', 'supported', 'Announced permanent "Live and Work Anywhere" policy in April 2022. No mandatory office.', 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', 'company_website', '2022-04-28'),
('company', '11111111-1111-1111-1111-111111111117', 'dei', 'supported', 'Strong anti-discrimination policies. Banned users who discriminate. Regular diversity reports.', 'https://www.airbnb.com/against-discrimination', 'company_website', '2023-01-01'),

-- Palantir stances
('company', '11111111-1111-1111-1111-111111111122', 'politics', 'mixed', 'Works with ICE and military. Peter Thiel is co-founder. Karp defends government work as patriotic duty.', 'https://www.palantir.com/newsroom/', 'company_website', '2023-01-01'),
('company', '11111111-1111-1111-1111-111111111122', 'immigration', 'mixed', 'Software used by ICE for deportations. Defended contracts. Employees protested internally.', 'https://www.wired.com/story/palantir-ice-immigration-enforcement-war/', 'news', '2019-08-01'),

-- Cloudflare stances
('company', '11111111-1111-1111-1111-111111111130', 'free_speech', 'mixed', 'Terminated service to 8chan after El Paso shooting. CEO Matthew Prince acknowledged the decision was uncomfortable precedent.', 'https://blog.cloudflare.com/terminating-service-for-8chan/', 'company_website', '2019-08-05'),

-- Person stances

-- Mark Zuckerberg
('person', '22222222-2222-2222-2222-222222222201', 'politics', 'mixed', 'Met with Trump after 2024 election. Praised "badass" survival after assassination attempt. Historically tried to stay neutral.', 'https://www.bloomberg.com/news/zuckerberg-trump-meeting-2024', 'news', '2024-11-21'),
('person', '22222222-2222-2222-2222-222222222201', 'ai_ethics', 'supported', 'Committed to open-source AI with Llama models. Criticized OpenAI''s closed approach.', 'https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/', 'company_website', '2024-04-18'),

-- Elon Musk
('person', '22222222-2222-2222-2222-222222222202', 'dei', 'opposed', 'Called DEI "just another word for racism." Promoted anti-DEI content on X. Disbanded Tesla DEI team.', 'https://twitter.com/elonmusk', 'social_media', '2024-01-15'),
('person', '22222222-2222-2222-2222-222222222202', 'politics', 'supported', 'Endorsed and heavily funded Trump in 2024. Will lead DOGE (Department of Government Efficiency). Largest individual political donor.', 'https://www.nytimes.com/2024/elon-musk-trump-support', 'news', '2024-10-15'),
('person', '22222222-2222-2222-2222-222222222202', 'free_speech', 'supported', 'Bought Twitter to promote "free speech." Unbanned previously suspended accounts. Reduced content moderation.', 'https://twitter.com/elonmusk', 'social_media', '2022-10-27'),
('person', '22222222-2222-2222-2222-222222222202', 'union', 'opposed', 'Publicly mocked unions. Tesla has no unions. NLRB violations. Told workers they could lose stock options if they unionized.', 'https://www.nlrb.gov/case/32-CA-197020', 'news', '2018-05-21'),
('person', '22222222-2222-2222-2222-222222222202', 'worker_treatment', 'opposed', 'Notorious for demanding extreme hours. "Sleeping at the office" culture. Mass firings at Twitter (80% of staff).', 'https://www.nytimes.com/2022/11/elon-musk-twitter-layoffs', 'news', '2022-11-04'),
('person', '22222222-2222-2222-2222-222222222202', 'remote_work', 'opposed', 'Called remote work "morally wrong." Required Tesla employees back full-time. Criticized companies allowing WFH.', 'https://twitter.com/elonmusk', 'social_media', '2022-06-01'),

-- Sam Altman
('person', '22222222-2222-2222-2222-222222222207', 'ai_ethics', 'mixed', 'Publicly advocates for AI regulation and safety. But also pushes rapid AI deployment. Fired by board over safety concerns, then reinstated.', 'https://openai.com/blog/planning-for-agi-and-beyond', 'company_website', '2023-02-24'),
('person', '22222222-2222-2222-2222-222222222207', 'politics', 'mixed', 'Donated to both parties. Met with world leaders on AI regulation. Testified to Congress supporting AI oversight.', 'https://www.judiciary.senate.gov/artificial-intelligence', 'news', '2023-05-16'),

-- Brian Armstrong
('person', '22222222-2222-2222-2222-222222222212', 'politics', 'opposed', 'Declared Coinbase would not engage with social or political issues. "Mission focused" only.', 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', 'company_website', '2020-09-27'),
('person', '22222222-2222-2222-2222-222222222212', 'dei', 'opposed', 'Rejected "woke" corporate culture. Many DEI-focused employees left after mission-focused memo.', 'https://blog.coinbase.com/coinbase-is-a-mission-focused-company-af882df8804', 'company_website', '2020-09-27'),

-- Guillermo Rauch
('person', '22222222-2222-2222-2222-222222222211', 'politics', 'supported', 'Posted support for Trump on X after 2024 election. Faced backlash from developer community. Later deleted some posts.', 'https://twitter.com/rauchg', 'social_media', '2024-11-06'),

-- Marc Benioff
('person', '22222222-2222-2222-2222-222222222216', 'dei', 'supported', 'Long-time advocate for equal pay and LGBTQ+ rights. Threatened to move events from states with discriminatory laws.', 'https://www.salesforce.com/company/equality/', 'company_website', '2023-01-01'),
('person', '22222222-2222-2222-2222-222222222216', 'environment', 'supported', 'Committed Salesforce to net-zero. Planted 100 million trees initiative. Sustainability Cloud product.', 'https://www.salesforce.com/company/sustainability/', 'company_website', '2023-01-01'),
('person', '22222222-2222-2222-2222-222222222216', 'layoffs', 'mixed', 'Oversaw 10% layoffs while also taking responsibility. Gave laid off workers 5 months severance.', 'https://www.salesforce.com/news/press-releases/2023/01/04/salesforce-workforce-update/', 'company_website', '2023-01-04'),

-- Patrick Collison
('person', '22222222-2222-2222-2222-222222222209', 'layoffs', 'mixed', 'Wrote compassionate layoff memo taking responsibility. Offered 14 weeks severance minimum.', 'https://stripe.com/newsroom/news/ceo-patrick-collisons-email-to-stripe-employees', 'company_website', '2022-11-03'),
('person', '22222222-2222-2222-2222-222222222209', 'ai_ethics', 'mixed', 'Stripe partnered with OpenAI. Generally techno-optimist views on AI advancement.', 'https://twitter.com/patrickc', 'social_media', '2023-06-01'),

-- Brian Chesky
('person', '22222222-2222-2222-2222-222222222213', 'remote_work', 'supported', 'Champion of remote work. Made Airbnb "Live and Work Anywhere." Said "the office as we know it is over."', 'https://news.airbnb.com/airbnb-announces-new-remote-working-policy/', 'company_website', '2022-04-28'),
('person', '22222222-2222-2222-2222-222222222213', 'layoffs', 'mixed', 'Praised for compassionate COVID layoffs. Wrote emotional memo. But still laid off 25% of staff.', 'https://news.airbnb.com/a-message-from-co-founder-and-ceo-brian-chesky/', 'company_website', '2020-05-05'),

-- Peter Thiel
('person', '22222222-2222-2222-2222-222222222225', 'politics', 'supported', 'Major Trump donor and supporter. Spoke at 2016 RNC. Funded JD Vance''s campaign. Libertarian views.', 'https://www.nytimes.com/peter-thiel-trump', 'news', '2024-07-01'),
('person', '22222222-2222-2222-2222-222222222225', 'dei', 'opposed', 'Criticized diversity initiatives. Palantir faced discrimination lawsuits. Believes in meritocracy over DEI.', 'https://www.wired.com/story/peter-thiel-diversity-programs/', 'news', '2020-01-15'),

-- Alex Karp
('person', '22222222-2222-2222-2222-222222222219', 'politics', 'mixed', 'Democrat but defends government surveillance contracts. Wrote WSJ op-ed defending Palantir''s work with military.', 'https://www.wsj.com/articles/silicon-valley-hypocrisy-palantir-big-tech-11599760950', 'news', '2020-09-10'),
('person', '22222222-2222-2222-2222-222222222219', 'palestine', 'supported', 'Palantir has contracts with Israeli military. Karp defended work as supporting ally.', 'https://www.haaretz.com/palantir-israel', 'news', '2023-11-01'),

-- Tim Cook
('person', '22222222-2222-2222-2222-222222222204', 'dei', 'supported', 'First openly gay Fortune 500 CEO. Strong LGBTQ+ advocacy. Apple diversity commitments.', 'https://www.bloomberg.com/news/tim-cook-gay', 'news', '2014-10-30'),
('person', '22222222-2222-2222-2222-222222222204', 'environment', 'supported', 'Apple carbon neutral by 2030 commitment. Removed chargers to reduce waste. Recycling programs.', 'https://www.apple.com/environment/', 'company_website', '2023-01-01'),
('person', '22222222-2222-2222-2222-222222222204', 'free_speech', 'mixed', 'Pulled apps for authoritarian governments. But also defended privacy vs FBI backdoor requests.', 'https://www.apple.com/customer-letter/', 'company_website', '2016-02-16'),

-- VC stances

-- Andreessen Horowitz
('vc', '33333333-3333-3333-3333-333333333301', 'politics', 'supported', 'Marc Andreessen endorsed Trump. Ben Horowitz also supported Trump. Firm donated to pro-crypto candidates.', 'https://www.nytimes.com/2024/a16z-trump-endorsement', 'news', '2024-07-16'),
('vc', '33333333-3333-3333-3333-333333333301', 'ai_ethics', 'supported', 'Marc Andreessen wrote "Techno-Optimist Manifesto" explicitly rejecting AI doomerism and ethics concerns.', 'https://a16z.com/the-techno-optimist-manifesto/', 'company_website', '2023-10-16'),
('vc', '33333333-3333-3333-3333-333333333301', 'dei', 'mixed', 'Had Cultural Leadership Fund for underrepresented founders. But partners have been critical of DEI broadly.', 'https://a16z.com/cultural-leadership-fund/', 'company_website', '2023-01-01'),

-- Sequoia
('vc', '33333333-3333-3333-3333-333333333302', 'layoffs', 'mixed', 'Sent "R.I.P. Good Times" memo in 2022 warning founders to cut costs. Advocated for layoffs as survival.', 'https://twitter.com/sequoia/status/1527316464345636864', 'social_media', '2022-05-19'),
('vc', '33333333-3333-3333-3333-333333333302', 'ai_ethics', 'supported', 'Heavy AI investments including OpenAI. Generally bullish on AI without much safety focus.', 'https://www.sequoiacap.com/article/ai-50/', 'company_website', '2023-01-01'),

-- Founders Fund
('vc', '33333333-3333-3333-3333-333333333305', 'politics', 'supported', 'Peter Thiel''s firm. Major Trump and Republican donors. Funded JD Vance, Blake Masters.', 'https://www.nytimes.com/founders-fund-politics', 'news', '2024-01-01'),
('vc', '33333333-3333-3333-3333-333333333305', 'dei', 'opposed', 'Thiel has criticized diversity programs. Fund focuses on "contrarian" founders.', 'https://foundersfund.com/our-values/', 'company_website', '2023-01-01'),

-- Y Combinator
('vc', '33333333-3333-3333-3333-333333333307', 'remote_work', 'supported', 'Moved to remote/hybrid batches during COVID. Continued offering remote options.', 'https://www.ycombinator.com/blog/remote-batches', 'company_website', '2020-04-01'),
('vc', '33333333-3333-3333-3333-333333333307', 'ai_ethics', 'mixed', 'Funded many AI companies. Some AI safety startups but also rapid deployment companies.', 'https://www.ycombinator.com/companies', 'company_website', '2023-01-01'),

-- SoftBank
('vc', '33333333-3333-3333-3333-333333333309', 'worker_treatment', 'mixed', 'Pushed WeWork and others to grow at all costs. Later write-downs and layoffs at portfolio companies.', 'https://www.wsj.com/softbank-vision-fund', 'news', '2019-11-01'),
('vc', '33333333-3333-3333-3333-333333333309', 'ai_ethics', 'supported', 'Massive AI investments. Masayoshi Son predicts superintelligent AI. Generally techno-optimist.', 'https://www.softbank.jp/en/ai-fund/', 'company_website', '2024-01-01');

-- ==================== EMPLOYMENT ====================

INSERT INTO employment (person_id, company_id, role, start_date, is_current) VALUES
('22222222-2222-2222-2222-222222222201', '11111111-1111-1111-1111-111111111101', 'CEO & Founder', '2004-02-04', true),
('22222222-2222-2222-2222-222222222202', '11111111-1111-1111-1111-111111111106', 'CEO', '2008-10-01', true),
('22222222-2222-2222-2222-222222222203', '11111111-1111-1111-1111-111111111102', 'CEO', '2015-08-10', true),
('22222222-2222-2222-2222-222222222204', '11111111-1111-1111-1111-111111111104', 'CEO', '2011-08-24', true),
('22222222-2222-2222-2222-222222222205', '11111111-1111-1111-1111-111111111105', 'CEO', '2014-02-04', true),
('22222222-2222-2222-2222-222222222206', '11111111-1111-1111-1111-111111111103', 'CEO', '2021-07-05', true),
('22222222-2222-2222-2222-222222222207', '11111111-1111-1111-1111-111111111109', 'CEO', '2019-03-01', true),
('22222222-2222-2222-2222-222222222208', '11111111-1111-1111-1111-111111111110', 'CEO', '2021-01-01', true),
('22222222-2222-2222-2222-222222222209', '11111111-1111-1111-1111-111111111108', 'CEO', '2010-01-01', true),
('22222222-2222-2222-2222-222222222211', '11111111-1111-1111-1111-111111111111', 'CEO', '2015-01-01', true),
('22222222-2222-2222-2222-222222222212', '11111111-1111-1111-1111-111111111112', 'CEO', '2012-06-01', true),
('22222222-2222-2222-2222-222222222213', '11111111-1111-1111-1111-111111111117', 'CEO', '2008-08-01', true),
('22222222-2222-2222-2222-222222222214', '11111111-1111-1111-1111-111111111118', 'CEO', '2017-08-30', true),
('22222222-2222-2222-2222-222222222215', '11111111-1111-1111-1111-111111111113', 'CEO', '2004-01-01', true),
('22222222-2222-2222-2222-222222222216', '11111111-1111-1111-1111-111111111114', 'CEO', '1999-03-01', true),
('22222222-2222-2222-2222-222222222218', '11111111-1111-1111-1111-111111111116', 'CEO', '2006-04-01', true),
('22222222-2222-2222-2222-222222222219', '11111111-1111-1111-1111-111111111122', 'CEO', '2003-01-01', true),
('22222222-2222-2222-2222-222222222220', '11111111-1111-1111-1111-111111111130', 'CEO', '2009-01-01', true),
('22222222-2222-2222-2222-222222222221', '11111111-1111-1111-1111-111111111129', 'CEO', '2011-01-01', true);

-- ==================== INVESTMENTS ====================

INSERT INTO investments (vc_id, company_id, round, date) VALUES
-- a16z investments
('33333333-3333-3333-3333-333333333301', '11111111-1111-1111-1111-111111111101', 'Series A', '2009-05-01'),
('33333333-3333-3333-3333-333333333301', '11111111-1111-1111-1111-111111111112', 'Series A', '2013-05-01'),
('33333333-3333-3333-3333-333333333301', '11111111-1111-1111-1111-111111111117', 'Series A', '2011-07-01'),
('33333333-3333-3333-3333-333333333301', '11111111-1111-1111-1111-111111111109', 'Seed', '2019-03-01'),
-- Sequoia investments
('33333333-3333-3333-3333-333333333302', '11111111-1111-1111-1111-111111111102', 'Series A', '1999-06-01'),
('33333333-3333-3333-3333-333333333302', '11111111-1111-1111-1111-333333333302', 'Series A', '2009-01-01'),
('33333333-3333-3333-3333-333333333302', '11111111-1111-1111-1111-111111111117', 'Series A', '2009-04-01'),
('33333333-3333-3333-3333-333333333302', '11111111-1111-1111-1111-111111111108', 'Series A', '2011-01-01'),
-- Founders Fund investments
('33333333-3333-3333-3333-333333333305', '11111111-1111-1111-1111-111111111122', 'Founder', '2003-01-01'),
('33333333-3333-3333-3333-333333333305', '11111111-1111-1111-1111-111111111117', 'Series A', '2011-01-01'),
('33333333-3333-3333-3333-333333333305', '11111111-1111-1111-1111-111111111108', 'Series B', '2012-07-01'),
-- Y Combinator
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111108', 'Seed', '2010-01-01'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111117', 'Seed', '2009-01-01'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111120', 'Seed', '2013-01-01'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111121', 'Seed', '2012-01-01'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111112', 'Seed', '2012-06-01'),
('33333333-3333-3333-3333-333333333307', '11111111-1111-1111-1111-111111111109', 'Seed', '2016-01-01');
