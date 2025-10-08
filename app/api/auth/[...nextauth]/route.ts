// app/api/auth/[...nextauth]/route.ts

import { handlers } from '@/lib/auth'; // Adjust path to your auth.ts file

// Export the GET and POST handlers
export const { GET, POST } = handlers;