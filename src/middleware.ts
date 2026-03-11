import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // EARLY EXIT IF SUPABASE ENV VARS ARE MISSING
  // This prevents the "MIDDLEWARE_INVOCATION_FAILED" crash on Vercel 
  // when environment variables are not yet configured or fail to load.
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your-supabase-url') {
    return response
  }

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()

    // Protected routes logic
    // We must exempt /login and /auth/callback from the "must be logged in" redirect
    const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')
    const isLoginRoute = request.nextUrl.pathname.startsWith('/login')

    if (!user && !isLoginRoute && !isAuthRoute) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    if (user && isLoginRoute) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } catch (e) {
    // If auth fails for any reason, we allow the request to proceed to avoid infinite loops or total site-wide crashes
    console.error('Middleware Auth Error:', e)
    return response
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
