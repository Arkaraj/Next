import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atheneum | HomePage</title>
        <meta name="keywords" content="Atheneum" />
      </Head>
      <div>
        <h1 className={styles.title}>Atheneum - HomePage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ab
          quisquam modi, neque eum eaque suscipit accusantium est mollitia
          necessitatibus excepturi, deleniti accusamus. Architecto deserunt,
          sequi cum saepe officia error.
        </p>
        <Link href="/books">
          <a className={styles.btn}>See all Book Listings</a>
        </Link>
      </div>
    </>
  );
}
