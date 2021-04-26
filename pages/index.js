import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Atheneum - HomePage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ab
        quisquam modi, neque eum eaque suscipit accusantium est mollitia
        necessitatibus excepturi, deleniti accusamus. Architecto deserunt, sequi
        cum saepe officia error.
      </p>
      <Link href="/books">
        <a>See all Book Listings</a>
      </Link>
      <Footer />
    </div>
  );
}
