import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function NavAccountSection() {
  const session = await getServerSession();
  return (
    <div className="mt-12 flex justify-center">
      <Link
        className={buttonVariants({ size: "lg" })}
        href={session?.user ? "/api/auth/signout" : "/api/auth/signin"}
      >
        {session?.user ? "logout" : "login"}
      </Link>
    </div>
  );
}
