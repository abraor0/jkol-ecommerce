import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Passowrd",
          type: "password",
          placeholder: "your password",
        },
      },
      authorize(credentials) {
        if (
          credentials &&
          credentials["username"] === "teste" &&
          credentials["password"] === "123456"
        ) {
          return {
            id: "brones",
            name: "Abrão",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
});

export { handler as GET, handler as POST };
