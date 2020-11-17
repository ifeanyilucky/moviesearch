import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
export default function Home({ movies }) {
  console.log(movies);

  return (
    <Layout>
      <h2>Main</h2>

      {movies.map((movie) => (
        <h3>{movie}</h3>
      ))}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const apiKey = "7915a826";
  const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
  const res = await fetch(apiUrl);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
