import { AuthOptions } from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import { pool } from "./postgres"
import GoogleProvider from "next-auth/providers/google"
import { Adapter } from "next-auth/adapters"

export const authOptions: AuthOptions = {
  adapter: PostgresAdapter(pool) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = {
        ...session.user,
        id: user.id,
      } as any
      return session
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
}
