import styles from "../styles/NavBar.module.scss";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <Link href="/">
        <a className={styles.Home}>
          <li>RiceHub</li>
        </a>
      </Link>
    </nav>
  );
}
