import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Headline title="About Page" />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello<a href="https://nextjs.org">about page</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/about.js</code>
        </p>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
