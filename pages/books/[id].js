export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/books");

  const data = await res.json();

  const paths = data.map((book) => {
    return {
      params: { id: book.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  // https://jsonplaceholder.typicode.com/users/${id}
  const res = await fetch(`http://localhost:3000/api/books/${id}`);

  const data = await res.json();

  return {
    props: {
      books: data,
    },
  };
};

const Details = ({ books }) => {
  return (
    <div>
      <h1>Detail of the Book</h1>
      <h2>{books.name}</h2>
      <p>{books.description}</p>
      <p>Author: {books.author}</p>
      <p>Price: {books.price}</p>
    </div>
  );
};

export default Details;
