import { NextRequest, NextResponse } from 'next/server'
import { searchEntities } from '@/lib/mock-data'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }

  const results = searchEntities(query)

  return NextResponse.json({ results })
}
