import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";
import Link from "next/link";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Spiderverse",
  description:
    "Criando um carrossel parallax do Aranhaverso com React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ paddingTop: 30, paddingBottom: 30}}>
          <Image
            className={styles["menu-icon"]}
            src="/icons/menu.svg"
            alt="Opções de Menu"
            width={36}
            height={25}
          />

          <Link href={"/"}>
            <Image
              className={styles.logo}
              src="/spider-logo.svg"
              alt="Spiderman"
              width={260}
              height={70}
            />
          </Link>

          <Image
            className={styles["user-icon"]}
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36}
          />
        </header>

        {children}
      </body>
    </html>
  );
}
