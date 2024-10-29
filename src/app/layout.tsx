import Header from "@/components/header";
import { Loading } from "@/components/loading";
import { AppContextWrapper } from "@/context/app";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/footer";
import MobileMenu from "@/components/mobileMenu";
import Popup from "@/components/popup";
import Head from "next/head";
import SimpleSnackbar from "@/components/snackbar";

export const metadata: Metadata = {
  openGraph: {
    title: "IQ - Night",
    description: "Mafia night online game",
    url: "https://iqnight.app",
    type: "website",
    siteName: "IQ Night",
    images: [
      {
        url: "/banner.webp",
        width: 800,
        height: 600,
        alt: "Iq Night",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#050505" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/sarko-logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/sarko-logo.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PRTE7FTLBK"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PRTE7FTLBK');
            `,
          }}
        />
      </Head>
      <body>
        <AppContextWrapper>
          {/* <GoogleAnalytics gaId="G-PRTE7FTLBK" /> */}
          <Loading />
          <Header />
          <MobileMenu />
          <main className="flex-grow w-full">{children}</main>
          {/* <Stack /> */}
          {/* <Configs /> */}
          <Popup />
          <SimpleSnackbar />
          <Footer />
        </AppContextWrapper>
      </body>
    </html>
  );
}
