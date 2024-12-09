import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/Header";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})



export const metadata: Metadata = {
  title: "DaviMSilva",
  description: "My personal page",
  icons: 'https://fav.farm/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-tr from-slate-200 text-gray-800 text-lg h-screen`}
      >
        <Header/>
        <main className="max-w-lg mx-auto px-4 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
