import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });



export default function FooterMenu({ menuItems }: { menuItems: any }) {
  return (
    <div className="">
      <div className="grid grid-cols-4 justify-between">
        {menuItems.map((menuItem: any) => (
            <Link key={menuItem.name}
              href={menuItem.link}
              className={styles.card}
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {menuItem.name}
                <span>-&gt;</span>
              </h2>
              <p className={inter.className}>{menuItem.description}</p>
            </Link>
        ))}

        {/* <div>
<Link href="/settings">
          <div className={styles.card}>
            <h2 className={inter.className}>
              Settings <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Add your own settings to the game</p>
          </div>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </a>
</div> */}
      </div>
    </div>
  );
}
