import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Remove or override CSP header to allow Turnstile
  response.headers.delete('Content-Security-Policy');

  return response;
}

export const config = {
  matcher: ['/contact'],
};
