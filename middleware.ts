// CRITICAL: Set the runtime to nodejs to avoid errors when importing
// the auth configuration which relies on Mongoose/MongoDB.
//export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';

import { auth } from '@/lib/auth'; 
import { Session } from 'next-auth'; 

interface AuthRequest extends NextRequest {
    auth: Session | null;
}

// The default export must be the handler wrapped by auth().
// We use the AuthRequest type to inform TypeScript that 'req' now has 'auth'.
export default auth(async (req: AuthRequest) => { // 👈 AuthRequest resolves the TypeScript error
    const { nextUrl } = req;
    
    // req.auth is available here and contains the session object if the user is logged in
    const isLoggedIn = !!req.auth; 
    const pathname = nextUrl.pathname;
    
    // ----------------------------------------------------------------------
    // 1. Logic for Protected Admin Routes: /admin/u/*
    // ----------------------------------------------------------------------
    // Condition: Path starts with /admin/u AND the user is NOT logged in.
    if (pathname.startsWith('/admin/u') && !isLoggedIn) {
        // Redirect non-authenticated users to the base login page (/admin)
        const redirectUrl = new URL('/admin', nextUrl.origin);
        return NextResponse.redirect(redirectUrl);
    }
    
    // ----------------------------------------------------------------------
    // 2. Logic for Base Admin Login Route: /admin (or /admin/)
    // ----------------------------------------------------------------------
    // Condition: Path is /admin or /admin/ AND the user IS logged in.
    if ((pathname === '/admin' || pathname === '/admin/') && isLoggedIn) {
        // Redirect authenticated users away from the login page to the dashboard
        const redirectUrl = new URL('/admin/u/dashboard', nextUrl.origin);
        return NextResponse.redirect(redirectUrl);
    }

    // ----------------------------------------------------------------------
    // 3. Default: Allow all other requests to proceed
    // ----------------------------------------------------------------------
    // This includes:
    // - Logged-in users accessing /admin/u/*
    // - Logged-out users accessing public routes (e.g., /, /login, /register)
    // - Logged-out users accessing /admin (i.e., the login page itself)
    return NextResponse.next();
});

// Configure the matcher to only run this middleware on relevant paths
export const config = {
    runtime: "nodejs",
    unstable_allowDynamic: [
        // allows a single file
        "/lib/db",
        // use a glob to allow anything in the function-bind 3rd party module
        "/node_modules/mongoose/dist/**",
    ],
    matcher: [
    "/:path*",
    '/admin/:path*',
    '/api/auth/:path*', // Ensure Auth.js handlers are covered
  ]
};
