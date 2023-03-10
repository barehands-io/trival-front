import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import FooterMenu from "../FooterMenu";
import { $api } from "../../lib/Http";
import QuestionComponent from "../QuestionComponent";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  // fetch data from a url endpoint using axios

  try {
    const res = await $api.get("/gen/questions");

    const data = res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
};

interface Props {
  data: any;
}

export default function Home({ data }: Props = { data: "test" }) {
  const menuItems = [
    {
      name: "Settings",
      link: "/settings",
      description: "Learn how to Play the Game",
    },
    {
      name: "Help",
      link: "/help",
      description: "Get help with the game",
    },

    {
      name: "About Game",
      link: "/about",
      description: "About the game",
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Test your knowledge!!</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        {JSON.stringify(data.data)}

        {data.data.map((item: any, index:any) => {
          return <QuestionComponent key={index} question={item} />;
        })}

        <div className={styles.center}>

          <div className={styles.thirteen}>Start The Game</div>
        </div>

        <div>
          <FooterMenu menuItems={menuItems} />
        </div>
      </main>
    </>
  );
}
