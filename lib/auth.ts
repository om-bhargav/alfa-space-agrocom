// auth.ts

import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/actions/auth-actions";
import { compare,hashPassword } from "@/lib/passtechniques";

export const config = {
  // Specify custom pages to override the default NextAuth pages
  pages: {
    signIn: "/admin",
    signOut:"/admin"
  },
  session: {
    strategy: "jwt", // Required for Credentials Provider
  },
  debug:process.env.TYPE==="development",
  providers: [
    Credentials({
      // Credentials keys must match the form field names (e.g., <input name="email">)
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }
        const {email,password} = credentials;
        const user = await getUserByEmail(email as string);
        if (!user) return null;
        const res = await compare(password as string,user.password);
        if(!res) return null;
        return {"name":user.name,"email":user.email,"phone_no":user.phone_no,"id":user._id.toString()};
      },
    }),
  ],
    callbacks: {
    // Runs when a new JWT is created (e.g., after login)
    async jwt({ token, user }:{token:any,user:any}) {
      if (user) {
          // 'user' here comes from the successful 'authorize' return value
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          token.pno = user.phone_no;
      }
      return token;
    },

    // Runs every time a session is checked
    async session({ session, token }:{session:any,token:any}) {
      if (token.id) {
        // Pull 'id' and 'role' from the token and attach them to the session object
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.pno = token.pno;
      }
      return session;
    },
  }
} satisfies NextAuthConfig;

// Export methods for use in Server Actions and Route Handlers
export const { handlers, auth, signIn, signOut } = NextAuth(config);
