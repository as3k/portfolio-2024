import { NextResponse } from 'next/server';
import { getFeaturedWork } from '@/lib/content';

export async function GET() {
  try {
    const featuredWork = getFeaturedWork();
    return NextResponse.json(featuredWork);
  } catch (error) {
    console.error('Error fetching featured work:', error);
    return NextResponse.json({ error: 'Failed to fetch featured work' }, { status: 500 });
  }
}
