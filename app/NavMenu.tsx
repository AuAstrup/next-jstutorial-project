import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { Open_Sans } from "next/font/google";
import { SignInButton, SignOutButton } from "@/components/LoginButtons";
import AuthCheck from "@/components/AuthCheck";

const inter = Open_Sans({ subsets: ["latin"] });

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          src="/betterdevelopers.png"
          width={80}
          height={30}
          alt="BD Logo"
        />
      </Link>
      <h1 className={styles.text}>BD-SPACE</h1>
      <ul className={styles.nav}>
        <li className={styles.links}>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={styles.links}>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className={styles.links}>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
