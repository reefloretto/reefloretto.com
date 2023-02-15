import Link from "next/link";
import Image from "next/image";
import twitterIcon from "./public/twitter.svg";
import instagramIcon from "./public/instagram.svg";
import "./globals.css";
import HeaderContent from "./header.mdx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 pt-12">
        <div className="container mt-4 max-w-3xl">
          <div className="text-neutral-900">
            <HeaderContent />
            <div className="text-neutral-600 my-4 flex flex-row space-x-3">
              <Link
                className="rounded hover:bg-neutral-100 active:bg-neutral-200"
                href="/"
              >
                Home
              </Link>
              <Link
                className="rounded hover:bg-neutral-100 active:bg-neutral-200"
                href="/about"
              >
                About
              </Link>
              <Link
                className="rounded hover:bg-neutral-100 active:bg-neutral-200"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="text-neutral-900 my-4">
              <main>{children}</main>
            </div>
          </div>
          <div className="opacity-70 flex flex-row space-x-3 my-4">
            <Link target="_blank" href="https://twitter.com/reefloretto">
              <Image alt="twitter" src={twitterIcon} width={24} height={24} />
            </Link>
            <Link target="_blank" href="https://www.instagram.com/reefloretto/">
              <Image
                alt="instagram"
                src={instagramIcon}
                width={24}
                height={24}
              />
            </Link>
          </div>
          <footer className="text-sm text-neutral-500 my-4">
            <div>
              © <span>{new Date().getFullYear()}</span> by Reef Loretto
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
