import styles from "../../styles/books.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  // https://jsonplaceholder.typicode.com/users
  const res = await fetch("http://localhost:3000/api/books");

  const data = await res.json();

  return {
    props: {
      bookUser: data,
    },
  };
};

const index = ({ bookUser }) => {
  return (
    <div>
      <h1>All Books:</h1>

      {bookUser.map((book) => (
        <Link href={`/books/${book.id}`} key={book.id}>
          <h3 className={styles.single}>Name: {book.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default index;
