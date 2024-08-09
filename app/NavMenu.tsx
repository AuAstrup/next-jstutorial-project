import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

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
      </ul>
    </nav>
  );
}
