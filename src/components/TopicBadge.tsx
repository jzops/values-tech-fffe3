import Link from 'next/link'
import { TOPICS } from '@/lib/constants'

interface TopicBadgeProps {
  topicId: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  asLink?: boolean
}

export function TopicBadge({ topicId, size = 'md', showIcon = true, asLink = true }: TopicBadgeProps) {
  const topic = TOPICS[topicId as keyof typeof TOPICS]
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }

  const content = (
    <span className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors`}>
      {showIcon && <span>{topic?.icon || '📌'}</span>}
      <span>{topic?.name || topicId}</span>
    </span>
  )

  if (asLink) {
    return (
      <Link href={`/topic/${topicId}`}>
        {content}
      </Link>
    )
  }

  return content
}
