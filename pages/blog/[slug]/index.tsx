import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.body}>
          <h1>Slug: {slug}</h1>

          <ul>
            <li>
              <Link href={`/blog/${slug}/first-comment`}>First comment</Link>
            </li>
            <li>
              <Link href={`/blog/${slug}/second-comment`}>Second comment</Link>
            </li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  );
}
