import "./globals.css";
import { Nunito } from "next/font/google";
import Head from "next/head";

import NavBar from "./components/navbar/NavBar";
import { LanguageProvider } from "./components/navbar/language/LanguageContext"; 

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import SearchModal from "./components/modals/SearchModal";
import RentModal from "./components/modals/RentModal";

import ToasterProvider from "./providers/ToasterProvider";

import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import Footer from "./components/Footer";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "FerieBolig",
  description: "FerieBolig prototype",
  keywords: ["ferie", "bolig"],
  content: "width=device-width, initial-scale=1.0"
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-ico" />
      </Head>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LanguageProvider>
          <LoginModal />
          <RegisterModal />
          <SearchModal/>
          <RentModal />
          <NavBar currentUser={currentUser} />
          </LanguageProvider>
        </ClientOnly>
        <div className="pt-28">
          {children}
        </div>
        <ClientOnly>
        <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
