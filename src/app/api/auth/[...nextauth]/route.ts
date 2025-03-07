import NextAuth, { DefaultSession } from "next-auth";
import User from "@/lib/models/user";
import connectToDatabase from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add the `id` property
      name?: string | null;
      email?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          await connectToDatabase();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("User not found.");
          }

          // Ensure user.password is a string
          if (typeof user.password !== "string") {
            throw new Error("Invalid user password.");
          }

          // Compare passwords
          const isValidPassword = await bcrypt.compare(
            credentials.password, // This is guaranteed to be a string
            user.password // This is now guaranteed to be a string
          );

          if (!isValidPassword) {
            throw new Error("Invalid password.");
          }

          return user;
        } catch (err) {
          console.error("Error in authorize method:", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github" || account?.provider === "google") {
        await connectToDatabase();

        // Ensure profile.email exists
        if (!profile?.email) {
          throw new Error("Email is required.");
        }

        const existingUser = await User.findOne({ email: profile.email });
        if (!existingUser) {
          await User.create({
            name: profile?.name || "Unknown", // Fallback for name
            email: profile.email,
            image: profile?.image || null ,// Fallback for image
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = typeof user.image === "string" ? user.image : null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string,
          email: token.email,
          name: token.name,
          image: typeof token.image === "string" ? token.image : null,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };