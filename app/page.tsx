import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={inter.className}></main>;
}
