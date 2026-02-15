-- values.tech Database Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Companies
create table if not exists companies (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  logo_url text,
  website text,
  founded_year int,
  headcount_range text,
  funding_stage text,
  total_raised bigint,
  industry text,
  description text,
  created_at timestamptz default now()
);

-- People
create table if not exists people (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  photo_url text,
  current_company_id uuid references companies(id),
  current_role text,
  twitter_handle text,
  linkedin_url text,
  bio text,
  created_at timestamptz default now()
);

-- VCs
create table if not exists vcs (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  logo_url text,
  website text,
  description text,
  aum text,
  created_at timestamptz default now()
);

-- Stances (the core table)
create table if not exists stances (
  id uuid primary key default uuid_generate_v4(),
  entity_type text not null check (entity_type in ('company', 'person', 'vc')),
  entity_id uuid not null,
  topic text not null,
  position text not null check (position in ('supported', 'opposed', 'silent', 'mixed')),
  summary text not null,
  source_url text not null,
  source_type text not null,
  stance_date date,
  verified boolean default true,
  created_at timestamptz default now()
);

-- Employment history
create table if not exists employment (
  id uuid primary key default uuid_generate_v4(),
  person_id uuid references people(id) on delete cascade,
  company_id uuid references companies(id) on delete cascade,
  role text,
  start_date date,
  end_date date,
  is_current boolean default false,
  created_at timestamptz default now()
);

-- VC investments
create table if not exists investments (
  id uuid primary key default uuid_generate_v4(),
  vc_id uuid references vcs(id) on delete cascade,
  company_id uuid references companies(id) on delete cascade,
  round text,
  date date,
  amount bigint,
  created_at timestamptz default now()
);

-- Indexes for performance
create index if not exists idx_stances_entity on stances(entity_type, entity_id);
create index if not exists idx_stances_topic on stances(topic);
create index if not exists idx_people_company on people(current_company_id);
create index if not exists idx_employment_person on employment(person_id);
create index if not exists idx_employment_company on employment(company_id);
create index if not exists idx_investments_vc on investments(vc_id);
create index if not exists idx_investments_company on investments(company_id);

-- Full text search indexes
create index if not exists idx_companies_name on companies using gin(to_tsvector('english', name));
create index if not exists idx_people_name on people using gin(to_tsvector('english', name));
create index if not exists idx_vcs_name on vcs using gin(to_tsvector('english', name));

-- RLS Policies (enable for production)
alter table companies enable row level security;
alter table people enable row level security;
alter table vcs enable row level security;
alter table stances enable row level security;
alter table employment enable row level security;
alter table investments enable row level security;

-- Public read access policies
create policy "Public read access" on companies for select using (true);
create policy "Public read access" on people for select using (true);
create policy "Public read access" on vcs for select using (true);
create policy "Public read access" on stances for select using (true);
create policy "Public read access" on employment for select using (true);
create policy "Public read access" on investments for select using (true);
