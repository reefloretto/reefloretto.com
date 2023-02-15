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
      <body className="bg-neutral-50 pt-12">
        <div className="container mt-4 max-w-3xl">
          <div className="text-neutral-900">
            <HeaderContent />
            <div className="text-neutral-500 my-4 flex flex-row space-x-3">
              <Link
                className="rounded hover:bg-indigo-100 active:bg-indigo-200"
                href="/"
              >
                Home
              </Link>
              <Link
                className="rounded hover:bg-indigo-100 active:bg-indigo-200"
                href="/about"
              >
                About
              </Link>
              <Link
                className="rounded hover:bg-indigo-100 active:bg-indigo-200"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="my-4">
              <main>{children}</main>
            </div>
          </div>
          <footer className="text-sm text-neutral-500 my-8">
            © <span>{new Date().getFullYear()}</span> by Reef Loretto
          </footer>
        </div>
      </body>
    </html>
  );
}
