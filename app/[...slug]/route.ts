// app/[...slug]/route.ts
import { generateAITxt, generateLLMsTxt } from '@/app/utils/aiUtils'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.pathname.slice(1)

  if (slug === 'ai.txt') {
    return new Response(generateAITxt(), {
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  if (slug === 'llms.txt') {
    return new Response(generateLLMsTxt(), {
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  return new Response('Not Found', { status: 404 })
}