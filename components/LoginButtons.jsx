"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  } else if (status === "authenticated") {
    return (
      <Link href={"/dashboards"}>
        <Image
          src={session.user?.image ?? "mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
