import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import Githubprovider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    Githubprovider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
