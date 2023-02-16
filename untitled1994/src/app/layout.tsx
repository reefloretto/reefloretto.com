import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import twitterIcon from "./images/twitter.svg";
import instagramIcon from "./images/instagram.svg";
import linkedInIcon from "./images/linkedin.svg";
import spotifyIcon from "./images/spotify.svg";
import appleMusicIcon from "./images/applemusic.svg";
import soundCloudIcon from "./images/soundcloud.svg";
import mailIcon from "./images/mail.svg";
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
            <Link className={`${linkHoverClassName}`} href="/">
              <h1 className="font-bold text-3xl">Reef Loretto</h1>
            </Link>
            <div className="font-extralight text-neutral-600 my-4 flex flex-row space-x-3">
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
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://open.spotify.com/artist/7G7ksSJ4R5bwi7DqW4HkXE?si=g7aHrQUjTSqIW7LqqKt7Rg"
            >
              <Image alt="spotify" src={spotifyIcon} width={24} height={24} />
            </Link>
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://music.apple.com/us/artist/reef-loretto/654440007"
            >
              <Image
                alt="applemusic"
                src={appleMusicIcon}
                width={24}
                height={24}
              />
            </Link>
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://soundcloud.com/reefloretto"
            >
              <Image
                alt="soundcloud"
                src={soundCloudIcon}
                width={24}
                height={24}
              />
            </Link>
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="https://www.linkedin.com/in/reefloretto/"
            >
              <Image alt="linkedin" src={linkedInIcon} width={24} height={24} />
            </Link>
            <Link
              className="hover:opacity-20 transition-all"
              target="_blank"
              href="mailto:r@reefloretto.com"
            >
              <Image alt="mail" src={mailIcon} width={24} height={24} />
            </Link>
          </div>
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
