import Link from "next/link";
import Image from "next/image";
import twitterIcon from "./public/twitter.svg";
import instagramIcon from "./public/instagram.svg";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const linkHoverClassName = "hover:opacity-20 transition-all";
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-50 pt-12">
        <div className="container mt-4 max-w-3xl">
          <div className="text-neutral-900">
            <Link className={`${linkHoverClassName}`} href="/">
              <h1 className="text-3xl">Reef Loretto</h1>
            </Link>
            <div className="text-neutral-600 my-4 flex flex-row space-x-3">
              <Link className={`rounded ${linkHoverClassName}`} href="/">
                Home
              </Link>
              <Link className={`rounded ${linkHoverClassName}`} href="/about">
                About
              </Link>
              <Link className={`rounded ${linkHoverClassName}`} href="/blog">
                Blog
              </Link>
              <Link className={`rounded ${linkHoverClassName}`} href="/contact">
                Contact
              </Link>
            </div>
            <div className="text-neutral-900 my-4">
              <main>{children}</main>
            </div>
          </div>
          <div className="opacity-70 flex flex-row space-x-3 my-4">
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://twitter.com/reefloretto"
            >
              <Image alt="twitter" src={twitterIcon} width={24} height={24} />
            </Link>
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://www.instagram.com/reefloretto/"
            >
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
              © <span>{new Date().getFullYear()}</span> by{" "}
              <Link
                className={`${linkHoverClassName}`}
                href="https://github.com/reefloretto"
                target="_blank"
              >
                Reef Loretto
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
