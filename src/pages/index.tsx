import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
// import

export const getServerSideProps: GetServerSideProps = async (context) => {
  const users = await prisma.user.findMany();
  // console.log(users);
  return {
    props: {
      users: JSON.stringify(users),
    },
  };
};

const Home: NextPage = (props: any) => {
  const users = JSON.parse(props.users);
  return (
    <div className={styles.container}>
      <header className={styles.Header}>
        One stop for *nix customization! {users[0].name}
      </header>
    </div>
  );
};

export default Home;
