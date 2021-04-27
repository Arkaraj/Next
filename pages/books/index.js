import styles from "../../styles/books.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

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

      {bookUser.map((user) => (
        <Link href={`/books/${user.id}`} key={user.id}>
          <h3 className={styles.single}>Name: {user.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default index;
