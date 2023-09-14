import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src={"/next.svg"} height={30} width={200} alt={"next logo"} />
      </Link>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}
