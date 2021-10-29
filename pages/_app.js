import "tailwindcss/tailwind.css";
import "../style/style.css";
import Head from "next/head";
import Layout from "../components/layout/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="NextJS Events App" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
