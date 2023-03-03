import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.description}>
      <ul className={styles.category}>
        <Link className={styles.categoryItem} href="/">
          Home
        </Link>
        <Link className={styles.categoryItem} href="/about">
          About
        </Link>
        <Link className={styles.categoryItem} href="/blog/hello-world">
          Blog Hello word
        </Link>

        <Link className={styles.categoryItem} href="/blog/blog-2">
          Blog Personal
        </Link>
      </ul>
    </div>
  );
}
