import type { Metadata } from "next";
import Head from 'next/head';
import fraktionSansFont from "@/fonts/fraktionSans";
import styles from "./layout.module.scss";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Education DAO | Coming Soon",
  description: "Consensys Education DAO will coming soon!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-567GV6F');
          `
        }} />
      </Head>
      <body className={fraktionSansFont.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-567GV6F" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
