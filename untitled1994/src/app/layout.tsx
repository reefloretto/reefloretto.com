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
        <div className="">
          <div className="text-stone-600 container mt-4 max-w-3xl">
            <HeaderContent />
            <main>{children}</main>
            <footer className="pt-4">
              © <span>{new Date().getFullYear()}</span> by Reef Loretto
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
