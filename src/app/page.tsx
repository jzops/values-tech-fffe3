import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Building2 } from 'lucide-react'
import { SearchBox } from '@/components/SearchBox'
import { StanceCard } from '@/components/StanceCard'
import { TOPICS } from '@/lib/constants'
import { companies, people, stances, getRecentStances, getEntityForStance } from '@/lib/mock-data'

export default function HomePage() {
  const recentStances = getRecentStances(6).map(stance => ({
    ...stance,
    ...getEntityForStance(stance)
  }))

  const stats = {
    companies: companies.length,
    people: people.length,
    stances: stances.length
  }

  const featuredTopics = ['layoffs', 'dei', 'remote_work', 'palestine', 'ai_ethics', 'worker_treatment']

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
            What tech{' '}
            <span className="text-[#FF6B35]">actually</span>{' '}
            stands for
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We track the public stances of tech companies, executives, and VCs on the issues that matter. 
            Every claim sourced. Every position documented.
          </p>

          <div className="mt-10 max-w-xl mx-auto">
            <SearchBox />
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              <span><strong className="text-gray-900">{stats.companies}</strong> Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span><strong className="text-gray-900">{stats.people}</strong> People</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span><strong className="text-gray-900">{stats.stances}</strong> Stances</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredTopics.map(topicId => {
              const topic = TOPICS[topicId as keyof typeof TOPICS]
              return (
                <Link
                  key={topicId}
                  href={`/topic/${topicId}`}
                  className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <span className="text-xl">{topic.icon}</span>
                  <span className="font-medium text-gray-900 text-sm">{topic.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Stances */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Stances</h2>
            <Link
              href="/topics"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-1"
            >
              View all topics <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {recentStances.map(stance => (
              <StanceCard
                key={stance.id}
                stance={stance}
                showEntity
                entityName={stance.name}
                entitySlug={stance.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Accountability through transparency
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Every stance we document is sourced from public records: social media posts, 
            press releases, news articles, SEC filings, and donation records.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/methodology"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Our Methodology
            </Link>
            <Link
              href="/contribute"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Contribute Data
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
