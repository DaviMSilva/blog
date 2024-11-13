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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-gradient-to-tr from-slate-200 via-blue-200 to-blue-300 h-screen text-gray-800 text-lg`}
      >
        <Header/>
        <main className="max-w-lg mx-auto mt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
