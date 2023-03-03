import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function Comment() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const comment = router.query.comment as string;

  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.body}>
          <h2>Post: {slug}</h2>
          <h1>Comment: {comment}</h1>
        </div>

        <Footer />
      </main>
    </>
  );
}
