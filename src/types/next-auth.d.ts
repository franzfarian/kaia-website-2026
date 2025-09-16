import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      company?: string
      role?: string
      country?: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    company?: string
    role?: string
    country?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    company?: string
    role?: string
    country?: string
  }
}