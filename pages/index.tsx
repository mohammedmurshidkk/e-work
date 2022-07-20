import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
