import Head from "next/head";
import styles from "./Layout.module.css";
const Layout = ({ children, title = `Welcome to IMDB Movie Search App ` }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          Built with love by Ifeanyi Lucky
        </footer>
      </div>
    </>
  );
};

export default Layout;
