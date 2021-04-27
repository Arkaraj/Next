export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

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

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

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
      <p>{books.name}</p>
    </div>
  );
};

export default Details;
