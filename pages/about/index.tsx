import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.body}>
          <h1>About</h1>
          <span>I am Peter, Software Engineer</span>
        </div>
        <Footer />
      </main>
    </>
  );
}
