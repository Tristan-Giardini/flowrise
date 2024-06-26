import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getPages } from "@/sanity/sanity-utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pages = await getPages();
  console.log(pages)

  return (
    <html lang="en">
      <body className={`${inter.className} py-5 px-10`}>
        <header className="flex flex-row justify-between content-center">
          <Link href="/" className="">
            Demo Site
          </Link>
          <div>
            <div className="flex flex-row gap-10">
            {pages.map((page) => (
              <>
                <Link href={`/${page.slug}`} key={page._id}>{page.title}</Link>
              </>
              ))}
            </div>
          </div>
        </header>
        <main className="pt-28 px-28">{children}</main>
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';
export const revalidate = 10;
