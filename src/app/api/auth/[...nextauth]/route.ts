import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        console.log("Email reçu:", credentials?.email);
        console.log("Email attendu:", process.env.ADMIN_EMAIL);
        console.log("Hash stocké:", process.env.ADMIN_PASSWORD_HASH);

        if (!credentials?.email || !credentials?.password) return null;
        if (credentials.email !== process.env.ADMIN_EMAIL) return null;

        const valid = await bcrypt.compare(
          credentials.password,
          process.env.ADMIN_PASSWORD_HASH!,
        );
        console.log("Mot de passe valide:", valid);

        if (!valid) return null;
        return { id: "1", email: credentials.email, name: "Matéo" };
      },
    }),
  ],
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
