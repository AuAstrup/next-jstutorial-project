import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("api/auth/signin");
  }

  return <p>You must be signed in...</p>;
}
