import Link from "next/link";
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
      <body className="bg-slate-50 pt-4">
        <div className="container mt-4 max-w-3xl">
          <div className="text-stone-900">
            <HeaderContent />
            <div className="my-4 flex flex-row space-x-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="my-4">
              <main>{children}</main>
            </div>
          </div>
          <footer className="text-stone-700 my-4">
            © <span>{new Date().getFullYear()}</span> by Reef Loretto
          </footer>
        </div>
      </body>
    </html>
  );
}
