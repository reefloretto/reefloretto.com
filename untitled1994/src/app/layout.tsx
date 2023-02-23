import Link from "next/link";
import { Inter } from "@next/font/google";
import Heading from './layouts/heading'
import Links from './layouts/links'
import SocialIcons from './layouts/socialIcons'
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkHoverClassName = "hover:opacity-20 transition-all";
  return (
    <html lang="en">
      <head />
      <body className={`${font.variable} font-sans bg-neutral-50 pt-12`}>
        <div className="container mt-4 max-w-3xl">
          <div className="text-neutral-900">
            <Heading />
            <Links />
            <div className="text-neutral-900 my-4">
              <main>{children}</main>
            </div>
          </div>
          <SocialIcons />
          <footer className="font-extralight text-sm text-neutral-500 my-4">
            <div>
              © <span>{new Date().getFullYear()}</span>
              <Link
                className={`${linkHoverClassName}`}
                href="https://github.com/reefloretto"
                target="_blank"
              >
                {" "}
                Reef Loretto
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
