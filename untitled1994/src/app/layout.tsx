import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-50 h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}
