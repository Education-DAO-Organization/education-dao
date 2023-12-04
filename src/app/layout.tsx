import type { Metadata } from "next";
import { Suspense } from "react";
import fraktionSansFont from "@/fonts/fraktionSans";
import styles from "./layout.module.scss";
import "@/styles/globals.scss";
import GoogleTagManager from "@/components/googleTagManager";

export const metadata: Metadata = {
  title: "Education DAO | Coming Soon",
  description: "Consensys Education DAO will coming soon!",
};

const GTM_ID = "GTM-567GV6F";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fraktionSansFont.className}>
        {GTM_ID ? (
          <>
            <Suspense>
              <GoogleTagManager ID={GTM_ID} />
            </Suspense>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        ) : null}
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
