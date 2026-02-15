import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — values.tech',
  description: 'Learn about values.tech and our mission to hold tech accountable.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About values.tech</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          <strong>values.tech</strong> is an independent project documenting what tech companies, 
          executives, and venture capitalists actually stand for—based on public record.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why This Exists</h2>
        <p className="text-gray-600 mb-4">
          Tech companies love to talk about their values. They publish elaborate culture decks, 
          tout their commitments to employees, and position themselves as forces for good.
        </p>
        <p className="text-gray-600 mb-4">
          But what happens when those values are tested? When layoffs happen. When politics 
          enter the workplace. When workers try to organize.
        </p>
        <p className="text-gray-600 mb-4">
          We believe actions speak louder than mission statements. This project documents 
          those actions—the real stances companies and leaders take when it matters.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Approach</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
          <li><strong>Public sources only:</strong> Every stance we document comes from publicly available information—news articles, social media posts, SEC filings, donation records, company statements.</li>
          <li><strong>Direct links:</strong> We link to primary sources whenever possible so you can verify claims yourself.</li>
          <li><strong>No editorial spin:</strong> We describe what happened, not what we think about it. You can draw your own conclusions.</li>
          <li><strong>Corrections welcome:</strong> If we've gotten something wrong, let us know. We'll fix it.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Who's Behind This</h2>
        <p className="text-gray-600 mb-4">
          values.tech is an independent project. We're not affiliated with any company, 
          publication, or political organization. We believe transparency and accountability 
          matter in tech.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
        <p className="text-gray-600 mb-4">
          Have a tip? Found an error? Want to contribute?
        </p>
        <p className="text-gray-600">
          Email: <span className="font-mono">tips@values.tech</span>
        </p>
      </div>
    </div>
  )
}
